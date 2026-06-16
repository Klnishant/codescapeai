import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ChevronLeft, ChevronRight, Play, X, Star } from "lucide-react";

// ─── Dummy data ─────────────────────────────────────────────────────────────

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  videoUrl?: string;
  videoThumbnail?: string;
  highlight?: boolean; // solid red card variant
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James Carter",
    role: "CEO, NovaTech",
    avatar:
      "https://images.unsplash.com/photo-1625241189662-2980453ebffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
    text: "TECHNOGO transformed our entire digital infrastructure. Their team delivered beyond expectations and the results speak for themselves.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "CTO, Luminary Labs",
    avatar:
      "https://images.unsplash.com/photo-1699899657675-1003c7d28f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
    text: "The best tech partner we've ever worked with. TECHNOGO's expertise in cloud migration saved us 40% in operational costs within the first quarter.",
    highlight: true,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    videoThumbnail:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 3,
    name: "Anisa Narsila",
    role: "Founder, BloomBrand",
    avatar:
      "https://images.unsplash.com/photo-1680127499432-d93494c09eb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
    text: "Incredible attention to detail and a team that truly listens. Our new platform has seen a 3x increase in user engagement since launch.",
  },
  {
    id: 4,
    name: "Marcus Reyes",
    role: "Operations Director, FleetWorks",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 4,
    text: "From kickoff to launch, communication was clear and the engineering quality was outstanding. We'd work with TECHNOGO again without hesitation.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    videoThumbnail:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 5,
    name: "Priya Shah",
    role: "Head of Product, Quantix",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
    text: "Their dashboard redesign cut our reporting time in half. Genuinely one of the smoothest vendor engagements we've had.",
    highlight: true,
  },
  {
    id: 6,
    name: "Daniel Osei",
    role: "Founder, Driftwood Co.",
    avatar:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
    text: "TECHNOGO didn't just build what we asked for, they helped us figure out what we actually needed. That perspective alone was worth the investment.",
  },
];

// ─── Config ─────────────────────────────────────────────────────────────────

const CARD_GAP = 24; // matches gap-6
const AUTOPLAY_MS = 5000;

function Testimonials() {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(testimonials.length - cardsPerView, 0);
  const totalDots = maxIndex + 1;

  // ── Responsive cards-per-view ─────────────────────────────────────────
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

  // ── Measure card width ───────────────────────────────────────────────
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const containerWidth = trackRef.current.parentElement?.clientWidth ?? 0;
      const totalGap = CARD_GAP * (cardsPerView - 1);
      setCardWidth((containerWidth - totalGap) / cardsPerView);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [cardsPerView]);

  useEffect(() => {
    setActiveIndex((i) => Math.min(i, maxIndex));
  }, [cardsPerView, maxIndex]);

  // ── Autoplay ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (isPaused || playingId !== null) return;
    const t = setInterval(() => {
      setActiveIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [isPaused, maxIndex, playingId]);

  const goPrev = () => setActiveIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const goNext = () => setActiveIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const goTo = (i: number) => setActiveIndex(Math.min(Math.max(i, 0), maxIndex));

  // ── Drag / swipe ──────────────────────────────────────────────────────
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

        {/* Carousel viewport */}
        <div
          className="overflow-hidden h-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            className="flex gap-6 h-full cursor-grab active:cursor-grabbing select-none"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {testimonials.map((t) => {
              const isHighlight = !!t.highlight;
              const isPlaying = playingId === t.id;

              return (
                <Card
                  key={t.id}
                  style={{ width: cardWidth ? `${cardWidth}px` : "100%" }}
                  className={`flex-shrink-0 h-90 p-6 gap-4 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lg ${
                    isHighlight
                      ? "bg-[#c10007] border-black/1 border-0 border-solid"
                      : "bg-[oklch(0.99_0.01_25)] border-[#c10007]/15 border-1 border-solid"
                  }`}
                >
                  <CardHeader className="p-0 gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        draggable={false}
                        className={`object-cover rounded-full border-2 border-solid w-10 h-10 ${
                          isHighlight ? "border-red-200/50" : "border-[#c10007]/30"
                        }`}
                      />
                      <div>
                        <p
                          className={`font-bold text-sm leading-5 ${
                            isHighlight ? "text-red-50" : "text-zinc-950"
                          }`}
                        >
                          {t.name}
                        </p>
                        <p
                          className={`text-xs leading-4 ${
                            isHighlight ? "text-red-200" : "text-[#71717b]"
                          }`}
                        >
                          {t.role}
                        </p>
                      </div>
                    </div>
                    {/* <div className="flex gap-0.5">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`size-3.5 ${
                            i < t.rating
                              ? isHighlight
                                ? "fill-red-200 text-red-200"
                                : "fill-[#c10007] text-[#c10007]"
                              : isHighlight
                                ? "fill-transparent text-red-200/40"
                                : "fill-transparent text-[#c10007]/25"
                          }`}
                        />
                      ))}
                    </div> */}
                  </CardHeader>

                  <CardContent className="p-0 gap-0">
                    {t.videoUrl ? (
                      <div className={`relative rounded-xl overflow-hidden h-45 mb-3 group ${isPlaying ? "h-auto" : ""} transition-all duration-300 transform-content`}>
                        {isPlaying ? (
                          <>
                            <video
                              src={t.videoUrl}
                              autoPlay
                              controls
                              className="w-full h-full object-cover rounded-xl"
                              onEnded={() => setPlayingId(null)}
                            />
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setPlayingId(null);
                              }}
                              aria-label="Close video"
                              className={`absolute top-1.5 right-1.5 rounded-full w-6 h-6 flex items-center justify-center transition-colors cursor-pointer ${
                                isHighlight
                                  ? "bg-black/40 hover:bg-black/60 text-red-50"
                                  : "bg-black/40 hover:bg-black/60 text-white"
                              }`}
                            >
                              <X className="size-3.5" />
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={() => {
                              setPlayingId(t.id);
                              setIsPaused(true);
                            }}
                            aria-label={`Play testimonial video from ${t.name}`}
                            className="relative w-full h-full cursor-pointer block"
                          >
                            <img
                              src={t.videoThumbnail ?? t.avatar}
                              alt=""
                              draggable={false}
                              className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="rounded-full bg-white/90 flex items-center justify-center w-10 h-10 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                                <Play className="size-4 text-[#c10007] fill-[#c10007]" />
                              </span>
                            </div>
                          </button>
                        )}
                      </div>
                    ) : null}

                    <p
                      className={`leading-relaxed italic text-xs leading-4 ${
                        isHighlight ? "text-red-100" : "text-[#71717b]"
                      } ${isPlaying ? "hidden" : "block"}`}
                    >
                      "{t.text}"
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex mt-8 justify-center items-center gap-4">
          <button
            onClick={goPrev}
            aria-label="Previous testimonials"
            className="transition-colors rounded-full bg-[#c10007]/10 border-[#c10007]/30 border-2 border-solid flex justify-center items-center w-9 h-9 hover:bg-[#c10007]/20 cursor-pointer"
          >
            <ChevronLeft className="size-4 text-[#c10007]" />
          </button>

          <div className="flex items-center gap-2">
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

          <button
            onClick={goNext}
            aria-label="Next testimonials"
            className="transition-colors rounded-full bg-[#c10007] flex justify-center items-center w-9 h-9 hover:bg-[#a3000a] cursor-pointer"
          >
            <ChevronRight className="size-4 text-red-50" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;