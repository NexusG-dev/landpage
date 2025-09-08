import { Clock, ArrowDown, Wifi, DollarSign } from "lucide-react";
import { useEffect, useRef } from "react";

const benefits = [
  {
    icon: Clock,
    metric: "+200h/mes",
    title: "Tiempo liberado",
    description: "Horas que tu equipo recupera al eliminar búsquedas manuales de información."
  },
  {
    icon: ArrowDown,
    metric: "−30%",
    title: "Menos coordinación",
    description: "Reducción en reuniones de seguimiento y solicitudes de información entre áreas."
  },
  {
    icon: Wifi,
    metric: "+40%",
    title: "Más desconexión",
    description: "Incremento en tiempo de trabajo profundo sin interrupciones por consultas internas."
  },
  {
    icon: DollarSign,
    metric: "Sin reuniones",
    title: "Ahorro inmediato",
    description: "Elimina juntas para compartir información que debería estar disponible al instante."
  }
];

export function MeasurableBenefits() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      const itemWidth = container.scrollWidth / benefits.length;
      currentIndex = (currentIndex + 1) % benefits.length;
      container.scrollTo({
        left: itemWidth * currentIndex,
        behavior: 'smooth'
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
            Impacto inmediato en tu operación
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Resultados medibles desde el primer día, conectando Gmail/Calendar con tu negocio.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-10">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-6 text-center nexus-transition hover:shadow-lg hover:bg-white/80 hover:scale-105 opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <div className="text-3xl font-bold text-[#0284C7] mb-2" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
                  {benefit.metric}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-6 min-w-[250px] snap-start text-center opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div className="text-2xl font-bold text-[#0284C7] mb-2" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
                    {benefit.metric}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700 text-sm leading-snug">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}