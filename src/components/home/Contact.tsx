import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  CalendarCheck,
  ServerCrash,
  RotateCcw,
  CalendarDays,
  Clock3,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../utils/emailjsConfig";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ScheduledData {
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  time: string;
  timestamp: string;
  confirmationId: string;
}

// Step 1: Calendar, Step 2: Details, Step 3: Confirmation, Step 4: Error
type Step = 1 | 2 | 3 | 4;

// ─── Constants ────────────────────────────────────────────────────────────────

const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const TIME_SLOTS: { label: string; value: string }[] = [
  { label: "9:00 AM", value: "09:00" },
  { label: "10:00 AM", value: "10:00" },
  { label: "11:00 AM", value: "11:00" },
  { label: "2:00 PM", value: "14:00" },
  { label: "3:00 PM", value: "15:00" },
  { label: "4:00 PM", value: "16:00" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const generateConfirmationId = (): string => {
  const now = new Date();
  const d = String(now.getDate()).padStart(2, "0");
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const y = String(now.getFullYear()).slice(-2);
  const H = String(now.getHours()).padStart(2, "0");
  const Mi = String(now.getMinutes()).padStart(2, "0");
  const S = String(now.getSeconds()).padStart(2, "0");
  const r = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `TGO-${d}${m}${y}-${H}${Mi}${S}-${r}`;
};

const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const validatePhone = (v: string) =>
  /^\+?\d{7,15}$/.test(v.trim().replace(/[\s()-]/g, ""));

const formatDate = (d: Date) =>
  d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const isTimeInPast = (date: Date, time24: string): boolean => {
  const [h, min] = time24.split(":").map(Number);
  const scheduled = new Date(date);
  scheduled.setHours(h, min, 0, 0);
  return scheduled < new Date();
};

// ─── Component ────────────────────────────────────────────────────────────────

function Contact() {
  // Calendar state
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState(""); // 24-h internal
  const [selectedTimeLabel, setSelectedTimeLabel] = useState(""); // display

  // Step state
  const [step, setStep] = useState<Step>(1);

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Async state
  const [submitting, setSubmitting] = useState(false);
  const [confId, setConfId] = useState("");
  const [formError, setFormError] = useState("");

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Initialize EmailJS
  useEffect(() => {
    if (EMAILJS_CONFIG?.PUBLIC_KEY) emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  // ── Calendar helpers ─────────────────────────────────────────────────────

  const yr = currentMonth.getFullYear();
  const mo = currentMonth.getMonth();
  const firstDay = new Date(yr, mo, 1).getDay();
  const daysInMonth = new Date(yr, mo + 1, 0).getDate();

  // Days of previous month shown as disabled prefix cells
  const prevMonthDays = new Date(yr, mo, 0).getDate(); // last day of prev month
  const prefixDays = Array.from(
    { length: firstDay },
    (_, i) => prevMonthDays - firstDay + 1 + i,
  );

  const handleDateSelect = (day: number) => {
    const d = new Date(yr, mo, day);
    if (d < today) return;
    setSelectedDate(d);
  };

  // ── Navigation ───────────────────────────────────────────────────────────

  const handleContinue = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and a time slot.");
      return;
    }
    if (isTimeInPast(selectedDate, selectedTime)) {
      alert("That time has already passed. Please choose a future slot.");
      return;
    }
    setFormError("");
    setStep(2);
  };

  const handleBack = () => {
    setFormError("");
    setStep((prev) => (prev === 4 ? 2 : 1) as Step);
  };

  // ── Email ────────────────────────────────────────────────────────────────

  const sendEmail = async (data: ScheduledData): Promise<boolean> => {
    try {
      const {
        SERVICE_ID,
        CVS_TEMPLATE_ID,
        PUBLIC_KEY,
        COMPANY_NAME,
        TO_COMPANY_EMAIL_ID,
        REPLY_TO_COMPANY_EMAIL_ID,
      } = EMAILJS_CONFIG || {};

      if (!SERVICE_ID || !CVS_TEMPLATE_ID || !PUBLIC_KEY) return false;

      await emailjs.send(
        SERVICE_ID,
        CVS_TEMPLATE_ID,
        {
          confirmation_id: data.confirmationId,
          from_name: data.name,
          from_email: data.email,
          from_mobile: data.phone,
          message: data.message || "No additional details provided.",
          scheduled_date: data.date,
          scheduled_time: data.time,
          user_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          timestamp: new Date().toLocaleString(),
          company_name: COMPANY_NAME || "",
          to_name: COMPANY_NAME || "",
          to_email: TO_COMPANY_EMAIL_ID || "",
          user_reply_to: data.email,
          company_reply_to: REPLY_TO_COMPANY_EMAIL_ID || "",
        },
        PUBLIC_KEY,
      );
      return true;
    } catch (err) {
      console.error("EmailJS error:", err);
      return false;
    }
  };

  // ── Submit ────────────────────────────────────────────────────────────────

  const handleSubmit = async () => {
    setFormError("");
    if (!name.trim()) {
      setFormError("Please enter your full name.");
      return;
    }
    if (!validateEmail(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!validatePhone(phone)) {
      setFormError("Please enter a valid phone number.");
      return;
    }
    if (!selectedDate || !selectedTime) {
      setFormError("No date/time selected.");
      return;
    }
    if (isTimeInPast(selectedDate, selectedTime)) {
      setFormError("That time has passed — go back and pick a future slot.");
      return;
    }

    const id = generateConfirmationId();
    setConfId(id);
    setSubmitting(true);

    const ok = await sendEmail({
      name,
      email,
      phone: phone.trim(),
      message,
      date: formatDate(selectedDate),
      time: selectedTimeLabel,
      timestamp: new Date().toISOString(),
      confirmationId: id,
    });

    setSubmitting(false);
    setStep(ok ? 3 : 4);
  };

  // ── Reset ─────────────────────────────────────────────────────────────────

  const resetForm = () => {
    setSelectedDate(null);
    setSelectedTime("");
    setSelectedTimeLabel("");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setConfId("");
    setFormError("");
    setStep(1);
  };

  // ── Shared right-panel (unchanged across all steps) ───────────────────────

  const RightPanel = () => (
    <div className="flex flex-col gap-6">
      {/* Contact info */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-extrabold text-zinc-950">CALL US</h3>
          <p className="text-zinc-500">
            Prefer to talk? Give us a call-our team is happy to disscuss
            scope,timelines, and the best approach for your needs
          </p>
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center">
              <Phone className="size-4 text-[#c10007]" />
            </div>
            <div>
              <p className="font-bold text-zinc-950 text-sm leading-5">
                +1 (800) 123-4567
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-extrabold text-zinc-950">EMAIL US</h3>
          <p className="text-zinc-500">
            Want to share doc or a brief? Email us and we'll follow up with a
            quick discovery call and a tailored proposal
          </p>
          <div className="flex items-center gap-3">
            <div className=" flex justify-center items-center">
              <Mail className="size-4 text-[#c10007]" />
            </div>
            <div>
              <p className="font-bold text-zinc-950 text-sm leading-5">
                hello@technogo.io
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Perks */}
      <div className="flex flex-col gap-2 w-fit p-3 bg-[#c10007]/15 rounded-xl">
        {[
          "Free 30-minute consultation",
          "No commitment required",
          "Expert advice guaranteed",
          "Tailored solutions for you",
        ].map((perk) => (
          <div key={perk} className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-[#c10007]" />
            <span className="text-zinc-950 text-xs leading-4">{perk}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <section className="bg-[oklch(0.94_0.06_25)] py-16 w-full">
      <div className="max-w-[1140px] mx-auto px-8">
        {/* Section heading */}
        <div className="flex mb-10 flex-col items-center gap-2">
          {/* <span className="font-semibold uppercase text-[#c10007] text-xs leading-4 tracking-widest">
            Book a Session
          </span> */}
          <h2 className=" font-extrabold text-center text-zinc-950 text-3xl leading-9 tracking-tight">
            Tell Us About <span className="text-[#c10007]">Your Project</span>
          </h2>
          <p className="text-zinc-500 text-lg leading-5">
            we'll get back to you within one buisness day with next steps and
            clear plan to move forward.
          </p>
        </div>

        <Card className="shadow-lg bg-white border-[#c10007]/30 border-2 border-solid p-8 gap-6">
          <CardContent className="p-0 gap-0">
            <div className="flex justify-between gap-8">
              {/* ── LEFT col (2/3 width) ─────────────────────────────────── */}
              <div className="w-xl">
                {/* ── STEP 1: Calendar + time slots ── */}
                {step === 1 && (
                  <>
                    {/* Month navigation */}
                    <div className="flex mb-4 justify-between items-center">
                      <button
                        onClick={() => setCurrentMonth(new Date(yr, mo - 1, 1))}
                        className="rounded-full bg-[#c10007]/15 flex justify-center items-center w-7 h-7"
                        aria-label="Previous month"
                      >
                        <ChevronLeft className="size-4 text-[#c10007]" />
                      </button>
                      <span className="font-bold text-zinc-950 text-sm leading-5">
                        {MONTHS[mo]} {yr}
                      </span>
                      <button
                        onClick={() => setCurrentMonth(new Date(yr, mo + 1, 1))}
                        className="rounded-full bg-[#c10007]/15 flex justify-center items-center w-7 h-7"
                        aria-label="Next month"
                      >
                        <ChevronRight className="size-4 text-[#c10007]" />
                      </button>
                    </div>

                    {/* Day-of-week labels */}
                    <div className="grid grid-cols-7 mb-4 gap-1">
                      {WEEK_DAYS.map((d) => (
                        <span
                          key={d}
                          className="font-semibold text-center text-[#71717b] text-[10px]"
                        >
                          {d}
                        </span>
                      ))}

                      {/* Trailing days of previous month */}
                      {prefixDays.map((d) => (
                        <span
                          key={`prev-${d}`}
                          className="text-center text-[#71717b]/40 text-[10px] py-1"
                        >
                          {d}
                        </span>
                      ))}

                      {/* Current month days */}
                      {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
                        (day) => {
                          const date = new Date(yr, mo, day);
                          const isPast = date < today;
                          const isSelected =
                            selectedDate?.toDateString() ===
                            date.toDateString();

                          if (isSelected) {
                            return (
                              <span
                                key={day}
                                onClick={() => handleDateSelect(day)}
                                className="cursor-pointer font-bold rounded-full bg-[#c10007] text-red-50 text-[10px] flex mx-auto justify-center items-center w-6 h-6"
                              >
                                {day}
                              </span>
                            );
                          }

                          return (
                            <span
                              key={day}
                              onClick={() => !isPast && handleDateSelect(day)}
                              className={`text-center rounded-sm text-[10px] py-1
                              ${
                                isPast
                                  ? "text-[#71717b]/40 cursor-not-allowed"
                                  : "cursor-pointer text-zinc-950 hover:bg-[#c10007]/10 hover:rounded-full w-6 h-6 flex mx-auto justify-center items-center transition-colors"
                              }`}
                            >
                              {day}
                            </span>
                          );
                        },
                      )}
                    </div>

                    {/* Time slot heading */}
                    <p className="font-semibold text-[#71717b] w-full text-center m-2 text-[16px] uppercase tracking-widest mt-1">
                      Select Time Slot
                    </p>

                    {/* Time slot pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      {TIME_SLOTS.map(({ label, value }) => {
                        const active = selectedTime === value;
                        return (
                          <button
                            key={value}
                            onClick={() => {
                              setSelectedTime(value);
                              setSelectedTimeLabel(label);
                            }}
                            className={
                              active
                                ? "font-semibold rounded-full bg-[#c10007] text-red-50 text-xs leading-4 px-3 py-1.5"
                                : "font-semibold rounded-full bg-[#c10007]/10 text-[#c10007] text-xs leading-4 border-[#c10007]/30 border-1 border-solid px-3 py-1.5 hover:bg-[#c10007]/20 transition-colors"
                            }
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Manual time input */}
                    <div className="flex flex-col gap-1 mt-1">
                      <p className="font-semibold text-[#71717b] w-full text-center m-2 text-[16px] uppercase tracking-widest">
                        Or enter manually
                      </p>
                      <input
                        type="time"
                        value={selectedTime}
                        onChange={(e) => {
                          const raw = e.target.value; // "HH:MM"
                          setSelectedTime(raw);
                          // Build a readable label from the raw 24h value
                          if (raw) {
                            const [hStr, mStr] = raw.split(":");
                            let h = parseInt(hStr, 10);
                            const m = mStr;
                            const ampm = h >= 12 ? "PM" : "AM";
                            if (h > 12) h -= 12;
                            if (h === 0) h = 12;
                            setSelectedTimeLabel(`${h}:${m} ${ampm}`);
                          } else {
                            setSelectedTimeLabel("");
                          }
                        }}
                        className="border border-[#c10007]/30 rounded-md px-3 py-1.5 text-xs text-zinc-950 outline-none focus:border-[#c10007] focus:ring-1 focus:ring-[#c10007]/30 transition-all w-full cursor-pointer"
                      />
                    </div>

                    {/* Selected summary pill */}
                    {selectedDate && selectedTime && (
                      <div className="mt-3 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs">
                        <CheckCircle2 className="h-4 w-4 text-red-600" />

                        <div className="flex items-center gap-1 text-red-700">
                          <CalendarDays className="h-3.5 w-3.5" />
                          <span>{formatDate(selectedDate)}</span>
                        </div>

                        <span className="text-red-300">•</span>

                        <div className="flex items-center gap-1 text-red-700">
                          <Clock3 className="h-3.5 w-3.5" />
                          <span>{selectedTimeLabel}</span>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* ── STEP 2: Details form ── */}
                {step === 2 && (
                  <div className="w-xl  flex flex-col gap-3">
                    <h3 className="font-bold text-zinc-950 text-sm leading-5">
                      Your details
                    </h3>

                    {formError && (
                      <p className="text-[10px] text-[#c10007] bg-[#c10007]/10 border border-[#c10007]/30 rounded px-3 py-2">
                        {formError}
                      </p>
                    )}

                    {/* Inputs — styled to match the existing card aesthetic */}
                    {[
                      {
                        label: "Full name",
                        type: "text",
                        value: name,
                        setter: setName,
                        placeholder: "Jane Smith",
                      },
                      {
                        label: "Email address",
                        type: "email",
                        value: email,
                        setter: setEmail,
                        placeholder: "jane@company.com",
                      },
                      {
                        label: "Phone number",
                        type: "tel",
                        value: phone,
                        setter: setPhone,
                        placeholder: "+1 (800) 123-4567",
                      },
                    ].map(({ label, type, value, setter, placeholder }) => (
                      <div key={label} className="w-full flex flex-col gap-1">
                        <label className="text-[#71717b] text-[10px] font-semibold">
                          {label} <span className="text-[#c10007]">*</span>
                        </label>
                        <input
                          type={type}
                          value={value}
                          onChange={(e) => setter(e.target.value)}
                          placeholder={placeholder}
                          className="border border-[#c10007]/30 rounded-md px-3 py-1.5 text-xs text-zinc-950 outline-none focus:border-[#c10007] focus:ring-1 focus:ring-[#c10007]/30 transition-all"
                        />
                      </div>
                    ))}

                    <div className="flex flex-col gap-1">
                      <label className="text-[#71717b] text-[10px] font-semibold">
                        What would you like to discuss?{" "}
                        <span className="text-[#71717b]/60 font-normal">
                          (optional)
                        </span>
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Brief description of your project or goals…"
                        rows={3}
                        className="border border-[#c10007]/30 rounded-md px-3 py-1.5 text-xs text-zinc-950 outline-none focus:border-[#c10007] focus:ring-1 focus:ring-[#c10007]/30 transition-all resize-none"
                      />
                    </div>

                    {/* Selected time reminder */}
                    <div className="mt-3 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs">
                      <CheckCircle2 className="h-4 w-4 text-red-600" />

                      <div className="flex items-center gap-1 text-red-700">
                        <CalendarDays className="h-3.5 w-3.5" />
                        <span>{selectedDate && formatDate(selectedDate)}</span>
                      </div>

                      <span className="text-red-300">•</span>

                      <div className="flex items-center gap-1 text-red-700">
                        <Clock3 className="h-3.5 w-3.5" />
                        <span>{selectedTimeLabel}</span>
                      </div>
                    </div>

                    {/* Back */}
                    <button
                      onClick={handleBack}
                      className="font-semibold rounded-full bg-[#c10007]/10 text-[#c10007] text-xs leading-4 border-[#c10007]/30 border-1 border-solid px-4 py-1.5 flex items-center gap-1.5 w-fit"
                    >
                      <ChevronLeft className="size-3" /> Back
                    </button>
                  </div>
                )}

                {/* ── STEP 3: Success ── */}
                {step === 3 && (
                  <div className="flex flex-col items-start gap-4 py-2">
                    <div className="rounded-full bg-green-100 flex justify-center items-center w-12 h-12">
                      <CheckCircle2 className="size-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-950 text-sm leading-5 mb-1">
                        Appointment confirmed!
                      </p>
                      <p className="text-[#71717b] text-xs leading-4">
                        A confirmation has been sent to{" "}
                        <span className="font-semibold text-zinc-950">
                          {email}
                        </span>
                      </p>
                    </div>
                    <div className="w-full bg-[#c10007]/5 border border-[#c10007]/20 rounded-lg px-4 py-3 flex flex-col gap-1.5">
                      <p className="text-[#71717b] text-[10px]">
                        Date &amp; time
                      </p>
                      <p className="font-bold text-zinc-950 text-xs">
                        {selectedDate && formatDate(selectedDate)} at{" "}
                        {selectedTimeLabel}
                      </p>
                      <p className="text-[#71717b] text-[10px] mt-1">
                        Confirmation ID
                      </p>
                      <p className="font-mono text-[10px] text-zinc-950">
                        {confId}
                      </p>
                    </div>
                    <button
                      onClick={resetForm}
                      className="font-semibold rounded-full bg-[#c10007]/10 text-[#c10007] text-xs leading-4 border-[#c10007]/30 border-1 border-solid px-4 py-1.5 flex items-center gap-1.5"
                    >
                      <RotateCcw className="size-3" /> Schedule another
                    </button>
                  </div>
                )}

                {/* ── STEP 4: Error ── */}
                {step === 4 && (
                  <div className="flex flex-col items-start gap-4 py-2">
                    <div className="rounded-full bg-[#c10007]/15 flex justify-center items-center w-12 h-12">
                      <ServerCrash className="size-6 text-[#c10007]" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-950 text-sm leading-5 mb-1">
                        Booking temporarily unavailable
                      </p>
                      <p className="text-[#71717b] text-xs leading-4">
                        Our online system is currently down. Please reach us
                        directly using the contact info on the right.
                      </p>
                    </div>
                    <div className="w-full bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3 flex flex-col gap-1">
                      <p className="text-[#71717b] text-[10px]">
                        Your preferred time
                      </p>
                      <p className="font-bold text-zinc-950 text-xs">
                        {selectedDate && formatDate(selectedDate)} at{" "}
                        {selectedTimeLabel}
                      </p>
                      <p className="text-[#71717b] text-[10px] mt-0.5">
                        Mention this when you contact us.
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={handleBack}
                        className="font-semibold rounded-full bg-[#c10007]/10 text-[#c10007] text-xs leading-4 border-[#c10007]/30 border-1 border-solid px-4 py-1.5 flex items-center gap-1.5"
                      >
                        <ChevronLeft className="size-3" /> Back to form
                      </button>
                      <button
                        onClick={() => setStep(2)}
                        className="font-semibold rounded-full bg-[#c10007] text-red-50 text-xs leading-4 px-4 py-1.5"
                      >
                        Try again
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="w-1 min-h-full bg-gradient-to-r from-[oklch(0.94_0.06_25)] to-[#ffffff00] rounded-full" />

              {/* ── RIGHT col (1/3 width) — always visible ── */}
              <div className="w-md">
                <RightPanel />
              </div>
            </div>
            <div className="mt-8 w-full flex justify-center">
              {/* CTA — context-aware */}
              <Button
                onClick={
                  step === 1
                    ? handleContinue
                    : step === 2
                      ? handleSubmit
                      : undefined
                }
                disabled={submitting}
                className="font-semibold rounded-full bg-[#c10007] text-red-50 flex justify-center items-center gap-2 w-sm"
              >
                {step === 2 ? (
                  submitting ? (
                    "Booking…"
                  ) : (
                    <>
                      <CalendarCheck className="size-4" /> Book Appointment
                    </>
                  )
                ) : (
                  <>
                    <ArrowUpRight className="size-4" /> Book Appointment
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Contact;
