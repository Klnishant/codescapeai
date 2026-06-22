'use client';

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionStyle,
  type MotionValue,
} from "framer-motion";
import {
  Aperture,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  Calendar,
  CircuitBoard,
  CloudCog,
  Code2,
  Compass,
  DatabaseZap,
  Eye,
  Layers3,
  Lightbulb,
  LockKeyhole,
  Mail,
  Rocket,
  Sparkles,
  Target,
  TerminalSquare,
  Waypoints,
  Zap,
} from "lucide-react";
import Footer from "@/components/core/Footer";
import Navbar from "@/components/core/Navbar";
import styles from "./about.module.css";

type CSSVars = CSSProperties & Record<`--${string}`, string | number>;
type MotionCSSVars = MotionStyle & Record<`--${string}`, string | number>;

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(12px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const heroPanels = [
  {
    label: "Signal",
    title: "AI workflow cockpit",
    metric: "42%",
  },
  {
    label: "Scale",
    title: "Cloud-native rebuild",
    metric: "7ms",
  },
  {
    label: "Craft",
    title: "Product system lab",
    metric: "3.8x",
  },
];

const showcasePanels = [
  {
    title: "The product room",
    tag: "Strategy",
    copy:
      "We turn loose ambition into a clear map: journeys, constraints, data flows, risks, and the smallest lovable version worth shipping.",
  },
  {
    title: "The build tunnel",
    tag: "Engineering",
    copy:
      "Senior engineers work close to the problem, shipping in visible slices while keeping architecture, security, and performance in frame.",
  },
  {
    title: "The launch console",
    tag: "Growth",
    copy:
      "Release is a system, not a date. We design rollouts, observability, experiments, and support so launch day feels controlled.",
  },
  {
    title: "The evolution loop",
    tag: "Scale",
    copy:
      "After launch, we keep the product learning: dashboards, automation, and iteration rhythms that compound instead of drift.",
  },
];

const capabilities = [
  {
    icon: <BrainCircuit className="size-5" />,
    title: "Decision systems",
    copy: "Dashboards, AI copilots, and operating loops that help teams move with sharper context.",
  },
  {
    icon: <CloudCog className="size-5" />,
    title: "Cloud platforms",
    copy: "Elastic infrastructure, deployment pipelines, and monitoring built for real production pressure.",
  },
  {
    icon: <LockKeyhole className="size-5" />,
    title: "Secure foundations",
    copy: "Access, privacy, auditability, and threat modeling baked in before the first big launch.",
  },
  {
    icon: <Code2 className="size-5" />,
    title: "Product engineering",
    copy: "Interfaces, APIs, data models, and integrations delivered as one coherent product surface.",
  },
];

const flowItems = [
  { icon: <Target className="size-4" />, title: "Market signal" },
  { icon: <DatabaseZap className="size-4" />, title: "Data spine" },
  { icon: <CircuitBoard className="size-4" />, title: "Core engine" },
  { icon: <Compass className="size-4" />, title: "UX direction" },
  { icon: <Waypoints className="size-4" />, title: "Automation" },
  { icon: <Rocket className="size-4" />, title: "Launch rhythm" },
];

const routeSteps = [
  {
    icon: <Lightbulb className="size-5" />,
    title: "Find the spark",
    copy: "Clarify the business move, the user tension, and the proof needed to keep going.",
  },
  {
    icon: <Layers3 className="size-5" />,
    title: "Shape the system",
    copy: "Prototype the flow, stress-test assumptions, and design the product architecture.",
  },
  {
    icon: <TerminalSquare className="size-5" />,
    title: "Build the engine",
    copy: "Ship working slices with visible demos, performance budgets, and security checks.",
  },
  {
    icon: <Rocket className="size-5" />,
    title: "Launch awake",
    copy: "Roll out with monitoring, recovery paths, analytics, and a clear next iteration.",
  },
];

const proof = [
  { value: 120, suffix: "+", label: "Products shipped" },
  { value: 40, suffix: "%", label: "Lower operating drag" },
  { value: 3, suffix: "x", label: "Average engagement lift" },
  { value: 98, suffix: "%", label: "Client retention" },
];

const values = [
  "Taste with receipts",
  "Speed with standards",
  "Senior people only",
  "Systems over heroics",
  "Security as habit",
  "Launches that breathe",
];

const trail = [
  { size: 18, color: "#c10007" },
  { size: 14, color: "#0f766e" },
  { size: 12, color: "#f59e0b" },
  { size: 10, color: "#2563eb" },
  { size: 8, color: "#111827" },
];

function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let frame = 0;
    const start = performance.now();
    const duration = 1500;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function TrailParticle({
  cursorX,
  cursorY,
  index,
  size,
  color,
}: {
  cursorX: MotionValue<number>;
  cursorY: MotionValue<number>;
  index: number;
  size: number;
  color: string;
}) {
  const x = useSpring(cursorX, {
    stiffness: 160 - index * 18,
    damping: 22 + index * 4,
    mass: 0.7 + index * 0.25,
  });
  const y = useSpring(cursorY, {
    stiffness: 160 - index * 18,
    damping: 22 + index * 4,
    mass: 0.7 + index * 0.25,
  });

  return (
    <motion.span
      className={styles.trailParticle}
      style={{
        x,
        y,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        backgroundColor: color,
      }}
    />
  );
}

function GravityTrail() {
  const shouldReduceMotion = useReducedMotion();
  const cursorX = useMotionValue(-120);
  const cursorY = useMotionValue(-120);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMove = (event: globalThis.PointerEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [cursorX, cursorY, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div className={styles.gravityTrail} aria-hidden="true">
      {trail.map((particle, index) => (
        <TrailParticle
          key={`${particle.color}-${particle.size}`}
          cursorX={cursorX}
          cursorY={cursorY}
          index={index}
          size={particle.size}
          color={particle.color}
        />
      ))}
    </div>
  );
}

function SignalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    const pointer = { x: -9999, y: -9999 };
    const colors = ["#c10007", "#0f766e", "#f59e0b", "#2563eb"];
    const nodes = Array.from({ length: 74 }, (_, index) => ({
      x: Math.random(),
      y: Math.random(),
      speed: 0.24 + Math.random() * 0.56,
      phase: Math.random() * Math.PI * 2,
      radius: 1.2 + Math.random() * 2.6,
      color: colors[index % colors.length],
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const handlePointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(255, 250, 246, 0.22)";
      context.fillRect(0, 0, width, height);

      const points = nodes.map((node, index) => {
        const drift = time * 0.00008 * node.speed;
        const x =
          ((node.x + drift + Math.sin(time * 0.00035 + node.phase) * 0.035) % 1) *
          width;
        const y =
          (node.y + Math.cos(time * 0.00042 + node.phase) * 0.055) * height;
        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const distance = Math.hypot(dx, dy);
        const push = Math.max(0, 1 - distance / 180);
        return {
          x: x + dx * push * 0.12,
          y: y + dy * push * 0.12,
          radius: node.radius,
          color: colors[index % colors.length],
        };
      });

      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const first = points[i];
          const second = points[j];
          const distance = Math.hypot(first.x - second.x, first.y - second.y);
          if (distance < 120) {
            context.strokeStyle = `rgba(17, 17, 19, ${0.1 * (1 - distance / 120)})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(first.x, first.y);
            context.lineTo(second.x, second.y);
            context.stroke();
          }
        }
      }

      points.forEach((point) => {
        context.fillStyle = point.color;
        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fill();
      });

      const sweep = (time * 0.035) % (width + 420);
      const gradient = context.createLinearGradient(sweep - 420, 0, sweep, height);
      gradient.addColorStop(0, "rgba(193, 0, 7, 0)");
      gradient.addColorStop(0.52, "rgba(193, 0, 7, 0.18)");
      gradient.addColorStop(1, "rgba(15, 118, 110, 0)");
      context.strokeStyle = gradient;
      context.lineWidth = 90;
      context.beginPath();
      context.moveTo(sweep - 420, height);
      context.bezierCurveTo(sweep - 230, height * 0.2, sweep - 70, height * 0.82, sweep, 0);
      context.stroke();

      frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointer);
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.signalCanvas} aria-hidden="true" />;
}

function SectionKicker({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <span className={styles.kicker}>
      {icon}
      {children}
    </span>
  );
}

function PanelArtwork({ index }: { index: number }) {
  const themeClass =
    index === 1
      ? styles.artworkTeal
      : index === 2
        ? styles.artworkAmber
        : styles.artworkRed;

  return (
    <div className={`${styles.panelArtwork} ${themeClass}`} aria-hidden="true">
      <div className={styles.artworkGrid} />
      <div className={styles.artworkHeader}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.artworkRings}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.artworkBars}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function ShowcaseArtwork({ index }: { index: number }) {
  return (
    <div className={styles.showcaseArtwork} aria-hidden="true">
      <div className={styles.showcaseTopline}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.showcaseBody}>
        <div className={styles.showcaseRail}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.showcaseMatrix}>
          {Array.from({ length: 12 }, (_, itemIndex) => (
            <span
              key={itemIndex}
              style={
                {
                  "--cell-delay": `${(itemIndex + index) * 0.08}s`,
                  "--cell-strength": 0.28 + ((itemIndex + index) % 5) * 0.13,
                } as CSSVars
              }
            />
          ))}
        </div>
      </div>
      <div className={styles.showcaseWave}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function ProductBoard({ intense = false }: { intense?: boolean }) {
  return (
    <div
      className={`${styles.productBoard} ${intense ? styles.productBoardHot : ""}`}
      aria-hidden="true"
    >
      <div className={styles.productSidebar}>
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className={styles.productMain}>
        <div className={styles.productHeader}>
          <span />
          <span />
        </div>
        <div className={styles.productStats}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.productChart}>
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className={styles.productLog}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function HeroStack() {
  return (
    <div className={styles.heroStack} aria-label="TechnoGo project snapshots">
      {heroPanels.map((panel, index) => (
        <motion.article
          className={styles.heroPanel}
          key={panel.title}
          style={{ "--panel-index": index } as CSSVars}
          initial={{ opacity: 0, y: 80, rotateX: 24, rotateZ: -8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, rotateZ: 0 }}
          transition={{
            delay: 0.25 + index * 0.13,
            duration: 0.9,
            type: "spring",
            bounce: 0.28,
          }}
        >
          <PanelArtwork index={index} />
          <div className={styles.heroPanelScrim} />
          <div className={styles.heroPanelMeta}>
            <span>{panel.label}</span>
            <strong>{panel.metric}</strong>
          </div>
          <h3>{panel.title}</h3>
        </motion.article>
      ))}
    </div>
  );
}

function HeroSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const stackY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const stackRotate = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <section ref={ref} className={styles.hero}>
      <div className={styles.liquidLayer} aria-hidden="true">
        <SignalCanvas />
      </div>
      <div className={styles.heroNoise} aria-hidden="true" />
      <div className={styles.heroInner}>
        <motion.div
          className={styles.heroCopy}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <SectionKicker icon={<Aperture className="size-4" />}>
              About TechnoGo
            </SectionKicker>
          </motion.div>
          <motion.h1 variants={fadeUp}>
            We choreograph the hard parts of digital growth.
          </motion.h1>
          <motion.p variants={fadeUp}>
            Strategy, product design, engineering, automation, and cloud systems
            move as one. The result feels fast, exact, and alive.
          </motion.p>
          <motion.div className={styles.heroActions} variants={fadeUp}>
            <Link className={styles.primaryAction} href="/contact">
              <Calendar className="size-4" />
              Book a build call
            </Link>
            <Link className={styles.secondaryAction} href="/portfolio">
              <Sparkles className="size-4" />
              See the work
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>
          <motion.div className={styles.heroProof} variants={fadeUp}>
            <div>
              <strong>120+</strong>
              <span>digital products</span>
            </div>
            <div>
              <strong>8 yrs</strong>
              <span>shipping systems</span>
            </div>
            <div>
              <strong>98%</strong>
              <span>client retention</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.heroVisual}
          style={{ y: stackY, rotateZ: stackRotate }}
        >
          <HeroStack />
        </motion.div>
      </div>
      <MotionStrip compact />
    </section>
  );
}

function MotionStrip({ compact = false }: { compact?: boolean }) {
  const repeated = [...flowItems, ...flowItems, ...flowItems];

  return (
    <div className={compact ? styles.compactFlow : styles.flowSection}>
      <div className={styles.flowTrack}>
        {repeated.map((item, index) => (
          <div
            className={styles.flowCard}
            key={`${item.title}-${index}`}
            style={{ "--flow-index": index } as CSSVars}
          >
            {item.icon}
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GalleryPanel({
  panel,
  index,
  progress,
}: {
  panel: (typeof showcasePanels)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const rotateY = useTransform(
    progress,
    [0, 0.35, 0.7, 1],
    [20 - index * 3, -8 + index * 4, 10 - index * 2, -16 + index * 3],
  );
  const rotateX = useTransform(progress, [0, 1], [10 - index * 2, -8]);
  const y = useTransform(progress, [0, 1], [120 + index * 34, -110 - index * 28]);
  const scale = useTransform(progress, [0, 0.5, 1], [0.92, 1, 0.94]);

  return (
    <motion.article
      className={styles.galleryPanel}
      style={{
        rotateY,
        rotateX,
        y,
        scale,
        "--panel-hue": index,
      } as MotionCSSVars}
    >
      <ShowcaseArtwork index={index} />
      <div className={styles.galleryPanelText}>
        <span>{panel.tag}</span>
        <h3>{panel.title}</h3>
        <p>{panel.copy}</p>
      </div>
    </motion.article>
  );
}

function ScrollGallery() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className={styles.gallerySection}>
      <div className={styles.gallerySticky}>
        <motion.div
          className={styles.galleryIntro}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionKicker icon={<Layers3 className="size-4" />}>
              Scroll-built story
            </SectionKicker>
          </motion.div>
          <motion.h2 variants={fadeUp}>
            Every product gets its own motion, its own map, its own machine.
          </motion.h2>
          <motion.p variants={fadeUp}>
            Inspired by Codrops-style scroll experiments, these panels tilt,
            stack, and drift like a working wall of product decisions.
          </motion.p>
        </motion.div>
        <div className={styles.galleryStage}>
          {showcasePanels.map((panel, index) => (
            <GalleryPanel
              key={panel.title}
              panel={panel}
              index={index}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section className={styles.capabilities}>
      <motion.div
        className={styles.sectionHead}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <SectionKicker icon={<Zap className="size-4" />}>
            What we make possible
          </SectionKicker>
        </motion.div>
        <motion.h2 variants={fadeUp}>
          A small senior team that moves like a whole product department.
        </motion.h2>
      </motion.div>
      <div className={styles.capabilityGrid}>
        {capabilities.map((item, index) => (
          <motion.article
            className={styles.capabilityCard}
            key={item.title}
            initial={{ opacity: 0, y: 36, rotateX: 18 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ delay: index * 0.08, duration: 0.62 }}
          >
            <div className={styles.capabilityIcon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function InspectionLab() {
  const [spot, setSpot] = useState({ x: 64, y: 42 });

  const handleMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setSpot({ x, y });
  };

  return (
    <section className={styles.inspection}>
      <motion.div
        className={styles.inspectionCopy}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-12%" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <SectionKicker icon={<Eye className="size-4" />}>
            Inspection mode
          </SectionKicker>
        </motion.div>
        <motion.h2 variants={fadeUp}>
          We make the invisible parts of software inspectable.
        </motion.h2>
        <motion.p variants={fadeUp}>
          The interface can look calm because the system underneath is rigorous:
          architecture notes, analytics, automations, security posture, and
          release discipline all stay visible.
        </motion.p>
        <motion.div className={styles.valueGrid} variants={stagger}>
          {values.map((value) => (
            <motion.div className={styles.valuePill} key={value} variants={fadeUp}>
              <BadgeCheck className="size-4" />
              {value}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.inspectFrame}
        onPointerMove={handleMove}
        style={{ "--mx": `${spot.x}%`, "--my": `${spot.y}%` } as CSSVars}
        initial={{ opacity: 0, scale: 0.94, rotateY: -18 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.9, type: "spring", bounce: 0.2 }}
      >
        <div className={styles.inspectBase}>
          <ProductBoard />
        </div>
        <div className={styles.inspectOverlay}>
          <ProductBoard intense />
        </div>
        <div className={styles.inspectGrid} aria-hidden="true" />
        <div className={styles.inspectHud}>
          <TerminalSquare className="size-4" />
          <span>Latency stable</span>
          <strong>99.98%</strong>
        </div>
      </motion.div>
    </section>
  );
}

function RouteSection() {
  return (
    <section className={styles.routeSection}>
      <div className={styles.sectionHead}>
        <SectionKicker icon={<Waypoints className="size-4" />}>
          Launch route
        </SectionKicker>
        <h2>From spark to scale without losing the plot.</h2>
      </div>
      <div className={styles.routeCanvas}>
        <svg viewBox="0 0 1000 360" className={styles.routeSvg} aria-hidden="true">
          <motion.path
            d="M 70 255 C 190 55, 310 55, 430 205 S 655 350, 770 160 S 890 65, 940 115"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </svg>
        <div className={styles.routeGrid}>
          {routeSteps.map((step, index) => (
            <motion.article
              className={styles.routeCard}
              key={step.title}
              initial={{ opacity: 0, y: 36, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ delay: 0.15 + index * 0.12, duration: 0.62 }}
            >
              <div className={styles.routeIcon}>{step.icon}</div>
              <span>{`0${index + 1}`}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className={styles.proofSection}>
      <div className={styles.proofText}>
        <SectionKicker icon={<BadgeCheck className="size-4" />}>
          Proof in motion
        </SectionKicker>
        <h2>Beautiful motion is only worth it when the numbers move too.</h2>
      </div>
      <div className={styles.proofGrid}>
        {proof.map((item, index) => (
          <motion.div
            className={styles.proofCard}
            key={item.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: index * 0.08 }}
          >
            <strong>
              <Counter value={item.value} suffix={item.suffix} />
            </strong>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
      <motion.div
        className={styles.ctaInner}
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 0.72 }}
      >
        <SectionKicker icon={<Aperture className="size-4" />}>
          Bring the brief
        </SectionKicker>
        <h2>Let us make the next page feel unfairly good.</h2>
        <p>
          We will help you shape the product, build the system, and launch with
          the kind of polish people remember.
        </p>
        <div className={styles.ctaActions}>
          <Link className={styles.primaryAction} href="/contact">
            <Mail className="size-4" />
            Start the conversation
          </Link>
          <Link className={styles.secondaryAction} href="/blogs">
            <Sparkles className="size-4" />
            Read our thinking
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className={styles.pageShell}>
      <GravityTrail />
      <Navbar />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <ScrollGallery />
        <MotionStrip />
        <InspectionLab />
        <RouteSection />
        <ProofSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
