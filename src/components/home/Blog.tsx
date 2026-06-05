import React from 'react'
import { Card, CardContent } from '../ui/card'
import { ArrowRight } from 'lucide-react'

function Blog() {
  return (
    <section className="bg-white py-16 w-full">
          <div className="mx-auto px-12">
            <div className="flex mb-10 flex-col items-center gap-2">
              {/* <span className="font-semibold uppercase text-[#c10007] text-xs leading-4 tracking-widest">
                Latest News
              </span> */}
              <h2 className="font-black text-center text-zinc-950 text-3xl leading-9 tracking-tight">
                From Our <span className="text-[#c10007]">Blog</span>
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
  )
}

export default Blog