import { DollarSign, Users, TrendingUp, Database } from "lucide-react";
import { useEffect, useRef } from "react";

const useCases = [
  {
    icon: DollarSign,
    title: "Finanzas / ERP",
    scenario: "Facturas y pagos al instante",
    description: "Identifica clientes con deuda que escribieron hoy sin revisar sistemas contables o planillas de Excel."
  },
  {
    icon: Users,
    title: "RRHH",
    scenario: "Vacaciones y licencias al día",
    description: "Conoce pendientes de ausencias sin revisar planillas. Estado de evaluaciones y rotación por sucursal."
  },
  {
    icon: TrendingUp,
    title: "Ventas",
    scenario: "Performance en tiempo real",
    description: "Compara ventas de este mes vs el anterior. Tendencias y proyecciones sin esperar reportes mensuales."
  },
  {
    icon: Database,
    title: "CRM",
    scenario: "Oportunidades y clientes críticos",
    description: "Estado de pipeline y leads sin seguimiento. Satisfacción del cliente disponible al preguntar."
  }
];

export function UseCases() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (container) {
        const itemWidth = container.scrollWidth / useCases.length;
        currentIndex = (currentIndex + 1) % useCases.length;
        container.scrollTo({
          left: itemWidth * currentIndex,
          behavior: 'smooth'
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
            Respuestas inmediatas cruzando Gmail/Calendar con tus sistemas
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            NexusG conecta la información dispersa en tu empresa para que cualquier pregunta de negocio tenga respuesta inmediata.
          </p>
        </div>

        {/* Desktop Grid 2x2 */}
        <div className="hidden md:grid md:grid-cols-2 gap-10">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-8 nexus-transition hover:shadow-lg hover:bg-white/80 opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-lg font-semibold text-[#0284C7] mb-3">{useCase.scenario}</p>
                    <p className="text-gray-700">{useCase.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-6 min-w-[300px] snap-start opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{useCase.title}</h3>
                  </div>
                  <p className="text-base font-semibold text-[#0284C7] mb-2 text-center">{useCase.scenario}</p>
                  <p className="text-gray-700 text-center text-sm leading-snug">{useCase.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}