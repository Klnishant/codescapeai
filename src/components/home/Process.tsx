import React from 'react'

function Process() {
  return (
    <section className="bg-[oklch(0.95_0.05_25)] py-16 w-full">
          <div className="mx-auto px-12">
            <div className="grid grid-cols-3 items-center gap-12">
              <div className="col-span-2">
                <div className="flex mb-8 flex-col gap-2">
                  {/* <span className="font-semibold uppercase text-[#c10007] text-xs leading-4 tracking-widest">
                    How We Work
                  </span> */}
                  <h2 className="font-black text-zinc-950 text-3xl leading-9 tracking-tight">
                    Our <span className="text-[#c10007]">Process</span>
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
                {/* <div className="shadow-lg rounded-full bg-[#c10007] flex absolute -right-3 -top-3 flex-col justify-center items-center w-16 h-16">
                  <span className="leading-none font-black text-red-50 text-lg leading-7">
                    12+
                  </span>
                  <span className="leading-none text-red-200 text-[9px]">
                    Years
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </section>
  )
}

export default Process