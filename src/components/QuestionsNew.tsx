import { DollarSign, Users, Database, Truck, TrendingUp, Headphones } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const questions = [
  {
    icon: DollarSign,
    category: "Finanzas / ERP",
    question: "¿Qué clientes con facturas atrasadas me escribieron hoy?",
  },
  {
    icon: Users,
    category: "RRHH",
    question: "¿Qué pendientes tengo con el área de RRHH?",
  },
  {
    icon: Database,
    category: "CRM",
    question: "¿Qué oportunidades críticas están sin seguimiento y me escribieron por correo?",
  },
  {
    icon: Truck,
    category: "Proveedores",
    question: "Resume el último hilo con Proveedor X y dime si hay riesgos de atraso.",
  },
  {
    icon: TrendingUp,
    category: "Ventas",
    question: "¿Cómo van mis ventas de este mes comparadas con el anterior?",
  },
  {
    icon: Headphones,
    category: "Atención al Cliente",
    question: "¿Qué reclamos abiertos de clientes me llegaron hoy al correo?",
  },
];

export function QuestionsNew() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
      }, 4500); // 4.5 seconds
    };

    startAutoPlay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    // Reset auto-play timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
      }, 4500);
    }, 100);
  };

  // Touch/swipe handling
  const handleTouchStart = useRef<number>(0);
  const handleTouchEnd = useRef<number>(0);

  const onTouchStart = (e: React.TouchEvent) => {
    handleTouchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    handleTouchEnd.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!handleTouchStart.current || !handleTouchEnd.current) return;
    
    const distance = handleTouchStart.current - handleTouchEnd.current;
    const threshold = 50;

    if (distance > threshold) {
      // Swipe left - next slide
      goToSlide((currentIndex + 1) % questions.length);
    } else if (distance < -threshold) {
      // Swipe right - previous slide
      goToSlide(currentIndex === 0 ? questions.length - 1 : currentIndex - 1);
    }
  };

  return (
    <section className="py-12 md:py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
            Preguntas que tus gerentes pueden responder en segundos
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            NexusG conecta Gmail y Calendar con tus sistemas de negocio para dar claridad inmediata.
          </p>
        </div>

        {/* Desktop Grid 3x2 (6 cajas: 3 arriba, 3 abajo) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {questions.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="glass rounded-3xl p-6 nexus-shadow nexus-transition hover:shadow-lg hover:bg-white/80 group cursor-pointer transform hover:scale-[1.02] opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-2xl flex items-center justify-center group-hover:scale-110 nexus-transition">
                      <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#0284C7] mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {item.category}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-base md:text-lg text-gray-800 font-medium leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      "{item.question}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {questions.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="glass rounded-2xl p-5 nexus-shadow mx-auto">
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0 w-11 h-11 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-xl flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-white" strokeWidth={2} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-[#0284C7]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                              {item.category}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-base text-gray-800 font-medium leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            "{item.question}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#38BDF8] w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}