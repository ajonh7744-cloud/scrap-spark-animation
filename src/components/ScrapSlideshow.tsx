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
    { img: copperImg, title: t("slide.copper"), desc: t("slide.copperDesc") },
    { img: aluminumImg, title: t("slide.aluminum"), desc: t("slide.aluminumDesc") },
    { img: metalImg, title: t("slide.metal"), desc: t("slide.metalDesc") },
    { img: plasticImg, title: t("slide.plastic"), desc: t("slide.plasticDesc") },
    { img: cansImg, title: t("slide.cans"), desc: t("slide.cansDesc") },
    { img: ewasteImg, title: t("slide.ewaste"), desc: t("slide.ewasteDesc") },
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
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
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

        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-secondary shadow-card">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={slides[current].img}
                  alt={slides[current].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <motion.h3
                    className="font-heading text-2xl md:text-4xl font-bold uppercase text-foreground mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    {slides[current].title}
                  </motion.h3>
                  <motion.p
                    className="text-muted-foreground text-sm md:text-base max-w-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    {slides[current].desc}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrapSlideshow;
