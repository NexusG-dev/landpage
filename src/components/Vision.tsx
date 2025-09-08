import { Mail, Calendar, DollarSign, Users, Database, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoNodesSmall from "figma:asset/161f49d658bbe2ae7e6958f37c8941bab1a43064.png";

const currentFeatures = [
  { icon: Mail, name: "Gmail" },
  { icon: Calendar, name: "Calendar" }
];

const futureFeatures = [
  { icon: DollarSign, name: "Finanzas" },
  { icon: Users, name: "RRHH" },
  { icon: Database, name: "CRM" }
];

export function Vision() {
  return (
    <section className="py-12 md:py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
            Hoy Gmail. Mañana tu copiloto empresarial.
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Comenzamos conectando tu Gmail y Calendar. Pronto expandiremos a finanzas, RRHH y CRM para ser tu asistente integral de decisiones de negocio.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:flex lg:flex-row items-center justify-center space-x-16">
          {/* HOY */}
          <div className="text-center">
            <div className="glass rounded-3xl p-8 nexus-shadow mb-6 hover:bg-white/80 nexus-transition opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]">
              <h3 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>HOY</h3>
              <div className="flex justify-center space-x-6">
                {currentFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-2xl flex items-center justify-center mb-3">
                        <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                      <p className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{feature.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Arrow con Logo de Nodos */}
          <div className="flex flex-col items-center justify-center space-y-4 opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-full flex items-center justify-center nexus-transition hover:scale-110">
              <ArrowRight className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <p className="text-sm font-medium text-[#0284C7] text-center px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Evoluciona a tu copiloto empresarial
            </p>
            <div className="opacity-60">
              <img 
                src={logoNodesSmall}
                alt="NexusG - Logo Nodos Small" 
                className="w-80 md:w-96 lg:w-[28rem] h-auto object-contain"
                style={{ aspectRatio: 'auto' }}
              />
            </div>
          </div>

          {/* MAÑANA */}
          <div className="text-center">
            <div className="glass rounded-3xl p-8 nexus-shadow mb-6 hover:bg-white/80 nexus-transition opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-center space-x-3 mb-6">
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>MAÑANA</h3>

              </div>
              <div className="grid grid-cols-3 gap-4">
                {futureFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#38BDF8]/30 to-[#22D3EE]/30 rounded-2xl flex items-center justify-center mb-2">
                        <IconComponent className="w-6 h-6 text-[#38BDF8]" strokeWidth={2} />
                      </div>
                      <p className="text-xs font-medium text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{feature.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Vertical */}
        <div className="lg:hidden space-y-6">
          {/* HOY */}
          <div className="text-center">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-5 hover:bg-white/80 nexus-transition opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>HOY</h3>
              <div className="flex justify-center space-x-3">
                {currentFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-xl flex items-center justify-center mb-2">
                        <IconComponent className="w-5 h-5 text-white" strokeWidth={2} />
                      </div>
                      <p className="text-xs font-medium text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{feature.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Arrow con Logo */}
          <div className="flex justify-center opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col items-center space-y-1">
              <div className="w-10 h-10 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white rotate-90" strokeWidth={2} />
              </div>
              <p className="text-xs font-medium text-[#0284C7] text-center px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Evoluciona a tu copiloto empresarial
              </p>
              <img 
                src={logoNodesSmall}
                alt="NexusG - Logo Nodos Small" 
                className="w-48 md:w-56 lg:w-64 h-auto opacity-60 object-contain"
                style={{ aspectRatio: 'auto' }}
              />
            </div>
          </div>

          {/* MAÑANA */}
          <div className="text-center">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-5 hover:bg-white/80 nexus-transition opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>MAÑANA</h3>

              </div>
              <div className="grid grid-cols-3 gap-2">
                {futureFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#38BDF8]/30 to-[#22D3EE]/30 rounded-xl flex items-center justify-center mb-1 mx-auto">
                        <IconComponent className="w-4 h-4 text-[#38BDF8]" strokeWidth={2} />
                      </div>
                      <p className="text-xs font-medium text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{feature.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}