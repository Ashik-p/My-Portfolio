import { Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
  {
    title: "QA Engineer Extern",
    company: "TaskTrain",
    location: "Remote",
    period: "May 2025 – July 2025",
    achievements: [
      "Conducted manual functional and exploratory testing to validate workflows and system functionality across web and mobile platforms.",
      "Performed integration testing with third-party tools (e.g., Notion via Zapier), ensuring data accuracy and process consistency.",
      "Designed, executed, and documented 800+ test cases covering regression, core workflows, and role-based permissions.",
      "Logged defects with detailed reproduction steps and priority analysis in Jira, supporting efficient bug resolution.",
      "Collaborated with cross-functional teams to validate fixes and maintain release quality, ensuring alignment with business requirements."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-16 relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-indigo-500/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center drop-shadow-2xl">Professional Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 hover:bg-white/20 hover:shadow-2xl transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-white/80 mb-4">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-current" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-current" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-current" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white/90 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
