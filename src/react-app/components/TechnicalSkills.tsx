import { CheckCircle } from 'lucide-react';

const skillCategories = [
  {
    title: "Testing Types",
    skills: ["Mobile (iOS/Android)", "Manual Testing", "Regression", "End-to-End", "API", "UI Automation", "Exploratory", "UAT"]
  },
  {
    title: "Automation Tools",
    skills: ["Postman", "Selenium", "WebdriverIO", "Playwright (basic)"]
  },
  {
    title: "Programming & Scripting",
    skills: ["JavaScript", "Node.js", "Jest"]
  },
  {
    title: "CI/CD & Version Control",
    skills: ["Git", "GitHub Actions", "Gherkin"]  
  }, 
  {    
    title: "Test Management & Defect Tracking",
    skills: ["JIRA", "DrivT"]
  },
  {
    title: "Databases",
    skills: ["MySQL (basic validation queries)"]
  },  
  {
    title: "Methodologies",
    skills: ["Agile/Scrum", "Test Case Writing", "Test Plan Documentation"]
  }
];

export default function TechnicalSkills() {
  return (
    <section className="py-16 relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-indigo-500/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center drop-shadow-2xl">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:shadow-2xl transition-all duration-700 shadow-lg h-80 flex flex-col"
              >
                {/* Parallax glow */}
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl transform-gpu transition-transform duration-700 ease-out group-hover:translate-y-6 group-hover:translate-x-6" />

                <div className="flex-1 flex items-center justify-center group-hover:flex-none group-hover:items-start transition-all duration-700 ease-in-out">
                  <h3 className="relative text-lg font-semibold text-white text-center group-hover:mb-6 transition-all duration-700 ease-in-out">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3 max-h-0 opacity-0 transform-gpu transition-all duration-500 ease-out group-hover:max-h-[500px] group-hover:opacity-100 overflow-hidden">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-blue-300 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}