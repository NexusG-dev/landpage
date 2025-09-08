import { Zap, Target, Rocket } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Plug & play, sin fricción",
    description: "Conecta Gmail y Calendar en minutos. Demo inmediata con tus propios correos."
  },
  {
    icon: Target,
    title: "Diseñada para líderes de retail",
    description: "Hecha para decisiones rápidas: ventas, finanzas, RRHH, clientes."
  },
  {
    icon: Rocket,
    title: "Siempre lista, sin entrenamientos eternos",
    description: "Tu equipo la usa desde el primer día, sin curva de aprendizaje."
  }
];

export function Differentiation() {
  return (
    <section className="py-12 md:py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
            No otra app. Una experiencia invisible.
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            NexusG se integra naturalmente en tu flujo de trabajo diario, sin interrumpir lo que ya funciona.
          </p>
        </div>

        {/* Desktop 3 Columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-8 nexus-transition hover:shadow-lg hover:bg-white/80 transform hover:scale-105 text-center opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile Stacked - Más compacto */}
        <div className="md:hidden space-y-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-4 nexus-transition hover:bg-white/80 opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-xl flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-1" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-snug" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}