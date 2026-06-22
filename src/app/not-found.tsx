"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #c10007 1px, transparent 1px),
            linear-gradient(to bottom, #c10007 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Orb 1 */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-20 top-20 h-72 w-72 rounded-full bg-[#c10007]/10 blur-3xl"
      />

      {/* Floating Orb 2 */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-red-300/20 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center rounded-full border border-[#c10007]/20 bg-[#c10007]/5 px-4 py-2"
        >
          <span className="text-sm font-medium text-[#c10007]">ERROR 404</span>
        </motion.div>

        {/* 404 */}
        <motion.div initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}>
            <div className="flex items-center justify-center gap-2 md:gap-6">
          <span
            className="text-[120px] md:text-[180px] font-black text-transparent"
            style={{
              WebkitTextStroke: "3px #c10007",
            }}
          >
            4
          </span>

          <div className="relative flex items-center justify-center">
            {/* Orbit Ring */}
            <div className="absolute h-[130px] w-[130px] md:h-[180px] md:w-[180px] rounded-full border border-[#c10007]/30 animate-spin" />

            {/* Orbit Ring 2 */}
            <div
              className="absolute h-[100px] w-[160px] md:h-[140px] md:w-[220px] rounded-full border border-[#c10007]/20"
              style={{
                animation: "spinReverse 12s linear infinite",
                transform: "rotateX(70deg)",
              }}
            />

            {/* Globe */}
            <motion.div
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative h-[90px] w-[90px] md:h-[130px] md:w-[130px]"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c10007] via-red-500 to-red-700 shadow-[0_0_80px_rgba(193,0,7,0.45)]" />

              {/* Latitude Lines */}
              <div className="absolute inset-3 rounded-full border border-white/20" />
              <div className="absolute inset-6 rounded-full border border-white/15" />

              {/* Longitude */}
              <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-white/20" />
              <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 rotate-90 bg-white/20" />

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-[#c10007]/20 blur-xl" />
            </motion.div>

            {/* Orbit Dot */}
            <div
              className="absolute h-[160px] w-[160px] md:h-[220px] md:w-[220px]"
              style={{
                animation: "spin 8s linear infinite",
              }}
            >
              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#c10007]" />
            </div>
          </div>

          <span
            className="text-[120px] md:text-[180px] font-black text-transparent"
            style={{
              WebkitTextStroke: "3px #c10007",
            }}
          >
            4
          </span>
        </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          className="mt-4 text-4xl font-black text-zinc-900 md:text-5xl"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
          }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-600"
        >
          The page you are looking for may have been moved, deleted, or never
          existed. Let's get you back on track.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.6,
          }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full bg-[#c10007] px-8 py-4 font-semibold text-white shadow-lg shadow-[#c10007]/30 transition-all duration-300 hover:scale-105"
          >
            <Home size={18} />
            Back Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-8 py-4 font-semibold text-zinc-800 transition-all duration-300 hover:border-[#c10007] hover:text-[#c10007]"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </motion.div>

        {/* Search Suggestion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.6,
          }}
          className="mt-14 rounded-3xl border border-zinc-200 bg-white/80 p-6 backdrop-blur-xl shadow-xl"
        >
          <div className="flex justify-center mb-3">
            <Search className="h-5 w-5 text-[#c10007]" />
          </div>

          <h3 className="font-bold text-zinc-900">Looking for something?</h3>

          <p className="mt-2 text-sm text-zinc-600">
            Try navigating from the homepage or explore our services, portfolio,
            and latest blog articles.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
