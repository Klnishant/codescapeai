'use client';
import React from 'react'
import { Button } from '../ui/button'
import { Aperture, ArrowUpRight } from 'lucide-react'
import SparkleNavbar from '../lightswind/sparkle-navbar';

function Navbar() {
  return (
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
            {/* <nav className="flex items-center gap-6">
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
            </nav> */}
            <SparkleNavbar
              items={['Home', 'About', 'Services', 'Testimonial', 'Blog', 'Portfolio', 'Contact']}
              color="#c10007"
              itemsLinks={[
                { item: 'Home', link: '/' },
                { item: 'About', link: '/about' },
                { item: 'Services', link: '/services' },
                { item: 'Testimonial', link: '/testimonial' },
                { item: 'Blog', link: '/blogs' },
                { item: 'Portfolio', link: '/portfolio' },
                { item: 'Contact', link: '/contact' },
              ]}
              />
            <Button className="shrink-0 font-semibold rounded-full bg-[#c10007] text-red-50 text-sm leading-5 flex px-5 items-center gap-1.5 h-9">
              Get a Free Quote
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </header>
  )
}

export default Navbar