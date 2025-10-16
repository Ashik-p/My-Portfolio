import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    type: "Certificate",
    title: "QA Engineering Certificate",
    institution: "TripleTen",
    year: "2024",
    location: "Remote",
    description: null
  },
  {
    type: "In Progress",
    title: "Associate of Science in Computer Science",
    institution: "City College of San Francisco",
    year: "Expected 2027",
    location: "San Francisco, CA",
    description: null
  },
  {
    type: "Degree",
    title: "BBA in Business Administration",
    institution: "Purbanchal University",
    year: "2020",
    location: "Nepal",
    description: null
  }
];

const workshop = {
  title: "UiPath Automation Cloud Workshop",
  location: "San Francisco, CA",
  date: "June 2025",
  description: [
    "Completed hands-on workshop on AI-driven low-code/no-code test automation using UiPath Autopilot.",
    "Practiced requirement validation, self-healing test scripts, and automated test data generation."
  ]
};

export default function Education() {
  return (
    <section className="py-16 relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-indigo-500/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center drop-shadow-2xl">Education & Training</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3 drop-shadow-2xl">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-lg hover:bg-white/20 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 text-xs rounded-full font-semibold backdrop-blur-sm shadow-sm ring-1 ring-inset ${
                            edu.type === 'Certificate' ? 'bg-green-500/40 text-green-50 ring-green-300/60' :
                            edu.type === 'In Progress' ? 'bg-blue-500/40 text-blue-50 ring-blue-300/60' :
                            'bg-purple-500/40 text-purple-50 ring-purple-300/60'
                          }`}>
                            {edu.type}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-1">{edu.title}</h4>
                        <p className="text-blue-200 font-medium">{edu.institution}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-white/80">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </div>
                      {edu.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Workshop Section */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3 drop-shadow-2xl">
                <Award className="w-6 h-6 text-blue-600" />
                Workshops & Training
              </h3>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-lg hover:bg-white/20 hover:shadow-2xl transition-all duration-300">
                <h4 className="text-lg font-semibold text-white mb-3">{workshop.title}</h4>
                
                <div className="flex flex-wrap gap-4 text-sm text-white/80 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{workshop.location}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {workshop.description.map((desc, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white/90 text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}