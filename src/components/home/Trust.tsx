import React from 'react'

function Trust() {
  return (
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
  )
}

export default Trust