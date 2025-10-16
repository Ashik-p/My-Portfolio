import { ExternalLink, Calendar, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: "Urban Routes Web App",
    subtitle: "Automated + Manual Testing",
    year: "2024",
    description: [
      "Validated taxi booking, payment, and routing workflows across browsers and devices.",
      "Logged and tracked defects in Jira, collaborating with developers to ensure fixes were validated.",
      "Automated parts of the workflow (vehicle selection, driver assignment) with Selenium/WebdriverIO using POM, reducing manual regression by 20%."
    ],
    link: "https://github.com/Ashik-p/hm08-qa-us"
  },
  {
    title: "Urban Scooter App",
    subtitle: "Web + Mobile + API Testing",
    year: "2024",
    description: [
      "Executed 50+ manual test cases covering core mobile and web workflows.",
      "Ensured cross-platform compatibility across browsers and mobile devices (iOS/Android).",
      "Validated APIs with Postman and monitored network traffic with Charles Proxy.",
      "Collaborated with team members to align testing scope with feature requirements and ensure end-to-end workflow coverage."
    ],
    link: "https://docs.google.com/spreadsheets/d/1okfcrqpTtX4HI7X4IBkQRQjbUMD1edckaYSAKgtDSSo/edit?gid=0#gid=0"
  },
  {
    title: "Urban Grocer Web App",
    subtitle: "API Automation + Test Documentation",
    year: "2024",
    description: [
      "Developed and executed API tests for GET, POST, PUT, and DELETE requests, leveraging HTTP code verification techniques and validating response payloads for correctness.",
      "Implemented UI and API automation using Jest on Node.js, applying the Page Object Model (POM) for maintainable scripts.",
      "Utilized Postman and Charles Proxy to inspect network requests, troubleshoot issues, and ensure API reliability."
    ],
    link: "https://github.com/Ashik-p/hm07-qa-us"
  }
];

export default function Projects() {
  return (
    <section className="py-16 relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-indigo-500/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center drop-shadow-sm">QA Project Experience</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 group shadow-lg">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <FolderGit2 className="w-6 h-6 text-blue-300" />
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-blue-200 font-medium text-sm mb-4">{project.subtitle}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {project.description.map((desc, descIndex) => (
                    <div key={descIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white/90 text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-200 hover:text-white font-medium text-sm group-hover:translate-x-1 transition-all duration-300 rounded-full px-3 py-2 hover:bg-white/20 hover:backdrop-blur-xl hover:scale-110 hover:ring-1 hover:ring-blue-200/60 hover:shadow-2xl"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
