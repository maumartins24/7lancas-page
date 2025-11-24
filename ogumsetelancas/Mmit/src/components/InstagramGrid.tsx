import { useEffect, useRef, useState } from "react";

// 1) Importe suas fotos locais (coloque os arquivos em src/images/)
import f1 from "@/images/insta1.jpg"
import f2 from "@/images/insta2.jpg";
import f3 from "@/images/insta3.jpg";
import f4 from "@/images/insta4.jpg";
import f5 from "@/images/insta5.jpg";
import nos from "@/images/nos.jpg"

export default function InstagramGrid() {
  const slides = [
    { id: 1, src: f1, alt: "Gira de Ogum" },
    { id: 2, src: f2, alt: "Estudo coletivo" },
    { id: 3, src: f3, alt: "Evento comunitário" },
    { id: 4, src: f4, alt: "Trabalho espiritual" },
    { id: 5, src: f5, alt: "Convívio da comunidade" },
    { id: 6, src: nos, alt: "Nós" },
  ];

  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // 2) Autoplay (ajuste o delay ou desative com 0)
  const autoPlayMs = 4500;

  useEffect(() => {
    if (!autoPlayMs) return;
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(next, autoPlayMs);
    return () => { if (timer.current) window.clearInterval(timer.current); };
  }, [index]);

  // 3) Swipe no mobile
  const onTouchStart = (e: React.TouchEvent) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
    touchStartX.current = null;
  };

  // 4) Navegação por teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-black transition-all duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-800 dark:text-red-400 mb-2">
            Nossa Jornada
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-red-100 max-w-2xl mx-auto">
            Fique conectado por nossas encruzilhadas e acompanhe nosso caminhar!
          </p>
        </div>

        <div
          className="relative w-full overflow-hidden rounded-2xl shadow-xl border border-blue-100 dark:border-red-800"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          aria-roledescription="carousel"
          aria-label="Galeria Instagram"
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((s, i) => (
              <a
                key={s.id}
                href="https://www.instagram.com/ogumsetelancas/"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-full h-[260px] md:h-[360px] lg:h-[420px] block bg-black/5"
                aria-label={`Abrir foto ${i + 1} no Instagram`}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </a>
            ))}
          </div>

          {/* setas e indicadores iguais */}
        </div>

        <div className="text-center mt-6 md:mt-8">
          <a
            href="https://www.instagram.com/ogumsetelancas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-red-500 dark:to-red-700 text-white text-sm md:text-base font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Seguir @ogumsetelancas
          </a>
        </div>
      </div>
    </section>
  );
}
