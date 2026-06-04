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
import Footer from "@/components/core/Footer";
import Contact from "@/components/home/Contact";
import Blog from "@/components/home/Blog";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";
import Trust from "@/components/home/Trust";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/core/Navbar";

export default function Home() {
  return (
    <div>
      <div className="bg-white text-zinc-950 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <Navbar />
       <Hero />
        <Trust />
        <Services />
        <Portfolio />
        <Testimonials />
        <Process />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

