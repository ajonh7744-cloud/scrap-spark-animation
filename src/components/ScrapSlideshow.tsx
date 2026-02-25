import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import copperImg from "@/assets/slides/copper.jpg";
import aluminumImg from "@/assets/slides/aluminum.jpg";
import metalImg from "@/assets/slides/metal.jpg";
import plasticImg from "@/assets/slides/plastic.jpg";
import cansImg from "@/assets/slides/cans.jpg";
import ewasteImg from "@/assets/slides/ewaste.jpg";

const ScrapSlideshow = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const slides = [
    { img: copperImg, title: t("slide.copper"), desc: t("slide.copperDesc"), accent: "from-orange-600/80" },
    { img: aluminumImg, title: t("slide.aluminum"), desc: t("slide.aluminumDesc"), accent: "from-slate-500/80" },
    { img: metalImg, title: t("slide.metal"), desc: t("slide.metalDesc"), accent: "from-zinc-700/80" },
    { img: plasticImg, title: t("slide.plastic"), desc: t("slide.plasticDesc"), accent: "from-blue-700/80" },
    { img: cansImg, title: t("slide.cans"), desc: t("slide.cansDesc"), accent: "from-amber-600/80" },
    { img: ewasteImg, title: t("slide.ewaste"), desc: t("slide.ewasteDesc"), accent: "from-emerald-700/80" },
  ];

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0, scale: 1.05 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0, scale: 0.95 }),
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-4">
            <span className="text-foreground">{t("slide.heading1")}</span>
            <span className="text-gradient-copper">{t("slide.heading2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t("slide.sub")}</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main slider */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-card border border-border/50">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0"
              >
                <img
                  src={slides[current].img}
                  alt={slides[current].title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${slides[current].accent} via-background/50 to-transparent`} />
                <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />

                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <motion.div
                    className="inline-block px-3 py-1 mb-3 rounded-full bg-primary/20 border border-primary/40"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <span className="text-xs font-heading uppercase tracking-widest text-primary">
                      {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                    </span>
                  </motion.div>
                  <motion.h3
                    className="font-heading text-3xl md:text-5xl font-bold uppercase text-foreground mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    {slides[current].title}
                  </motion.h3>
                  <motion.p
                    className="text-muted-foreground text-sm md:text-lg max-w-lg leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    {slides[current].desc}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/70 backdrop-blur-md border border-border/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/70 backdrop-blur-md border border-border/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/30">
              <motion.div
                className="h-full bg-gradient-copper"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                key={current}
              />
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex justify-center gap-3 mt-6">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`relative w-16 h-10 md:w-24 md:h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  i === current
                    ? "border-primary shadow-copper scale-105"
                    : "border-border/30 opacity-50 hover:opacity-80 hover:border-border"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              >
                <img src={slide.img} alt="" className="w-full h-full object-cover" />
                {i === current && (
                  <div className="absolute inset-0 bg-primary/10" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrapSlideshow;
