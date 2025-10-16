import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-indigo-500/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400/80 to-indigo-600/80 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl backdrop-blur-lg border border-white/20">
              <span className="text-4xl font-bold text-white drop-shadow-lg">AP</span>
            </div>
            <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
              ASHIK PANCHKOTI
            </h1>
            <h2 className="text-2xl font-light text-blue-200 mb-8">QA ANALYST</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="mailto:ashikpanchkoti@gmail.com" className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full transform-gpu transition-all duration-300 hover:bg-white/30 hover:backdrop-blur-xl hover:scale-110 hover:ring-1 hover:ring-white/40 hover:shadow-2xl border border-white/20 shadow-lg">
              <Mail className="w-4 h-4" />
              ashikpanchkoti@gmail.com
            </a>
            <a href="tel:4152790085" className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full transform-gpu transition-all duration-300 hover:bg-white/30 hover:backdrop-blur-xl hover:scale-110 hover:ring-1 hover:ring-white/40 hover:shadow-2xl border border-white/20 shadow-lg">
              <Phone className="w-4 h-4" />
              (415) 279-0085
            </a>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20 shadow-lg">
              <MapPin className="w-4 h-4" />
              Open to Relocation
            </div>
            <a href="https://www.linkedin.com/in/ashik-panchkoti" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full transform-gpu transition-all duration-300 hover:bg-white/30 hover:backdrop-blur-xl hover:scale-110 hover:ring-1 hover:ring-white/40 hover:shadow-2xl border border-white/20 shadow-lg">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="https://github.com/Ashik-p" className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full transform-gpu transition-all duration-300 hover:bg-white/30 hover:backdrop-blur-xl hover:scale-110 hover:ring-1 hover:ring-white/40 hover:shadow-2xl border border-white/20 shadow-lg">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
    </header>
  );
}
