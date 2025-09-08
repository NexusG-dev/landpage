import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoHero from "figma:asset/d743ca980ff0a6a8f05e2f3b67fa33a3870fe3d5.png";

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('exclusivity');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8] via-[#22D3EE] to-[#94A3B8] opacity-10" />
      
      {/* Logo - Reducido y con menos espacio superior */}
      <div className="relative z-10 container mx-auto px-6 pt-4 md:pt-8 flex justify-center">
        <img 
          src={logoHero}
          alt="NexusG - Logo Ondas Hero" 
          className="w-32 md:w-40 lg:w-48 h-auto object-contain nexus-transition hover:scale-105"
          style={{ aspectRatio: 'auto' }}
        />
      </div>
      
      {/* Hero content - Centrado verticalmente */}
      <div className="relative z-10 container mx-auto px-6 flex-1 flex flex-col items-center justify-center text-center">
        
        {/* Main headlines - Foco principal */}
        <div className="max-w-5xl mx-auto space-y-4 md:space-y-6 mb-6 md:mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
            Tu equipo invisible.
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
            Tus decisiones, con ventaja.
          </h2>
          
          {/* Nuevo texto secundario */}
          <p className="text-base md:text-xl lg:text-2xl text-gray-600 leading-tight max-w-4xl mx-auto mt-4 md:mt-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Desde el primer día: Gmail + Calendar y un agente de negocio integrado (Finanzas, RRHH o CRM).
          </p>
        </div>

        {/* CTA Button */}
        <div className="glass rounded-3xl p-4 md:p-6 nexus-shadow max-w-lg mx-auto w-full">
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="px-6 md:px-10 py-3 md:py-5 text-base md:text-lg bg-[#38BDF8] hover:bg-[#0284C7] text-white rounded-3xl nexus-transition transform hover:scale-105 font-bold w-full mb-3"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Agenda tu demo
          </Button>
          <p className="text-xs md:text-sm text-gray-600 text-center max-w-md mx-auto leading-snug" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            En 15 minutos te mostramos cómo NexusG interactúa con tu negocio real.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-[#38BDF8] rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#22D3EE] rounded-full opacity-5 blur-3xl" />
    </section>
  );
}