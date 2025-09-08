import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Star, Crown, Sparkles, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Exclusivity() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [dialogType, setDialogType] = useState<'fundador' | 'info'>('fundador');

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let currentIndex = 0;
    const benefitsCount = 3; // Crown, Star, Sparkles
    const interval = setInterval(() => {
      const itemWidth = container.scrollWidth / benefitsCount;
      currentIndex = (currentIndex + 1) % benefitsCount;
      container.scrollTo({
        left: itemWidth * currentIndex,
        behavior: 'smooth'
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isClienteFundador = dialogType === 'fundador';
    const subject = encodeURIComponent(
      isClienteFundador 
        ? "Quiero ser Cliente Fundador - NexusG"
        : "Solicitud de más información - NexusG"
    );
    
    const body = encodeURIComponent(
      `Hola Rodrigo,\n\n` +
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `${isClienteFundador 
        ? 'Me interesa ser uno de los 3 Clientes Fundadores de NexusG.'
        : 'Me interesa conocer más información sobre NexusG y cómo puede ayudar a mi empresa.'
      }\n\n` +
      `Mensaje:\n${formData.message}\n\n` +
      `Quedo atento a tu respuesta.\n\n` +
      `Saludos`
    );
    
    window.open(`mailto:rodrigo@nexusg.cl?subject=${subject}&body=${body}`, '_self');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const openDialog = (type: 'fundador' | 'info') => {
    setDialogType(type);
  };



  return (
    <section className="py-12 md:py-20 px-6 relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8] via-[#22D3EE] to-[#94A3B8] opacity-15" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38BDF8] rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#22D3EE] rounded-full opacity-10 blur-3xl" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          {/* Icon decoration */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="flex space-x-3 md:space-x-4">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-xl md:rounded-2xl flex items-center justify-center">
                <Crown className="w-5 md:w-6 h-5 md:h-6 text-white" strokeWidth={2} />
              </div>
              <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-[#22D3EE] to-[#38BDF8] rounded-xl md:rounded-2xl flex items-center justify-center">
                <Star className="w-5 md:w-6 h-5 md:h-6 text-white" strokeWidth={2} />
              </div>
              <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-xl md:rounded-2xl flex items-center justify-center">
                <Sparkles className="w-5 md:w-6 h-5 md:h-6 text-white" strokeWidth={2} />
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
            Buscamos 3 Clientes Fundadores.
          </h2>
          
          <p className="text-base md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-12 max-w-2xl mx-auto leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Visionarios. Con acceso preferente y beneficios exclusivos.
          </p>

          {/* Main CTAs */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-6 md:p-12 nexus-shadow mb-6 md:mb-8">
            {/* Desktop CTAs */}
            <div className="hidden md:block space-y-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg"
                    onClick={() => openDialog('fundador')}
                    className="w-full px-16 py-8 text-xl bg-[#38BDF8] hover:bg-[#0284C7] text-white rounded-3xl nexus-transition transform hover:scale-105 shadow-2xl font-bold"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    Quiero unirme como Cliente Fundador
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md glass border-white/30">
                  <DialogHeader>
                    <DialogTitle className="text-center text-[#0284C7] flex items-center justify-center gap-2" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
                      <Mail className="w-5 h-5" />
                      {dialogType === 'fundador' ? 'Cliente Fundador' : 'Más Información'}
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700">Nombre completo</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                        className="rounded-xl border-gray-200 focus:border-[#38BDF8] nexus-transition"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@empresa.com"
                        className="rounded-xl border-gray-200 focus:border-[#38BDF8] nexus-transition"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-700">Mensaje</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={
                          dialogType === 'fundador' 
                            ? "Cuéntanos sobre tu empresa y por qué te interesa ser Cliente Fundador..."
                            : "Cuéntanos sobre tu empresa y qué información necesitas..."
                        }
                        className="rounded-xl border-gray-200 focus:border-[#38BDF8] nexus-transition resize-none"
                        rows={4}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-[#38BDF8] hover:bg-[#0284C7] text-white rounded-xl nexus-transition shadow-lg font-medium"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      Enviar mensaje
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={() => openDialog('info')}
                    className="w-full px-16 py-6 text-lg border-2 border-[#0284C7] text-[#0284C7] hover:bg-[#0284C7] hover:text-white rounded-3xl nexus-transition font-medium"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    Quiero más información sobre el programa
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md glass border-white/30">
                  <DialogHeader>
                    <DialogTitle className="text-center text-[#0284C7] flex items-center justify-center gap-2" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
                      <Mail className="w-5 h-5" />
                      {dialogType === 'fundador' ? 'Cliente Fundador' : 'Más Información'}
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700">Nombre completo</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                        className="rounded-xl border-gray-200 focus:border-[#38BDF8] nexus-transition"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@empresa.com"
                        className="rounded-xl border-gray-200 focus:border-[#38BDF8] nexus-transition"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-700">Mensaje</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={
                          dialogType === 'fundador' 
                            ? "Cuéntanos sobre tu empresa y por qué te interesa ser Cliente Fundador..."
                            : "Cuéntanos sobre tu empresa y qué información necesitas..."
                        }
                        className="rounded-xl border-gray-200 focus:border-[#38BDF8] nexus-transition resize-none"
                        rows={4}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-[#38BDF8] hover:bg-[#0284C7] text-white rounded-xl nexus-transition shadow-lg font-medium"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      Enviar mensaje
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {/* Mobile CTAs - Stacked y más compactas */}
            <div className="md:hidden space-y-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg"
                    onClick={() => openDialog('fundador')}
                    className="w-full px-6 py-4 text-base bg-[#38BDF8] hover:bg-[#0284C7] text-white rounded-2xl nexus-transition font-bold"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    Quiero ser Cliente Fundador
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm mx-4 glass border-white/30">
                  <DialogHeader>
                    <DialogTitle className="text-center text-[#0284C7] flex items-center justify-center gap-2 text-lg" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
                      <Mail className="w-4 h-4" />
                      {dialogType === 'fundador' ? 'Cliente Fundador' : 'Más Información'}
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <Label htmlFor="name-mobile" className="text-gray-700 text-sm">Nombre completo</Label>
                      <Input
                        id="name-mobile"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        className="rounded-xl border-gray-200 focus:border-[#38BDF8] nexus-transition text-sm"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email-mobile" className="text-gray-700 text-sm">Email</Label>
                      <Input
                        id="email-mobile"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@empresa.com"
                        className="rounded-xl border-gray-200 focus:border-[#38BDF8] nexus-transition text-sm"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message-mobile" className="text-gray-700 text-sm">Mensaje</Label>
                      <Textarea
                        id="message-mobile"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={
                          dialogType === 'fundador' 
                            ? "Cuéntanos sobre tu empresa..."
                            : "Qué información necesitas..."
                        }
                        className="rounded-xl border-gray-200 focus:border-[#38BDF8] nexus-transition resize-none text-sm"
                        rows={3}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-[#38BDF8] hover:bg-[#0284C7] text-white rounded-xl nexus-transition shadow-lg font-medium text-sm"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      Enviar mensaje
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={() => openDialog('info')}
                    className="w-full px-6 py-3 text-sm border-2 border-[#0284C7] text-[#0284C7] hover:bg-[#0284C7] hover:text-white rounded-2xl nexus-transition font-medium"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    Más información
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm mx-4 glass border-white/30">
                  <DialogHeader>
                    <DialogTitle className="text-center text-[#0284C7] flex items-center justify-center gap-2 text-lg" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
                      <Mail className="w-4 h-4" />
                      {dialogType === 'fundador' ? 'Cliente Fundador' : 'Más Información'}
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <Label htmlFor="name-mobile2" className="text-gray-700 text-sm">Nombre completo</Label>
                      <Input
                        id="name-mobile2"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        className="rounded-xl border-gray-200 focus:border-[#38BDF8] nexus-transition text-sm"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email-mobile2" className="text-gray-700 text-sm">Email</Label>
                      <Input
                        id="email-mobile2"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@empresa.com"
                        className="rounded-xl border-gray-200 focus:border-[#38BDF8] nexus-transition text-sm"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message-mobile2" className="text-gray-700 text-sm">Mensaje</Label>
                      <Textarea
                        id="message-mobile2"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={
                          dialogType === 'fundador' 
                            ? "Cuéntanos sobre tu empresa..."
                            : "Qué información necesitas..."
                        }
                        className="rounded-xl border-gray-200 focus:border-[#38BDF8] nexus-transition resize-none text-sm"
                        rows={3}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-[#38BDF8] hover:bg-[#0284C7] text-white rounded-xl nexus-transition shadow-lg font-medium text-sm"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      Enviar mensaje
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Benefits list - Mobile carousel, Desktop grid */}
          <div className="mt-8 md:mt-12">
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-10">
              <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-6 nexus-shadow text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Acceso Prioritario</h3>
                <p className="text-gray-600 text-sm">Primera línea para todas las nuevas funcionalidades</p>
              </div>

              <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-6 nexus-shadow text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Influencia Directa</h3>
                <p className="text-gray-600 text-sm">Tu feedback moldea el producto final</p>
              </div>

              <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-6 nexus-shadow text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Beneficios Exclusivos</h3>
                <p className="text-gray-600 text-sm">Condiciones especiales de por vida</p>
              </div>
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory">
                <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-5 min-w-[250px] snap-start text-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Crown className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Acceso Prioritario</h3>
                  <p className="text-gray-600 text-xs leading-snug">Primera línea para todas las nuevas funcionalidades</p>
                </div>

                <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-5 min-w-[250px] snap-start text-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Star className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Influencia Directa</h3>
                  <p className="text-gray-600 text-xs leading-snug">Tu feedback moldea el producto final</p>
                </div>

                <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-5 min-w-[250px] snap-start text-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Beneficios Exclusivos</h3>
                  <p className="text-gray-600 text-xs leading-snug">Condiciones especiales de por vida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}