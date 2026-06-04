import { FallbackComponent } from '@/app/CustomComponents'
import { Aperture, ArrowRight } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
   <footer className="bg-[linear-gradient(135deg,oklch(0.28_0.14_25)_0%,oklch(0.38_0.18_25)_50%,oklch(0.45_0.2_25)_100%)] text-red-100 pt-14 pb-8 w-full">
          <div className="mx-auto px-12">
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
  )
}

export default Footer