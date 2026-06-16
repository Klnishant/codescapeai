import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Rocket, Clock, Coins, FileText, Code2, Cloud,
  Users, MessageCircle, ShieldCheck, Lock,
  ChevronDown, Search,
} from "lucide-react";

// ─── Dummy data ─────────────────────────────────────────────────────────────

interface FAQItem {
  id: number;
  category: string;
  icon: React.ReactNode;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1, category: "Getting started", icon: <Rocket className="size-4" />,
    question: "How do I get started with TechnoGo?",
    answer: "Start with a free 30-minute consultation. We'll understand your goals, scope your project, and send you a tailored proposal within 48 hours — no commitment required.",
  },
  {
    id: 2, category: "Getting started", icon: <Clock className="size-4" />,
    question: "How long does a typical project take?",
    answer: "Timelines vary by scope. A focused redesign may take 4–6 weeks; a full-stack platform build typically runs 3–5 months. Every proposal includes a detailed milestone plan so you always know where things stand.",
  },
  {
    id: 3, category: "Pricing", icon: <Coins className="size-4" />,
    question: "How is pricing structured?",
    answer: "We offer fixed-price project quotes and flexible monthly retainers. All quotes are transparent — you'll see a breakdown by phase so there are no surprises. We also offer milestone-based payment schedules.",
  },
  {
    id: 4, category: "Pricing", icon: <FileText className="size-4" />,
    question: "Do you offer any free services or trials?",
    answer: "Yes — the initial consultation is always free. For larger engagements, we often begin with a paid discovery sprint (typically 1–2 weeks) that gives you a concrete deliverable and a clear picture of project scope before committing to the full build.",
  },
  {
    id: 5, category: "Technology", icon: <Code2 className="size-4" />,
    question: "What technologies and frameworks does TechnoGo work with?",
    answer: "We're framework-agnostic and choose the right tool for each project. Our stack covers React, Next.js, Node.js, Python, PostgreSQL, AWS, GCP, Azure, and mobile (React Native, Flutter). We'll recommend what fits your needs, not what we happen to know.",
  },
  {
    id: 6, category: "Technology", icon: <Cloud className="size-4" />,
    question: "Can you migrate our existing system to the cloud?",
    answer: "Absolutely. Cloud migration is one of our core specialties. We assess your current infrastructure, design a migration path that minimises downtime, and handle the full move — including data migration, security hardening, and post-launch monitoring.",
  },
  {
    id: 7, category: "Process", icon: <Users className="size-4" />,
    question: "Who will I be working with day to day?",
    answer: "You'll have a dedicated project lead as your single point of contact, supported by a small, senior team. We avoid the handoff chains common at larger agencies — the people who scope your project are the people who build it.",
  },
  {
    id: 8, category: "Process", icon: <MessageCircle className="size-4" />,
    question: "How do you keep clients updated throughout a project?",
    answer: "We use weekly progress updates, a shared project board (Notion or Linear), and bi-weekly check-in calls. You'll always have visibility into what's in progress, what's coming next, and where any blockers are.",
  },
  {
    id: 9, category: "Support", icon: <ShieldCheck className="size-4" />,
    question: "What kind of post-launch support do you provide?",
    answer: "All projects include a 30-day post-launch support window at no extra cost. After that, we offer structured maintenance retainers covering bug fixes, dependency updates, performance monitoring, and feature iterations.",
  },
  {
    id: 10, category: "Support", icon: <Lock className="size-4" />,
    question: "How do you handle security and data privacy?",
    answer: "Security is built in from day one — not bolted on afterward. We follow OWASP guidelines, perform dependency auditing, configure proper auth and access controls, and can produce security documentation for regulated industries. All client data is handled under NDA.",
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(faqData.map((f) => f.category)))];

// ─── Accordion item ──────────────────────────────────────────────────────────

const FAQAccordionItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  query: string;
}> = ({ item, isOpen, onToggle, query }) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) setHeight(bodyRef.current.scrollHeight);
  }, [item.answer]);

  const highlight = (text: string) => {
    if (!query.trim()) return <>{text}</>;
    const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(re);
    return (
      <>
        {parts.map((part, i) =>
          re.test(part) ? (
            <mark key={i} className="bg-yellow-200 text-yellow-900 rounded-sm px-0.5">
              {part}
            </mark>
          ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
          )
        )}
      </>
    );
  };

  return (
    <div
      className={`rounded-xl border transition-all duration-300 overflow-hidden
        ${isOpen
          ? "border-[#c10007] shadow-[0_0_0_1px_rgba(193,0,7,0.08)]"
          : "border-[#c10007]/15 hover:border-[#c10007]/40"
        }`}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-3 px-5 py-4 text-left cursor-pointer group"
      >
        {/* Icon pill */}
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300
            ${isOpen ? "bg-[#c10007] text-red-50" : "bg-[#c10007]/10 text-[#c10007] group-hover:bg-[#c10007]/20"}`}
        >
          {item.icon}
        </div>

        {/* Question text */}
        <span className="flex-1 text-sm font-semibold text-zinc-950 leading-snug">
          {highlight(item.question)}
        </span>

        {/* Chevron */}
        <div
          className={`flex-shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-350
            ${isOpen ? "rotate-180" : ""}`}
        >
          <ChevronDown className="size-4 text-[#71717b]" />
        </div>
      </button>

      {/* Answer body — CSS grid trick for smooth height animation */}
      <div
        className="grid transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div ref={bodyRef} className="px-5 pb-4 pl-16">
            <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#a32d2d] bg-[#fcebeb] px-2.5 py-0.5 rounded-full mb-2">
              {item.category}
            </span>
            <p className="text-xs text-[#71717b] leading-relaxed">
              {highlight(item.answer)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────

function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState<number | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return faqData.filter((item) => {
      const matchCat = activeCategory === "All" || item.category === activeCategory;
      const matchQ = !q || item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [activeCategory, query]);

  const handleToggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="bg-white py-16 w-full">
      <div className="mx-auto px-12 max-w-[860px]">

        {/* Heading */}
        <div className="flex flex-col items-center gap-2 mb-10">
          <span className="font-semibold uppercase text-[#c10007] text-xs leading-4 tracking-widest">
            FAQ
          </span>
          <h2 className="font-black text-center text-zinc-950 text-3xl leading-9 tracking-tight">
            Got questions?<span className="text-[#c10007]">We have answers.</span>
          </h2>
          <p className="text-[#71717b] text-sm text-center max-w-md mt-1">
            Everything you need to know about working with TechnoGo. Can't find what you're looking for?{" "}
            <a href="#contact" className="text-[#c10007] underline underline-offset-2 hover:opacity-80 transition-opacity">
              Reach out to us.
            </a>
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#71717b] pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setOpenId(null); }}
            placeholder="Search questions…"
            aria-label="Search FAQ"
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-[#c10007]/20 rounded-xl bg-white text-zinc-950 placeholder:text-[#71717b]/60 outline-none transition-all focus:border-[#c10007] focus:ring-2 focus:ring-[#c10007]/10"
          />
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenId(null); }}
              className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-all duration-200 cursor-pointer
                ${activeCategory === cat
                  ? "bg-[#c10007] border-[#c10007] text-red-50"
                  : "bg-transparent border-[#c10007]/25 text-[#71717b] hover:border-[#c10007] hover:text-[#c10007] hover:bg-[#c10007]/5"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="h-0.5 w-full bg-[#c10007]/10 rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-[#c10007] rounded-full transition-all duration-500"
            style={{ width: openId !== null ? `${(1 / Math.max(filtered.length, 1)) * 100}%` : "0%" }}
          />
        </div>

        {/* Accordion list */}
        {filtered.length > 0 ? (
          <div className="flex flex-col gap-2.5">
            {filtered.map((item) => (
              <FAQAccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
                query={query}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center text-[#71717b]">
            <div className="w-12 h-12 rounded-full bg-[#c10007]/10 flex items-center justify-center mb-3">
              <Search className="size-5 text-[#c10007]/50" />
            </div>
            <p className="text-sm font-semibold text-zinc-950 mb-1">No results found</p>
            <p className="text-xs">
              Try a different keyword or{" "}
              <button
                onClick={() => { setQuery(""); setActiveCategory("All"); }}
                className="text-[#c10007] underline underline-offset-2 cursor-pointer"
              >
                clear filters.
              </button>
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-10 rounded-xl bg-[#c10007]/5 border border-[#c10007]/15 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-zinc-950 text-sm leading-5 mb-0.5">Still have questions?</p>
            <p className="text-[#71717b] text-xs">Our team typically responds within 2 business hours.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 font-semibold rounded-full bg-[#c10007] text-red-50 text-xs px-5 py-2 hover:bg-[#a3000a] transition-colors"
          >
            Contact us →
          </a>
        </div>

      </div>
    </section>
  );
}

export default FAQ;