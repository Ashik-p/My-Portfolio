import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-indigo-600/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 drop-shadow-lg">Let's Connect</h3>
            <p className="text-blue-200 mb-6 drop-shadow-sm">
              Ready to bring quality and reliability to your next project
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a 
              href="mailto:ashikpanchkoti@gmail.com" 
              className="flex items-center gap-3 bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full hover:bg-white/30 hover:backdrop-blur-xl hover:scale-110 hover:ring-1 hover:ring-white/40 hover:shadow-2xl transition-all duration-300 border border-white/20 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              <span>ashikpanchkoti@gmail.com</span>
            </a>
            <a 
              href="tel:4152790085" 
              className="flex items-center gap-3 bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full hover:bg-white/30 hover:backdrop-blur-xl hover:scale-110 hover:ring-1 hover:ring-white/40 hover:shadow-2xl transition-all duration-300 border border-white/20 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>(415) 279-0085</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/ashik-panchkoti" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full hover:bg-white/30 hover:backdrop-blur-xl hover:scale-110 hover:ring-1 hover:ring-white/40 hover:shadow-2xl transition-all duration-300 border border-white/20 shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-3 bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full hover:bg-white/30 hover:backdrop-blur-xl hover:scale-110 hover:ring-1 hover:ring-white/40 hover:shadow-2xl transition-all duration-300 border border-white/20 shadow-lg"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
          
          {/* Footer bottom spacing retained after removing the credit section */}
          <div className="pt-8 border-t border-white/20" />
        </div>
      </div>
    </footer>
  );
}
