import { Shield, Lock, Eye, Server, Key, Activity } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SecurityCard } from "./SecurityCard";
import { ChevronDown, ChevronUp } from "lucide-react";
import logoNodesSecurity from "figma:asset/85e027549b88d3ddf653df877f833d4084a3c84f.png";

const mainFeatures = [
  {
    icon: Lock,
    title: "Acceso Mínimo",
    description: "Nunca más de lo necesario. Principio de menor privilegio aplicado."
  },
  {
    icon: Eye,
    title: "Datos Protegidos", 
    description: "Sin almacenar correos ni exponer datos sensibles de tu empresa."
  },
  {
    icon: Activity,
    title: "Resiliencia",
    description: "Reintentos inteligentes y circuit breaker para máxima disponibilidad."
  }
];

const additionalFeatures = [
  {
    icon: Key,
    title: "OAuth Granular",
    description: "Control de acceso granular con scopes mínimos para máxima seguridad."
  },
  {
    icon: Server,
    title: "Anti-Sobrecarga",
    description: "Protección contra sobrecarga con retry con backoff y circuit breaker."
  }
];

export function Security() {
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const expandedScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setupAutoScroll = (container: HTMLDivElement, itemCount: number) => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (container) {
          const itemWidth = container.scrollWidth / itemCount;
          currentIndex = (currentIndex + 1) % itemCount;
          container.scrollTo({
            left: itemWidth * currentIndex,
            behavior: 'smooth'
          });
        }
      }, 3000);
      return interval;
    };

    let mainInterval: NodeJS.Timeout;
    let expandedInterval: NodeJS.Timeout;

    if (scrollRef.current) {
      mainInterval = setupAutoScroll(scrollRef.current, mainFeatures.length);
    }

    if (isExpanded && expandedScrollRef.current) {
      expandedInterval = setupAutoScroll(expandedScrollRef.current, additionalFeatures.length);
    }

    return () => {
      if (mainInterval) clearInterval(mainInterval);
      if (expandedInterval) clearInterval(expandedInterval);
    };
  }, [isExpanded]);

  return (
    <section className="py-12 md:py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
            Seguridad sin compromisos.
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Arquitectura empresarial que protege tus datos sin sacrificar la experiencia.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-6 md:p-12 nexus-shadow opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex justify-center mb-6 md:mb-8">
              <img 
                src={logoNodesSecurity}
                alt="NexusG - Logo Nodos Seguridad" 
                className="w-36 md:w-56 lg:w-68 h-auto object-contain nexus-transition hover:scale-105"
                style={{ aspectRatio: 'auto' }}
              />
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-6 mb-8">
              {mainFeatures.map((feature, index) => (
                <SecurityCard 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
            
            {/* Expandable section */}
            <div className="border-t border-gray-200 pt-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-center space-x-2 text-[#38BDF8] hover:text-[#0284C7] nexus-transition font-medium mb-6"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <span>{isExpanded ? 'Mostrar menos' : 'Ver más...'}</span>
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              {isExpanded && (
                <div className="grid grid-cols-2 gap-6 opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]">
                  {additionalFeatures.map((feature, index) => (
                    <SecurityCard 
                      key={index}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      index={index}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div ref={scrollRef} className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory mb-6">
              {mainFeatures.map((feature, index) => (
                <div key={index} className="min-w-[250px] snap-start">
                  <SecurityCard 
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    index={index}
                  />
                </div>
              ))}
            </div>
            
            {/* Mobile Expandable section */}
            <div className="border-t border-gray-200 pt-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-center space-x-2 text-[#38BDF8] hover:text-[#0284C7] nexus-transition font-medium mb-4 text-sm"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <span>{isExpanded ? 'Mostrar menos' : 'Ver más...'}</span>
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              {isExpanded && (
                <div ref={expandedScrollRef} className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]">
                  {additionalFeatures.map((feature, index) => (
                    <div key={index} className="min-w-[250px] snap-start">
                      <SecurityCard 
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        index={index}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <p className="text-lg md:text-2xl font-semibold text-[#0284C7]" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
              "Seguridad de nivel empresarial, desde el primer día."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}