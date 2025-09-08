import { LucideIcon } from "lucide-react";

interface SecurityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function SecurityCard({ icon: Icon, title, description, index }: SecurityCardProps) {
  return (
    <div 
      className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-6 nexus-transition hover:shadow-lg hover:bg-white/80 group cursor-pointer transform hover:scale-[1.02] opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-12 h-12 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-2xl flex items-center justify-center group-hover:scale-110 nexus-transition">
          <Icon className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
        <div>
          <h4 className="font-medium text-gray-900 mb-2" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
            {title}
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}