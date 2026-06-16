import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

// ─── Dummy data ─────────────────────────────────────────────────────────────

interface PortfolioItem {
  id: number;
  image: string;
  tag: string;
  title: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tag: "Analytics",
    title: "Dashboard Redesign",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tag: "Mobile",
    title: "App UI Design",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tag: "Cloud",
    title: "Cloud Migration",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tag: "Workspace",
    title: "Office Redesign",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tag: "Branding",
    title: "Brand Identity System",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tag: "Web",
    title: "E-commerce Platform",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tag: "Marketing",
    title: "Campaign Microsite",
  },
];

// ─── Config ─────────────────────────────────────────────────────────────────

const CARD_GAP = 16; // px, matches gap-4
const AUTOPLAY_MS = 4000;

function Portfolio() {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0); // index of leftmost visible card
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  const maxIndex = Math.max(portfolioItems.length - cardsPerView, 0);
  const totalDots = maxIndex + 1;

  // ── Responsive cards-per-view ──────────────────────────────────────────
  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;
      if (w < 640) setCardsPerView(1);
      else if (w < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // ── Measure card width for transform calc ──────────────────────────────
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const containerWidth = trackRef.current.parentElement?.clientWidth ?? 0;
      const totalGap = CARD_GAP * (cardsPerView - 1);
      const w = (containerWidth - totalGap) / cardsPerView;
      setCardWidth(w);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [cardsPerView]);

  // Clamp activeIndex if cardsPerView changes
  useEffect(() => {
    setActiveIndex((i) => Math.min(i, maxIndex));
  }, [cardsPerView, maxIndex]);

  // ── Autoplay ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      setActiveIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [isPaused, maxIndex]);

  const goPrev = () => setActiveIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const goNext = () => setActiveIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const goTo = (i: number) => setActiveIndex(Math.min(Math.max(i, 0), maxIndex));

  // ── Drag / swipe ─────────────────────────────────────────────────────────
  const dragState = useRef<{ startX: number; dragging: boolean }>({
    startX: 0,
    dragging: false,
  });

  const onPointerDown = (e: React.PointerEvent) => {
    dragState.current.startX = e.clientX;
    dragState.current.dragging = true;
    setIsPaused(true);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragState.current.dragging) return;
    const delta = e.clientX - dragState.current.startX;
    dragState.current.dragging = false;
    const threshold = 50;
    if (delta > threshold) goPrev();
    else if (delta < -threshold) goNext();
  };

  const translateX = -(activeIndex * (cardWidth + CARD_GAP));

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
            <button
              onClick={goPrev}
              aria-label="Previous projects"
              className="transition-colors rounded-full bg-[#c10007]/10 border-[#c10007]/30 border-2 border-solid flex justify-center items-center w-9 h-9 hover:bg-[#c10007]/20 cursor-pointer"
            >
              <ChevronLeft className="size-4 text-[#c10007]" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next projects"
              className="transition-colors rounded-full bg-[#c10007] flex justify-center items-center w-9 h-9 hover:bg-[#a3000a] cursor-pointer"
            >
              <ChevronRight className="size-4 text-red-50" />
            </button>
          </div>
        </div>

        {/* Carousel viewport */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            className="flex gap-4 cursor-grab active:cursor-grabbing select-none"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="relative group rounded-2xl h-90 overflow-hidden flex-shrink-0"
                style={{ width: cardWidth ? `${cardWidth}px` : "100%" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                  className="object-cover transition-transform duration-500 w-full h-full group-hover:scale-110"
                />
                <div className="bg-[linear-gradient(to_top,oklch(0.2_0.12_25/0.75),transparent_60%)] absolute inset-0 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute left-3 bottom-3 transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="font-bold rounded-full bg-[#c10007] text-red-50 text-xs leading-4 px-2 py-0.5">
                    {item.tag}
                  </span>
                  <p className="font-bold text-white text-sm leading-5 mt-1">
                    {item.title}
                  </p>
                  <p className="text-white text-xs leading-4 mt-1 hidden group-hover:block w-64 transition-transform group-hover:translate-y-1 duration-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit tempora, quod reiciendis perferendis laborum labore numquam fugit! Molestiae dolorem, voluptatem aliquam mollitia, enim vero adipisci nobis nulla error voluptates nostrum dolorum tenetur! Reprehenderit minima ab vero voluptates libero odio, sit sed inventore numquam deleniti, ut vel amet mollitia id iure.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex mt-6 justify-center items-center gap-2">
          {Array.from({ length: totalDots }, (_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? "bg-[#c10007] w-6 h-2"
                  : "bg-[#c10007]/30 w-2 h-2 hover:bg-[#c10007]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;