"use client";

import { useState, useEffect } from "react";
import { differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays, differenceInWeeks, differenceInMonths, differenceInYears } from "date-fns";
import { ptBR } from "date-fns/locale";

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
    { label: "Segundos", value: timeData.seconds.toLocaleString("pt-BR") },
    { label: "Minutos", value: timeData.minutes.toLocaleString("pt-BR") },
    { label: "Horas", value: timeData.hours.toLocaleString("pt-BR") },
    { label: "Dias", value: timeData.days.toLocaleString("pt-BR") },
    { label: "Semanas", value: timeData.weeks.toLocaleString("pt-BR") },
    { label: "Meses", value: timeData.months.toLocaleString("pt-BR") },
    { label: "Anos", value: timeData.years.toLocaleString("pt-BR") },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-rose-300/20" />

        <div className="relative z-10 text-center px-4 py-16">
          <h1 className="text-5xl md:text-7xl font-bold text-rose-600 mb-6 animate-fade-in">
            Nosso Amor
          </h1>
          <p className="text-xl md:text-2xl text-rose-500 mb-8">
            Desde 21 de Fevereiro de 2023
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto rounded-full" />
        </div>

        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-300/30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            >
              ❤
            </div>
          ))}
        </div>
      </section>

      {/* Counter Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-600 mb-16">
            Tempo Juntos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {timeCards.map((card, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100"
              >
                <h3 className="text-rose-500 text-lg font-medium mb-2 text-center">
                  {card.label}
                </h3>
                <p className="text-4xl md:text-5xl font-bold text-rose-600 text-center">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-100/50 to-pink-100/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-600 mb-16">
            Nossos Momentos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Photo 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
              <img
                src="/images/foto1.png"
                alt="Nosso primeiro encontro"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg font-medium">Nosso Primeiro Encontro</p>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
              <img
                src="/images/foto2.png"
                alt="Viagem especial"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg font-medium">Nossa Viagem Especial</p>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
              <img
                src="/images/foto3.png"
                alt="Momento romântico"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg font-medium">Momento Romântico</p>
              </div>
            </div>

            {/* Photo 4 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
              <img
                src="/images/foto4.png"
                alt="Celebrando juntos"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg font-medium">Celebrando Juntos</p>
              </div>
            </div>

            {/* Photo 5 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
              <img
                src="/images/foto5.png"
                alt="Juntos para sempre"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg font-medium">Juntos Para Sempre</p>
              </div>
            </div>

            {/* Photo 6 - Extra */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
              <img
                src="/images/foto6.png"
                alt="Nosso amor"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg font-medium">Nosso Amor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-pink-100">
            <svg className="w-16 h-16 text-rose-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl text-rose-600 font-medium italic mb-6">
              "O amor não é sobre quantos dias, meses ou anos vocês estão juntos.
              É sobre o quanto vocês se importam um com o outro a cada dia."
            </blockquote>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-rose-500/60">
        <p className="text-sm">Feito com ❤️ para celebrar nosso amor</p>
      </footer>
    </main>
  );
}