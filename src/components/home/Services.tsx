import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Code2, ArrowRight, Cloud, BarChart3, ShieldCheck } from 'lucide-react'

function Services() {
  return (
    <section className="bg-white py-16 w-full">
          <div className="mx-auto px-12">
            <div className="flex mb-10 flex-col items-center gap-2">
              <span className="font-semibold uppercase text-[#c10007] text-xs leading-4 tracking-widest">
                What We Do
              </span>
              <h2 className="font-black text-center text-zinc-950 text-3xl leading-9 tracking-tight">
                Our Core<span className="text-[#c10007]">Services</span>
              </h2>
              <p className="max-w-lg text-center text-[#71717b] text-sm leading-5">
                We offer a full spectrum of digital services to help your
                business thrive in the modern landscape.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-6">
              <Card className="transition-all bg-[oklch(0.99_0.01_25)] border-[#c10007]/15 border-1 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-3">
                  <div className="rounded-xl bg-[#c10007]/15 flex justify-center items-center w-12 h-12">
                    <Code2 className="size-6 text-[#c10007]" />
                  </div>
                  <h3 className="font-bold text-zinc-950 text-base leading-6">
                    Software Development
                  </h3>
                </CardHeader>
                <CardContent className="p-0 gap-0">
                  <p className="leading-relaxed text-[#71717b] text-xs leading-4">
                    Custom web and mobile applications built with modern
                    frameworks and best practices.
                  </p>
                </CardContent>
                <CardFooter className="mt-2 p-0 gap-0">
                  <a className="transition-all font-semibold text-[#c10007] text-xs leading-4 flex items-center gap-1">
                    Read More
                    <ArrowRight className="size-3" />
                  </a>
                </CardFooter>
              </Card>
              <Card className="transition-all bg-[oklch(0.99_0.01_25)] border-[#c10007]/15 border-1 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-3">
                  <div className="rounded-xl bg-[#c10007]/15 flex justify-center items-center w-12 h-12">
                    <Cloud className="size-6 text-[#c10007]" />
                  </div>
                  <h3 className="font-bold text-zinc-950 text-base leading-6">
                    Cloud Infrastructure
                  </h3>
                </CardHeader>
                <CardContent className="p-0 gap-0">
                  <p className="leading-relaxed text-[#71717b] text-xs leading-4">
                    Scalable cloud solutions on AWS, Azure, and GCP with 99.9%
                    uptime guarantee.
                  </p>
                </CardContent>
                <CardFooter className="mt-2 p-0 gap-0">
                  <a className="transition-all font-semibold text-[#c10007] text-xs leading-4 flex items-center gap-1">
                    Read More
                    <ArrowRight className="size-3" />
                  </a>
                </CardFooter>
              </Card>
              <Card className="transition-all bg-[oklch(0.99_0.01_25)] border-[#c10007]/15 border-1 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-3">
                  <div className="rounded-xl bg-[#c10007]/15 flex justify-center items-center w-12 h-12">
                    <BarChart3 className="size-6 text-[#c10007]" />
                  </div>
                  <h3 className="font-bold text-zinc-950 text-base leading-6">
                    Digital Marketing
                  </h3>
                </CardHeader>
                <CardContent className="p-0 gap-0">
                  <p className="leading-relaxed text-[#71717b] text-xs leading-4">
                    Data-driven marketing strategies that increase visibility
                    and drive qualified leads.
                  </p>
                </CardContent>
                <CardFooter className="mt-2 p-0 gap-0">
                  <a className="transition-all font-semibold text-[#c10007] text-xs leading-4 flex items-center gap-1">
                    Read More
                    <ArrowRight className="size-3" />
                  </a>
                </CardFooter>
              </Card>
              <Card className="transition-all bg-[oklch(0.99_0.01_25)] border-[#c10007]/15 border-1 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-3">
                  <div className="rounded-xl bg-[#c10007]/15 flex justify-center items-center w-12 h-12">
                    <ShieldCheck className="size-6 text-[#c10007]" />
                  </div>
                  <h3 className="font-bold text-zinc-950 text-base leading-6">
                    Cybersecurity
                  </h3>
                </CardHeader>
                <CardContent className="p-0 gap-0">
                  <p className="leading-relaxed text-[#71717b] text-xs leading-4">
                    Enterprise-grade security audits, penetration testing, and
                    compliance management.
                  </p>
                </CardContent>
                <CardFooter className="mt-2 p-0 gap-0">
                  <a className="transition-all font-semibold text-[#c10007] text-xs leading-4 flex items-center gap-1">
                    Read More
                    <ArrowRight className="size-3" />
                  </a>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
  )
}

export default Services