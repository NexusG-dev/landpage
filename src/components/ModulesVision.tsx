import { Mail, Calendar, DollarSign, Users, Database, Truck, Headphones, ArrowRight, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const todayModules = [
  {
    icon: Mail,
    name: "Gmail",
    description: "Lee, resume y prioriza lo urgente sin perder tiempo.",
  },
  {
    icon: Calendar,
    name: "Calendar",
    description: "Agenda y recordatorios conectados a tu día real.",
  },
  {
    icon: DollarSign,
    name: "Finanzas",
    description: "Identifica clientes con deuda que escribieron hoy.",
  },
];

const tomorrowModules = [
  {
    icon: Users,
    name: "RRHH",
    description: "Pendientes de vacaciones, licencias y rotación por sucursal.",
  },
  {
    icon: Database,
    name: "CRM",
    description: "Oportunidades críticas sin seguimiento, directo desde tu correo.",
  },
  {
    icon: TrendingUp,
    name: "Ventas",
    description: "Comparación de ventas en tiempo real, sin esperar reportes.",
  },
  {
    icon: Truck,
    name: "Logística",
    description: "Estado de stock y pedidos críticos al instante.",
  },
  {
    icon: Headphones,
    name: "Atención al Cliente",
    description: "Reclamos abiertos de clientes detectados en tu bandeja.",
  },
];

export function ModulesVision() {
  const [currentTodayIndex, setCurrentTodayIndex] = useState(0);
  const [currentTomorrowIndex, setCurrentTomorrowIndex] = useState(0);
  const todayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const tomorrowIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play para carrusel HOY
  useEffect(() => {
    todayIntervalRef.current = setInterval(() => {
      setCurrentTodayIndex((prevIndex) => (prevIndex + 1) % todayModules.length);
    }, 5000); // 5 segundos para auto-play lento

    return () => {
      if (todayIntervalRef.current) {
        clearInterval(todayIntervalRef.current);
      }
    };
  }, []);

  // Auto-play para carrusel MAÑANA
  useEffect(() => {
    tomorrowIntervalRef.current = setInterval(() => {
      setCurrentTomorrowIndex((prevIndex) => (prevIndex + 1) % tomorrowModules.length);
    }, 5500); // 5.5 segundos, ligeramente diferente para evitar sincronización

    return () => {
      if (tomorrowIntervalRef.current) {
        clearInterval(tomorrowIntervalRef.current);
      }
    };
  }, []);

  // Navegación manual HOY
  const goToTodaySlide = (index: number) => {
    setCurrentTodayIndex(index);
    if (todayIntervalRef.current) {
      clearInterval(todayIntervalRef.current);
    }
    setTimeout(() => {
      todayIntervalRef.current = setInterval(() => {
        setCurrentTodayIndex((prevIndex) => (prevIndex + 1) % todayModules.length);
      }, 5000);
    }, 100);
  };

  // Navegación manual MAÑANA
  const goToTomorrowSlide = (index: number) => {
    setCurrentTomorrowIndex(index);
    if (tomorrowIntervalRef.current) {
      clearInterval(tomorrowIntervalRef.current);
    }
    setTimeout(() => {
      tomorrowIntervalRef.current = setInterval(() => {
        setCurrentTomorrowIndex((prevIndex) => (prevIndex + 1) % tomorrowModules.length);
      }, 5500);
    }, 100);
  };

  return (
    <section className="py-12 md:py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
            Hoy tres módulos. Mañana todos los que tu empresa necesite.
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            NexusG ya conecta Gmail, Calendar y Finanzas. Y está listo para sumar RRHH, CRM, Ventas, Logística y más integraciones.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:items-start lg:justify-center lg:space-x-12">
          {/* Columna izquierda (HOY) */}
          <div className="flex-1 max-w-md">
            <div className="glass rounded-3xl p-8 nexus-shadow hover:bg-white/80 nexus-transition opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
                HOY
              </h3>
              <div className="space-y-6">
                {todayModules.map((module, index) => {
                  const IconComponent = module.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/50 nexus-transition">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
                          {module.name}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {module.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Flecha central animada */}
          <div className="flex flex-col items-center justify-center space-y-4 mt-20 opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-full flex items-center justify-center nexus-transition hover:scale-110 animate-pulse">
              <ArrowRight className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <p className="text-sm font-medium text-[#0284C7] text-center px-4 max-w-32" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Expansión continua
            </p>
          </div>

          {/* Columna derecha (MAÑANA) */}
          <div className="flex-1 max-w-md">
            <div className="glass rounded-3xl p-8 nexus-shadow hover:bg-white/80 nexus-transition opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
                MAÑANA
              </h3>
              <div className="space-y-4">
                {tomorrowModules.map((module, index) => {
                  const IconComponent = module.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/50 nexus-transition">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#38BDF8]/30 to-[#22D3EE]/30 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-[#38BDF8]" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
                          {module.name}
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {module.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {/* HOY - Mobile */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
              Hoy ya tienes 3 módulos listos.
            </h3>
            
            {/* Carrusel HOY */}
            <div className="relative overflow-hidden mb-4">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTodayIndex * 100}%)` }}
              >
                {todayModules.map((module, index) => {
                  const IconComponent = module.icon;
                  return (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <div className="glass rounded-2xl p-6 nexus-shadow mx-auto">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-xl flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
                              {module.name}
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                              {module.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Indicadores HOY */}
            <div className="flex justify-center space-x-2">
              {todayModules.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTodaySlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTodayIndex 
                      ? 'bg-[#38BDF8] w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* MAÑANA - Mobile */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
              Mañana puedes sumar más.
            </h3>
            
            {/* Carrusel MAÑANA */}
            <div className="relative overflow-hidden mb-4">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTomorrowIndex * 100}%)` }}
              >
                {tomorrowModules.map((module, index) => {
                  const IconComponent = module.icon;
                  return (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <div className="glass rounded-2xl p-6 nexus-shadow mx-auto">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#38BDF8]/30 to-[#22D3EE]/30 rounded-xl flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-[#38BDF8]" strokeWidth={2} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
                              {module.name}
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                              {module.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Indicadores MAÑANA */}
            <div className="flex justify-center space-x-2">
              {tomorrowModules.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTomorrowSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTomorrowIndex 
                      ? 'bg-[#38BDF8] w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}