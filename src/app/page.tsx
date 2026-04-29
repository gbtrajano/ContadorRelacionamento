"use client";

import { useState, useEffect, useRef } from "react";
import {
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInWeeks,
  differenceInMonths,
  differenceInYears
} from "date-fns";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Heart, Calendar, Camera, Quote, Clock, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [timeData, setTimeData] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    weeks: 0,
    months: 0,
    years: 0,
  });

  const relationshipStartDate = new Date("2023-02-21T00:00:00");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      setTimeData({
        seconds: differenceInSeconds(now, relationshipStartDate),
        minutes: differenceInMinutes(now, relationshipStartDate),
        hours: differenceInHours(now, relationshipStartDate),
        days: differenceInDays(now, relationshipStartDate),
        weeks: differenceInWeeks(now, relationshipStartDate),
        months: differenceInMonths(now, relationshipStartDate),
        years: differenceInYears(now, relationshipStartDate),
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeCards = [
    { label: "Anos", value: timeData.years, icon: Calendar, color: "text-amber-400" },
    { label: "Meses", value: timeData.months, icon: Clock, color: "text-rose-400" },
    { label: "Semanas", value: timeData.weeks, icon: Heart, color: "text-pink-400" },
    { label: "Dias", value: timeData.days, icon: Calendar, color: "text-rose-500" },
    { label: "Horas", value: timeData.hours.toLocaleString("pt-BR"), icon: Clock, color: "text-amber-300" },
    { label: "Minutos", value: timeData.minutes.toLocaleString("pt-BR"), icon: Heart, color: "text-rose-300" },
  ];

  return (
    <main className="relative overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-rose-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 scale-105 animate-pulse-soft" />
        </motion.div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Heart className="w-12 h-12 text-rose-500 mx-auto mb-8 animate-pulse" fill="currentColor" />
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-100 via-rose-300 to-amber-200">
              Nosso Amor
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light tracking-[0.2em] uppercase mb-12">
              Desde 21 de Fevereiro de 2023
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-rose-500/50" />
              <p className="text-rose-400 font-medium italic">E contando cada segundo...</p>
              <div className="h-[1px] w-12 bg-rose-500/50" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <ChevronDown className="w-8 h-8 text-slate-500 animate-bounce" />
        </motion.div>
      </section>

      {/* Counter Section */}
      <section className="relative z-10 py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">A Jornada do Nosso Amor</h2>
            <p className="text-slate-500 text-lg">Cada momento ao seu lado é um presente</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {timeCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card glass-card-hover rounded-3xl p-8 group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={cn("p-3 rounded-2xl bg-white/5", card.color)}>
                      <card.icon size={24} />
                    </div>
                    <span className="text-slate-600 font-mono text-sm">#{index + 1}</span>
                  </div>
                  <h3 className="text-slate-400 text-sm uppercase tracking-widest mb-2">{card.label}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-white group-hover:text-rose-400 transition-colors duration-300">
                      {card.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 glass-card rounded-3xl p-10 text-center"
          >
            <p className="text-slate-400 text-sm uppercase tracking-[0.3em] mb-4">Total de Segundos</p>
            <span className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-amber-500">
              {timeData.seconds.toLocaleString("pt-BR")}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative z-10 py-32 px-4 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossa História</h2>
              <p className="text-slate-500">Alguns dos momentos mais marcantes que vivemos</p>
            </div>
            <Camera className="text-rose-500 w-12 h-12 opacity-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl glass-card"
              >
                <img
                  src={`/images/foto${i}.png`}
                  alt={`Momento ${i}`}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1516589174184-c685266e4871?q=80&w=600&auto=format&fit=crop`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="h-1 w-12 bg-rose-500 mb-4 rounded-full" />
                  <p className="text-white text-xl font-semibold italic">
                    {i === 1 && "Nosso Primeiro Encontro"}
                    {i === 2 && "Nossa Viagem Especial"}
                    {i === 3 && "Um Momento Mágico"}
                    {i === 4 && "Celebrando a Vida"}
                    {i === 5 && "Momento Romântico"}
                    {i === 6 && "Nosso Amor"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative z-10 py-40 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Quote className="absolute -top-12 -left-4 md:-left-12 w-24 h-24 text-rose-500/10" />
            <blockquote className="text-3xl md:text-5xl text-rose-100 font-medium leading-relaxed mb-12">
              "O amor não é sobre quantos dias, meses ou anos vocês estão juntos. É sobre o quanto vocês se importam um com o outro a cada dia."
            </blockquote>
            <div className="flex flex-col items-center gap-4">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-rose-500 to-transparent" />
              <p className="text-rose-400 font-playfair italic text-xl">Para todo o sempre</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center">
        <div className="flex items-center justify-center gap-2 text-slate-500 mb-2">
          <span>Feito com</span>
          <Heart size={14} className="text-rose-500 fill-rose-500" />
          <span>por Gabriel Trajano</span>
        </div>
        <p className="text-xs text-slate-600 uppercase tracking-widest">© 2026 Nosso Amor Infinito</p>
      </footer>
    </main>
  );
}