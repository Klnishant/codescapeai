'use client';
import { useEffect } from "react";
import {
  Aperture,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  FolderCheck,
  Headphones,
  Mail,
  Phone,
  Play,
  ShieldCheck,
  Star,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { FallbackComponent } from "./CustomComponents";

export default function Home() {
  return (
    <div>
      <div className="bg-white text-zinc-950 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <header className="sticky z-50 bg-[oklch(0.93_0.06_25/0.92)] backdrop-blur-sm border-[#c10007]/20 border-t-0 border-r-0 border-b-1 border-l-0 border-solid top-0 w-full">
          <div className="w-full flex px-8 justify-between items-center gap-8 h-16">
            <div className="shrink-0 flex items-center gap-2">
              <div className="rounded-full bg-[#c10007] flex justify-center items-center w-9 h-9">
                <Aperture className="size-5 text-red-50" />
              </div>
              <span className="font-black text-zinc-950 text-xl leading-7 tracking-tight">
                TECHNO<span className="text-[#c10007]">GO</span>
              </span>
            </div>
            <nav className="flex items-center gap-6">
              <a className="font-semibold text-[#c10007] text-sm leading-5 border-[#c10007] border-t-0 border-r-0 border-b-2 border-l-0 border-solid pb-0.5">
                Home
              </a>
              <a className="transition-colors font-medium text-zinc-950/80 text-sm leading-5">
                About
              </a>
              <a className="transition-colors font-medium text-zinc-950/80 text-sm leading-5">
                Services
              </a>
              <a className="transition-colors font-medium text-zinc-950/80 text-sm leading-5">
                Portfolio
              </a>
              <a className="transition-colors font-medium text-zinc-950/80 text-sm leading-5">
                Testimonial
              </a>
              <a className="transition-colors font-medium text-zinc-950/80 text-sm leading-5">
                Blog
              </a>
              <a className="transition-colors font-medium text-zinc-950/80 text-sm leading-5">
                Contact
              </a>
            </nav>
            <Button className="shrink-0 font-semibold rounded-full bg-[#c10007] text-red-50 text-sm leading-5 flex px-5 items-center gap-1.5 h-9">
              Get a Free Quote
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </header>
        <section className="bg-[linear-gradient(135deg,oklch(0.91_0.07_25)_0%,oklch(0.97_0.03_25)_50%,oklch(1_0_0)_100%)] pt-16 pb-12 w-full">
          <div className=" mx-auto px-12">
            <div className="grid grid-cols-2 items-center gap-12">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#c10007] w-2.5 h-2.5" />
                  <span className="font-semibold uppercase text-[#c10007] text-xs leading-4 tracking-widest">
                    Software Solutions
                  </span>
                </div>
                <h1 className="leading-tight font-black text-zinc-950 text-5xl leading-12 tracking-tight">
                  We Build<span className="text-[#c10007]">Digital</span>
                  Solutions That Drive
                  <span className="text-[#c10007]">Growth</span>
                </h1>
                <p className="leading-relaxed text-[#71717b] text-sm leading-5">
                  TECHNOGO delivers cutting-edge software development, cloud
                  infrastructure, and digital transformation services to help
                  businesses scale faster and smarter.
                </p>
                <div className="flex items-center gap-4">
                  <Button className="font-semibold rounded-full bg-[#c10007] text-red-50 flex px-6 items-center gap-2 h-10">
                    Explore Our Services
                    <ArrowUpRight className="size-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="font-semibold rounded-full text-[#c10007] border-[#c10007] border-2 border-solid px-6 h-10"
                  >
                    View Portfolio
                  </Button>
                </div>
                <div className="grid grid-cols-4 pt-2 gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="rounded-full bg-[#c10007]/15 flex justify-center items-center w-10 h-10">
                      <Users className="size-5 text-[#c10007]" />
                    </div>
                    <span className="font-black text-zinc-950 text-xl leading-7">
                      850+
                    </span>
                    <span className="text-center text-[#71717b] text-xs leading-4">
                      Happy Clients
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="rounded-full bg-[#c10007]/15 flex justify-center items-center w-10 h-10">
                      <FolderCheck className="size-5 text-[#c10007]" />
                    </div>
                    <span className="font-black text-zinc-950 text-xl leading-7">
                      1.2K+
                    </span>
                    <span className="text-center text-[#71717b] text-xs leading-4">
                      Projects Done
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="rounded-full bg-[#c10007]/15 flex justify-center items-center w-10 h-10">
                      <Trophy className="size-5 text-[#c10007]" />
                    </div>
                    <span className="font-black text-zinc-950 text-xl leading-7">
                      48
                    </span>
                    <span className="text-center text-[#71717b] text-xs leading-4">
                      Awards Won
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="rounded-full bg-[#c10007]/15 flex justify-center items-center w-10 h-10">
                      <Headphones className="size-5 text-[#c10007]" />
                    </div>
                    <span className="font-black text-zinc-950 text-xl leading-7">
                      24/7
                    </span>
                    <span className="text-center text-[#71717b] text-xs leading-4">
                      Support
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl h-95 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nJTIwdGVjaG5vbG9neXxlbnwxfDB8fHwxNzgwNDg1Njg1fDA&ixlib=rb-4.1.0&q=80&w=400"
                  alt="Software Development"
                  className="object-cover w-full h-full"
                  data-photoid="6sAl6aQ4OWI"
                  data-authorname="Fotis Fotopoulos"
                  data-authorurl="https://unsplash.com/@ffstop"
                  data-blurhash="L87^77$iAXK5KkNaxG$*1IJ7,@xG"
                />
                <div className="bg-[linear-gradient(to_top,oklch(0.25_0.12_25/0.7),transparent_60%)] absolute inset-0" />
                <div className="flex absolute inset-0 justify-center items-center">
                  <div className="shadow-lg rounded-full bg-[#c10007] flex justify-center items-center w-14 h-14">
                    <Play className="size-6 text-red-50 ml-1" />
                  </div>
                </div>
                <Card className="backdrop-blur-sm bg-white/95 border-[#c10007]/20 border-1 border-solid absolute inset-x-4 bottom-4 p-4 gap-2">
                  <CardContent className="p-0 gap-0">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="size-4 text-[#c10007]" />
                        <span className="font-semibold text-zinc-950 text-xs leading-4">
                          Revenue Growth
                        </span>
                      </div>
                      <span className="font-black text-[#c10007] text-xs leading-4">
                        +142%
                      </span>
                    </div>
                    <div className="rounded-full bg-[#c10007]/15 mt-2 w-full h-1.5">
                      <div className="w-[72%] rounded-full bg-[#c10007] h-full" />
                    </div>
                    <span className="block text-[#71717b] text-xs leading-4 mt-1">
                      Year over year performance
                    </span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[oklch(0.95_0.04_25)] border-y border-[#c10007]/15 border-0 border-solid py-6 w-full">
          <div className=" mx-auto px-12">
            <div className="flex justify-between items-center gap-8">
              <span className="shrink-0 font-semibold uppercase text-[#71717b] text-xs leading-4 tracking-widest">
                Trusted By
              </span>
              <div className="flex flex-wrap items-center gap-8">
                <span className="font-black text-zinc-950/40 text-sm leading-5 tracking-tight">
                  Microsoft
                </span>
                <span className="font-black text-zinc-950/40 text-sm leading-5 tracking-tight">
                  Google
                </span>
                <span className="font-black text-zinc-950/40 text-sm leading-5 tracking-tight">
                  Amazon
                </span>
                <span className="font-black text-zinc-950/40 text-sm leading-5 tracking-tight">
                  FedEx
                </span>
                <span className="font-black text-zinc-950/40 text-sm leading-5 tracking-tight">
                  Dropbox
                </span>
                <span className="font-black text-zinc-950/40 text-sm leading-5 tracking-tight">
                  Airbnb
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-16 w-full">
          <div className="max-w-[1140px] mx-auto px-8">
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
        <section className="bg-[oklch(0.95_0.05_25)] py-16 w-full">
          <div className="max-w-[1140px] mx-auto px-8">
            <div className="flex mb-8 justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="font-semibold uppercase text-[#c10007] text-xs leading-4 tracking-widest">
                  Our Work
                </span>
                <h2 className="font-black text-zinc-950 text-3xl leading-9 tracking-tight">
                  Recent<span className="text-[#c10007]">Portfolio</span>
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <button className="transition-colors rounded-full bg-[#c10007]/10 border-[#c10007]/30 border-2 border-solid flex justify-center items-center w-9 h-9">
                  <ChevronLeft className="size-4 text-[#c10007]" />
                </button>
                <button className="transition-colors rounded-full bg-[#c10007] flex justify-center items-center w-9 h-9">
                  <ChevronRight className="size-4 text-red-50" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-2 relative group rounded-2xl h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8MHx8fDE3ODAzMDY5ODJ8MA&ixlib=rb-4.1.0&q=80&w=400"
                  alt="Analytics Dashboard"
                  className="object-cover transition-transform duration-300 w-full h-full"
                  data-photoid="hpjSkU2UYSU"
                  data-authorname="Carlos Muza"
                  data-authorurl="https://unsplash.com/@kmuza"
                  data-blurhash="LJEfTn-?D$8w_3ozf+M{9EV@%gx]"
                />
                <div className="bg-[linear-gradient(to_top,oklch(0.2_0.12_25/0.75),transparent_60%)] absolute inset-0" />
                <div className="absolute left-3 bottom-3">
                  <span className="font-bold rounded-full bg-[#c10007] text-red-50 text-xs leading-4 px-2 py-0.5">
                    Analytics
                  </span>
                  <p className="font-bold text-white text-sm leading-5 mt-1">
                    Dashboard Redesign
                  </p>
                </div>
              </div>
              <div className="relative group rounded-2xl h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbnxlbnwxfDB8fHwxNzgwNDg1Njk0fDA&ixlib=rb-4.1.0&q=80&w=400"
                  alt="Mobile App"
                  className="object-cover transition-transform duration-300 w-full h-full"
                  data-photoid="cZr2sgaxy3Q"
                  data-authorname="charlesdeluvio"
                  data-authorurl="https://unsplash.com/@charlesdeluvio"
                  data-blurhash="LAF$Cd4.NK~BRN4:V^-.##S*S0RO"
                />
                <div className="bg-[linear-gradient(to_top,oklch(0.2_0.12_25/0.75),transparent_60%)] absolute inset-0" />
                <div className="absolute left-3 bottom-3">
                  <span className="font-bold rounded-full bg-[#c10007] text-red-50 text-xs leading-4 px-2 py-0.5">
                    Mobile
                  </span>
                  <p className="font-bold text-white text-sm leading-5 mt-1">
                    App UI Design
                  </p>
                </div>
              </div>
              <div className="relative group rounded-2xl h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlciUyMGluZnJhc3RydWN0dXJlfGVufDF8MHx8fDE3ODA0ODU2OTR8MA&ixlib=rb-4.1.0&q=80&w=400"
                  alt="Cloud Infrastructure"
                  className="object-cover transition-transform duration-300 w-full h-full"
                  data-photoid="2JJ3wBHu4_0"
                  data-authorname="Kevin Ache"
                  data-authorurl="https://unsplash.com/@kevinache"
                  data-blurhash="LE9G]s;v?wVW^+-9%Ms+n$xusl%M"
                />
                <div className="bg-[linear-gradient(to_top,oklch(0.2_0.12_25/0.75),transparent_60%)] absolute inset-0" />
                <div className="absolute left-3 bottom-3">
                  <span className="font-bold rounded-full bg-[#c10007] text-red-50 text-xs leading-4 px-2 py-0.5">
                    Cloud
                  </span>
                  <p className="font-bold text-white text-sm leading-5 mt-1">
                    Cloud Migration
                  </p>
                </div>
              </div>
              <div className="relative group rounded-2xl h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwbW9kZXJuJTIwd29ya3NwYWNlfGVufDF8MHx8fDE3ODA0ODU3MDF8MA&ixlib=rb-4.1.0&q=80&w=400"
                  alt="Office Workspace"
                  className="object-cover transition-transform duration-300 w-full h-full"
                  data-photoid="l90zRbWvCoE"
                  data-authorname="Proxyclick Visitor Management System"
                  data-authorurl="https://unsplash.com/@proxyclick"
                  data-blurhash="LFJ[6X,mD%==_3t8RORiyD0K9G%N"
                />
                <div className="bg-[linear-gradient(to_top,oklch(0.2_0.12_25/0.75),transparent_60%)] absolute inset-0" />
                <div className="absolute left-3 bottom-3">
                  <span className="font-bold rounded-full bg-[#c10007] text-red-50 text-xs leading-4 px-2 py-0.5">
                    Workspace
                  </span>
                  <p className="font-bold text-white text-sm leading-5 mt-1">
                    Office Redesign
                  </p>
                </div>
              </div>
            </div>
            <div className="flex mt-6 justify-center items-center gap-2">
              <span className="rounded-full bg-[#c10007] w-6 h-2" />
              <span className="rounded-full bg-[#c10007]/30 w-2 h-2" />
              <span className="rounded-full bg-[#c10007]/30 w-2 h-2" />
              <span className="rounded-full bg-[#c10007]/30 w-2 h-2" />
            </div>
          </div>
        </section>
        <section className="bg-white py-16 w-full">
          <div className="max-w-[1140px] mx-auto px-8">
            <div className="flex mb-10 flex-col items-center gap-2">
              <span className="font-semibold uppercase text-[#c10007] text-xs leading-4 tracking-widest">
                Testimonials
              </span>
              <h2 className="font-black text-center text-zinc-950 text-3xl leading-9 tracking-tight">
                What Our<span className="text-[#c10007]">Clients</span>Say
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <Card className="bg-[oklch(0.99_0.01_25)] border-[#c10007]/15 border-1 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1625241189662-2980453ebffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MXwyfHx8MTc4MDMyOTczM3ww&ixlib=rb-4.1.0&q=80&w=400"
                      alt="Client"
                      className="object-cover rounded-full border-[#c10007]/30 border-2 border-solid w-10 h-10"
                      data-photoid="dOb-CIj8iFg"
                      data-authorname="Nicolas Horn"
                      data-authorurl="https://unsplash.com/@sysengineer"
                      data-blurhash="LC9aaIaG0#%M?YWbM{t70gel^+M_"
                    />
                    <div>
                      <p className="font-bold text-zinc-950 text-sm leading-5">
                        James Carter
                      </p>
                      <p className="text-[#71717b] text-xs leading-4">
                        CEO, NovaTech
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    <Star className="size-3.5 fill-[#c10007] text-[#c10007]" />
                    <Star className="size-3.5 fill-[#c10007] text-[#c10007]" />
                    <Star className="size-3.5 fill-[#c10007] text-[#c10007]" />
                    <Star className="size-3.5 fill-[#c10007] text-[#c10007]" />
                    <Star className="size-3.5 fill-[#c10007] text-[#c10007]" />
                  </div>
                </CardHeader>
                <CardContent className="p-0 gap-0">
                  <p className="leading-relaxed italic text-[#71717b] text-xs leading-4">
                    "TECHNOGO transformed our entire digital infrastructure.
                    Their team delivered beyond expectations and the results
                    speak for themselves."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#c10007] border-black/1 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1699899657675-1003c7d28f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8Mnx8fDE3ODA0Njk2NDV8MA&ixlib=rb-4.1.0&q=80&w=400"
                      alt="Client"
                      className="object-cover rounded-full border-red-200/50 border-2 border-solid w-10 h-10"
                      data-photoid="BUlOJ2Ag_24"
                      data-authorname="Giorgio Trovato"
                      data-authorurl="https://unsplash.com/@giorgiotrovato"
                      data-blurhash="LPDSzW_3pIo#~qxuNHRko#RjaKjY"
                    />
                    <div>
                      <p className="font-bold text-red-50 text-sm leading-5">
                        Sarah Mitchell
                      </p>
                      <p className="text-red-200 text-xs leading-4">
                        CTO, Luminary Labs
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    <Star className="size-3.5 fill-red-200 text-red-200" />
                    <Star className="size-3.5 fill-red-200 text-red-200" />
                    <Star className="size-3.5 fill-red-200 text-red-200" />
                    <Star className="size-3.5 fill-red-200 text-red-200" />
                    <Star className="size-3.5 fill-red-200 text-red-200" />
                  </div>
                </CardHeader>
                <CardContent className="p-0 gap-0">
                  <p className="leading-relaxed italic text-red-100 text-xs leading-4">
                    "The best tech partner we've ever worked with. TECHNOGO's
                    expertise in cloud migration saved us 40% in operational
                    costs within the first quarter."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[oklch(0.99_0.01_25)] border-[#c10007]/15 border-1 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1680127499432-d93494c09eb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNsaWVudCUyMGJ1c2luZXNzJTIwdGVzdGltb25pYWx8ZW58MXwyfHx8MTc4MDQ4NTY5NHww&ixlib=rb-4.1.0&q=80&w=400"
                      alt="Client"
                      className="object-cover rounded-full border-[#c10007]/30 border-2 border-solid w-10 h-10"
                      data-photoid="yKQe3Rtemqs"
                      data-authorname="Cecep Rahmat"
                      data-authorurl="https://unsplash.com/@cecepr"
                      data-blurhash="LMFr9Z00?bxZ^+xEWBofjEtRRPoL"
                    />
                    <div>
                      <p className="font-bold text-zinc-950 text-sm leading-5">
                        Anisa Narsila
                      </p>
                      <p className="text-[#71717b] text-xs leading-4">
                        Founder, BloomBrand
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    <Star className="size-3.5 fill-[#c10007] text-[#c10007]" />
                    <Star className="size-3.5 fill-[#c10007] text-[#c10007]" />
                    <Star className="size-3.5 fill-[#c10007] text-[#c10007]" />
                    <Star className="size-3.5 fill-[#c10007] text-[#c10007]" />
                    <Star className="size-3.5 fill-[#c10007] text-[#c10007]" />
                  </div>
                </CardHeader>
                <CardContent className="p-0 gap-0">
                  <p className="leading-relaxed italic text-[#71717b] text-xs leading-4">
                    "Incredible attention to detail and a team that truly
                    listens. Our new platform has seen a 3x increase in user
                    engagement since launch."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-[oklch(0.95_0.05_25)] py-16 w-full">
          <div className="max-w-[1140px] mx-auto px-8">
            <div className="grid grid-cols-3 items-center gap-12">
              <div className="col-span-2">
                <div className="flex mb-8 flex-col gap-2">
                  <span className="font-semibold uppercase text-[#c10007] text-xs leading-4 tracking-widest">
                    How We Work
                  </span>
                  <h2 className="font-black text-zinc-950 text-3xl leading-9 tracking-tight">
                    Our<span className="text-[#c10007]">Process</span>
                  </h2>
                  <p className="text-[#71717b] text-sm leading-5">
                    A streamlined approach that ensures quality delivery every
                    time.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-full bg-[#c10007]/15 border-[#c10007] border-2 border-solid flex justify-center items-center w-10 h-10">
                      <span className="font-black text-[#c10007] text-sm leading-5">
                        01
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-950 text-sm leading-5">{`Discovery & Strategy`}</h4>
                      <p className="leading-relaxed text-[#71717b] text-xs leading-4 mt-1">
                        We deep-dive into your business goals, audience, and
                        competitive landscape to craft a winning strategy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-full bg-[#c10007]/15 border-[#c10007] border-2 border-solid flex justify-center items-center w-10 h-10">
                      <span className="font-black text-[#c10007] text-sm leading-5">
                        02
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-950 text-sm leading-5">{`Design & Prototype`}</h4>
                      <p className="leading-relaxed text-[#71717b] text-xs leading-4 mt-1">
                        Our designers create pixel-perfect wireframes and
                        interactive prototypes for your approval before
                        development begins.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-full bg-[#c10007]/15 border-[#c10007] border-2 border-solid flex justify-center items-center w-10 h-10">
                      <span className="font-black text-[#c10007] text-sm leading-5">
                        03
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-950 text-sm leading-5">{`Build & Deploy`}</h4>
                      <p className="leading-relaxed text-[#71717b] text-xs leading-4 mt-1">
                        Agile development sprints with continuous integration
                        ensure fast, reliable delivery to production
                        environments.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-full bg-[#c10007]/15 border-[#c10007] border-2 border-solid flex justify-center items-center w-10 h-10">
                      <span className="font-black text-[#c10007] text-sm leading-5">
                        04
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-950 text-sm leading-5">{`Support & Scale`}</h4>
                      <p className="leading-relaxed text-[#71717b] text-xs leading-4 mt-1">
                        Post-launch monitoring, optimization, and scaling
                        support to keep your product performing at its best.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-full border-[#c10007]/30 border-4 border-solid w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581092568395-d68050c2ab43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwdGVhbSUyMG9mZmljZSUyMG1lZXRpbmd8ZW58MXwwfHx8MTc4MDQ4NTY4NXww&ixlib=rb-4.1.0&q=80&w=400"
                    alt="Team Meeting"
                    className="object-cover w-full h-full"
                    data-photoid="p5wrlynJR4A"
                    data-authorname="ThisisEngineering"
                    data-authorurl="https://unsplash.com/@thisisengineering"
                    data-blurhash="LLMQ#C_4~q?as*xu9GM{D%oeM_M{"
                  />
                </div>
                <div className="shadow-lg rounded-full bg-[#c10007] flex absolute -right-3 -top-3 flex-col justify-center items-center w-16 h-16">
                  <span className="leading-none font-black text-red-50 text-lg leading-7">
                    12+
                  </span>
                  <span className="leading-none text-red-200 text-[9px]">
                    Years
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-16 w-full">
          <div className="max-w-[1140px] mx-auto px-8">
            <div className="flex mb-10 flex-col items-center gap-2">
              <span className="font-semibold uppercase text-[#c10007] text-xs leading-4 tracking-widest">
                Latest News
              </span>
              <h2 className="font-black text-center text-zinc-950 text-3xl leading-9 tracking-tight">
                From Our<span className="text-[#c10007]">Blog</span>
              </h2>
            </div>
            <div className="grid grid-cols-4 gap-6">
              <Card className="bg-[oklch(0.99_0.01_25)] border-[#c10007]/15 border-1 border-solid p-0 gap-0 overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nJTIwdGVjaG5vbG9neXxlbnwxfDB8fHwxNzgwNDg1Njg1fDA&ixlib=rb-4.1.0&q=80&w=400"
                    alt="Blog"
                    className="object-cover transition-transform duration-300 w-full h-full"
                    data-photoid="6sAl6aQ4OWI"
                    data-authorname="Fotis Fotopoulos"
                    data-authorurl="https://unsplash.com/@ffstop"
                    data-blurhash="L87^77$iAXK5KkNaxG$*1IJ7,@xG"
                  />
                </div>
                <CardContent className="flex p-4 flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold rounded-full bg-[#c10007] text-red-50 text-[10px] px-2 py-0.5">
                      Development
                    </span>
                    <span className="text-[#71717b] text-[10px]">
                      Jan 12, 2025
                    </span>
                  </div>
                  <h4 className="leading-snug font-bold text-zinc-950 text-sm leading-5">
                    The Future of AI in Software Development
                  </h4>
                  <a className="font-semibold text-[#c10007] text-xs leading-4 flex mt-1 items-center gap-1">
                    Read More
                    <ArrowRight className="size-3" />
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-[oklch(0.99_0.01_25)] border-[#c10007]/15 border-1 border-solid p-0 gap-0 overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlciUyMGluZnJhc3RydWN0dXJlfGVufDF8MHx8fDE3ODA0ODU2OTR8MA&ixlib=rb-4.1.0&q=80&w=400"
                    alt="Blog"
                    className="object-cover transition-transform duration-300 w-full h-full"
                    data-photoid="2JJ3wBHu4_0"
                    data-authorname="Kevin Ache"
                    data-authorurl="https://unsplash.com/@kevinache"
                    data-blurhash="LE9G]s;v?wVW^+-9%Ms+n$xusl%M"
                  />
                </div>
                <CardContent className="flex p-4 flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold rounded-full bg-[#c10007] text-red-50 text-[10px] px-2 py-0.5">
                      Cloud
                    </span>
                    <span className="text-[#71717b] text-[10px]">
                      Jan 8, 2025
                    </span>
                  </div>
                  <h4 className="leading-snug font-bold text-zinc-950 text-sm leading-5">
                    Why Cloud Migration Is Critical in 2025
                  </h4>
                  <a className="font-semibold text-[#c10007] text-xs leading-4 flex mt-1 items-center gap-1">
                    Read More
                    <ArrowRight className="size-3" />
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-[oklch(0.99_0.01_25)] border-[#c10007]/15 border-1 border-solid p-0 gap-0 overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8MHx8fDE3ODAzMDY5ODJ8MA&ixlib=rb-4.1.0&q=80&w=400"
                    alt="Blog"
                    className="object-cover transition-transform duration-300 w-full h-full"
                    data-photoid="hpjSkU2UYSU"
                    data-authorname="Carlos Muza"
                    data-authorurl="https://unsplash.com/@kmuza"
                    data-blurhash="LJEfTn-?D$8w_3ozf+M{9EV@%gx]"
                  />
                </div>
                <CardContent className="flex p-4 flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold rounded-full bg-[#c10007] text-red-50 text-[10px] px-2 py-0.5">
                      Marketing
                    </span>
                    <span className="text-[#71717b] text-[10px]">
                      Dec 29, 2024
                    </span>
                  </div>
                  <h4 className="leading-snug font-bold text-zinc-950 text-sm leading-5">
                    Data-Driven Marketing Strategies That Work
                  </h4>
                  <a className="font-semibold text-[#c10007] text-xs leading-4 flex mt-1 items-center gap-1">
                    Read More
                    <ArrowRight className="size-3" />
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-[oklch(0.99_0.01_25)] border-[#c10007]/15 border-1 border-solid p-0 gap-0 overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwbW9kZXJuJTIwd29ya3NwYWNlfGVufDF8MHx8fDE3ODA0ODU3MDF8MA&ixlib=rb-4.1.0&q=80&w=400"
                    alt="Blog"
                    className="object-cover transition-transform duration-300 w-full h-full"
                    data-photoid="l90zRbWvCoE"
                    data-authorname="Proxyclick Visitor Management System"
                    data-authorurl="https://unsplash.com/@proxyclick"
                    data-blurhash="LFJ[6X,mD%==_3t8RORiyD0K9G%N"
                  />
                </div>
                <CardContent className="flex p-4 flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold rounded-full bg-[#c10007] text-red-50 text-[10px] px-2 py-0.5">
                      Culture
                    </span>
                    <span className="text-[#71717b] text-[10px]">
                      Dec 20, 2024
                    </span>
                  </div>
                  <h4 className="leading-snug font-bold text-zinc-950 text-sm leading-5">
                    Building a High-Performance Tech Culture
                  </h4>
                  <a className="font-semibold text-[#c10007] text-xs leading-4 flex mt-1 items-center gap-1">
                    Read More
                    <ArrowRight className="size-3" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
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
        <footer className="bg-[linear-gradient(135deg,oklch(0.28_0.14_25)_0%,oklch(0.38_0.18_25)_50%,oklch(0.45_0.2_25)_100%)] text-red-100 pt-14 pb-8 w-full">
          <div className="max-w-[1140px] mx-auto px-8">
            <div className="grid grid-cols-5 mb-10 gap-8">
              <div className="col-span-1 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-[#c10007] flex justify-center items-center w-8 h-8">
                    <Aperture className="size-4 text-red-50" />
                  </div>
                  <span className="font-black text-red-50 text-lg leading-7 tracking-tight">
                    TECHNO<span className="text-red-300">GO</span>
                  </span>
                </div>
                <p className="leading-relaxed text-red-200 text-xs leading-4">
                  Empowering businesses with innovative digital solutions since
                  2012.
                </p>
                <div className="flex items-center gap-3">
                  <a className="transition-colors rounded-full bg-[#c10007]/40 flex justify-center items-center w-7 h-7">
                    <FallbackComponent  />
                  </a>
                  <a className="transition-colors rounded-full bg-[#c10007]/40 flex justify-center items-center w-7 h-7">
                    <FallbackComponent/>
                  </a>
                  <a className="transition-colors rounded-full bg-[#c10007]/40 flex justify-center items-center w-7 h-7">
                    <FallbackComponent  />
                  </a>
                  <a className="transition-colors rounded-full bg-[#c10007]/40 flex justify-center items-center w-7 h-7">
                    <FallbackComponent  />
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="font-bold text-red-50 text-sm leading-5">
                  Company
                </h5>
                <a className="transition-colors text-red-200 text-xs leading-4">
                  About Us
                </a>
                <a className="transition-colors text-red-200 text-xs leading-4">
                  Our Team
                </a>
                <a className="transition-colors text-red-200 text-xs leading-4">
                  Careers
                </a>
                <a className="transition-colors text-red-200 text-xs leading-4">
                  Press
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="font-bold text-red-50 text-sm leading-5">
                  Services
                </h5>
                <a className="transition-colors text-red-200 text-xs leading-4">
                  Software Dev
                </a>
                <a className="transition-colors text-red-200 text-xs leading-4">
                  Cloud Solutions
                </a>
                <a className="transition-colors text-red-200 text-xs leading-4">
                  Digital Marketing
                </a>
                <a className="transition-colors text-red-200 text-xs leading-4">
                  Cybersecurity
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="font-bold text-red-50 text-sm leading-5">
                  Quick Links
                </h5>
                <a className="transition-colors text-red-200 text-xs leading-4">
                  Portfolio
                </a>
                <a className="transition-colors text-red-200 text-xs leading-4">
                  Blog
                </a>
                <a className="transition-colors text-red-200 text-xs leading-4">
                  Testimonials
                </a>
                <a className="transition-colors text-red-200 text-xs leading-4">
                  Contact
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="font-bold text-red-50 text-sm leading-5">
                  Newsletter
                </h5>
                <p className="text-red-200 text-xs leading-4">
                  Stay updated with our latest news and insights.
                </p>
                <div className="flex gap-2">
                  <input
                    className="outline-none rounded-full bg-[#c10007]/20 text-red-100 text-xs leading-4 border-[#c10007]/40 border-1 border-solid px-3 flex-1 h-8"
                    placeholder="Your email"
                  />
                  <button className="transition-colors shrink-0 rounded-full bg-[#c10007] flex justify-center items-center w-8 h-8">
                    <ArrowRight className="size-3.5 text-red-50" />
                  </button>
                </div>
              </div>
            </div>
            <div className="border-[#c10007]/25 border-t-1 border-r-0 border-b-0 border-l-0 border-solid flex pt-6 justify-between items-center">
              <p className="text-red-300 text-xs leading-4">
                © 2025 TECHNOGO. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a className="transition-colors text-red-300 text-xs leading-4">
                  Privacy Policy
                </a>
                <a className="transition-colors text-red-300 text-xs leading-4">
                  Terms of Service
                </a>
                <a className="transition-colors text-red-300 text-xs leading-4">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

