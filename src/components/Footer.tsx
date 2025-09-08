import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoFooter from "figma:asset/c8aff56cfdeb79577f9009fc1c81c26814d131d8.png";

export function Footer() {
  return (
    <footer className="py-12 md:py-16 px-6 bg-gradient-to-t from-[#F8FAFC] to-white border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          {/* Logo Principal - Ondas Footer */}
          <div className="mb-6 md:mb-8">
            <img 
              src={logoFooter}
              alt="NexusG - Logo Ondas Footer" 
              className="w-32 md:w-42 lg:w-48 h-auto mx-auto object-contain nexus-transition hover:scale-105"
              style={{ aspectRatio: 'auto' }}
            />
          </div>

          {/* Main tagline */}
          <p className="text-base md:text-xl text-gray-700 font-medium mb-6 md:mb-8 max-w-2xl mx-auto leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Experiencia Cero Fricción para líderes que no tienen tiempo que perder.
          </p>

          {/* Contact email */}
          <div className="mb-6 md:mb-12">
            <p className="text-sm md:text-lg text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Escríbenos: {" "}
              <a 
                href="mailto:rodrigo@nexusg.cl" 
                className="text-[#38BDF8] hover:text-[#0284C7] nexus-transition font-medium underline"
              >
                rodrigo@nexusg.cl
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-8 mb-6 md:mb-8">
            <a 
              href="#" 
              className="text-gray-600 hover:text-[#38BDF8] nexus-transition font-medium text-sm md:text-base"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Política de Privacidad
            </a>
            <span className="text-gray-400 hidden md:inline">|</span>
            <a 
              href="#" 
              className="text-gray-600 hover:text-[#38BDF8] nexus-transition font-medium text-sm md:text-base"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Contacto
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-4 md:pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-xs md:text-base" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              © 2025 NexusG. Tu equipo invisible para decisiones con ventaja.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}