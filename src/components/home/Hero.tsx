import React from 'react'
import { Card, CardContent } from '../ui/card'
import { ArrowUpRight, FolderCheck, Headphones, Play, TrendingUp, Trophy, Users } from 'lucide-react'
import { Button } from '../ui/button'

function Hero() {
  return (
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
  )
}

export default Hero