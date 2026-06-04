import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, Mail, Phone } from 'lucide-react'

function Contact() {
  return (
    <section className="bg-[oklch(0.94_0.06_25)] py-16 w-full">
          <div className="max-w-[1140px] mx-auto px-8">
            <div className="flex mb-10 flex-col items-center gap-2">
              <span className="font-semibold uppercase text-[#c10007] text-xs leading-4 tracking-widest">
                Book a Session
              </span>
              <h2 className="font-black text-center text-zinc-950 text-3xl leading-9 tracking-tight">
                Schedule a<span className="text-[#c10007]">Consultation</span>
              </h2>
            </div>
            <Card className="shadow-lg bg-white border-[#c10007]/30 border-2 border-solid p-8 gap-6">
              <CardContent className="p-0 gap-0">
                <div className="grid grid-cols-3 gap-8">
                  <div className="col-span-2">
                    <div className="flex mb-4 justify-between items-center">
                      <button className="rounded-full bg-[#c10007]/15 flex justify-center items-center w-7 h-7">
                        <ChevronLeft className="size-4 text-[#c10007]" />
                      </button>
                      <span className="font-bold text-zinc-950 text-sm leading-5">
                        January 2025
                      </span>
                      <button className="rounded-full bg-[#c10007]/15 flex justify-center items-center w-7 h-7">
                        <ChevronRight className="size-4 text-[#c10007]" />
                      </button>
                    </div>
                    <div className="grid grid-cols-7 mb-4 gap-1">
                      <span className="font-semibold text-center text-[#71717b] text-[10px]">
                        Su
                      </span>
                      <span className="font-semibold text-center text-[#71717b] text-[10px]">
                        Mo
                      </span>
                      <span className="font-semibold text-center text-[#71717b] text-[10px]">
                        Tu
                      </span>
                      <span className="font-semibold text-center text-[#71717b] text-[10px]">
                        We
                      </span>
                      <span className="font-semibold text-center text-[#71717b] text-[10px]">
                        Th
                      </span>
                      <span className="font-semibold text-center text-[#71717b] text-[10px]">
                        Fr
                      </span>
                      <span className="font-semibold text-center text-[#71717b] text-[10px]">
                        Sa
                      </span>
                      <span className="text-center text-[#71717b]/40 text-[10px] py-1">
                        29
                      </span>
                      <span className="text-center text-[#71717b]/40 text-[10px] py-1">
                        30
                      </span>
                      <span className="text-center text-[#71717b]/40 text-[10px] py-1">
                        31
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        1
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        2
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        3
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        4
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        5
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        6
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        7
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        8
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        9
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        10
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        11
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        12
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        13
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        14
                      </span>
                      <span className="cursor-pointer font-bold rounded-full bg-[#c10007] text-red-50 text-[10px] flex mx-auto justify-center items-center w-6 h-6">
                        15
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        16
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        17
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        18
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        19
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        20
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        21
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        22
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        23
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        24
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        25
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        26
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        27
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        28
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        29
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        30
                      </span>
                      <span className="cursor-pointer text-center rounded-sm text-zinc-950 text-[10px] py-1">
                        31
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button className="font-semibold rounded-full bg-[#c10007] text-red-50 text-xs leading-4 px-3 py-1.5">
                        9:00 AM
                      </button>
                      <button className="font-semibold rounded-full bg-[#c10007]/10 text-[#c10007] text-xs leading-4 border-[#c10007]/30 border-1 border-solid px-3 py-1.5">
                        10:00 AM
                      </button>
                      <button className="font-semibold rounded-full bg-[#c10007]/10 text-[#c10007] text-xs leading-4 border-[#c10007]/30 border-1 border-solid px-3 py-1.5">
                        11:00 AM
                      </button>
                      <button className="font-semibold rounded-full bg-[#c10007]/10 text-[#c10007] text-xs leading-4 border-[#c10007]/30 border-1 border-solid px-3 py-1.5">
                        2:00 PM
                      </button>
                      <button className="font-semibold rounded-full bg-[#c10007]/10 text-[#c10007] text-xs leading-4 border-[#c10007]/30 border-1 border-solid px-3 py-1.5">
                        3:00 PM
                      </button>
                      <button className="font-semibold rounded-full bg-[#c10007]/10 text-[#c10007] text-xs leading-4 border-[#c10007]/30 border-1 border-solid px-3 py-1.5">
                        4:00 PM
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-[#c10007]/15 flex justify-center items-center w-9 h-9">
                          <Phone className="size-4 text-[#c10007]" />
                        </div>
                        <div>
                          <p className="text-[#71717b] text-xs leading-4">
                            Call Us
                          </p>
                          <p className="font-bold text-zinc-950 text-sm leading-5">
                            +1 (800) 123-4567
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-[#c10007]/15 flex justify-center items-center w-9 h-9">
                          <Mail className="size-4 text-[#c10007]" />
                        </div>
                        <div>
                          <p className="text-[#71717b] text-xs leading-4">
                            Email Us
                          </p>
                          <p className="font-bold text-zinc-950 text-sm leading-5">
                            hello@technogo.io
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-[#c10007]" />
                        <span className="text-zinc-950 text-xs leading-4">
                          Free 30-minute consultation
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-[#c10007]" />
                        <span className="text-zinc-950 text-xs leading-4">
                          No commitment required
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-[#c10007]" />
                        <span className="text-zinc-950 text-xs leading-4">
                          Expert advice guaranteed
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-[#c10007]" />
                        <span className="text-zinc-950 text-xs leading-4">
                          Tailored solutions for you
                        </span>
                      </div>
                    </div>
                    <Button className="font-semibold rounded-full bg-[#c10007] text-red-50 flex justify-center items-center gap-2 w-full">
                      Book Appointment
                      <ArrowUpRight className="size-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
  )
}

export default Contact