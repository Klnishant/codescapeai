import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

function Portfolio() {
  return (
    <section className="bg-[oklch(0.95_0.05_25)] py-16 w-full">
          <div className="mx-auto px-12">
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
  )
}

export default Portfolio