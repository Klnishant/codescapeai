import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Star } from 'lucide-react'

function Testimonials() {
  return (
   <section className="bg-white py-16 w-full">
          <div className="mx-auto px-12">
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
  )
}

export default Testimonials