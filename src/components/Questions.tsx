import { DollarSign, Clock, UserCheck, MessageSquare } from "lucide-react";
import { useEffect, useRef } from "react";

const questions = [
  {
    icon: DollarSign,
    question: "¿Qué clientes con facturas atrasadas me escribieron hoy?",
  },
  {
    icon: Clock,
    question: "¿Tengo reuniones hoy con un proveedor crítico?",
  },
  {
    icon: UserCheck,
    question: "¿Qué pendientes tengo con el área de RRHH?",
  },
  {
    icon: MessageSquare,
    question: "Resume el último hilo con Proveedor X.",
  },
];

export function Questions() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (container) {
        const itemWidth = container.scrollWidth / questions.length;
        currentIndex = (currentIndex + 1) % questions.length;
        container.scrollTo({
          left: itemWidth * currentIndex,
          behavior: 'smooth'
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="preguntas" className="py-12 md:py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
            En segundos, tus gerentes pueden preguntar…
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Información empresarial al instante, sin buscar en sistemas, sin esperar reportes.
          </p>
        </div>

        {/* Desktop Grid 2x2 */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {questions.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="glass rounded-3xl p-8 nexus-shadow nexus-transition hover:shadow-lg hover:bg-white/80 group cursor-pointer transform hover:scale-[1.02] opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-2xl flex items-center justify-center group-hover:scale-110 nexus-transition">
                    <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
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
          <div ref={scrollRef} className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory">
            {questions.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="glass rounded-2xl p-4 nexus-shadow min-w-[300px] snap-start opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-xl flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 font-medium leading-snug" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        "{item.question}"
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}