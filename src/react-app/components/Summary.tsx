export default function Summary() {
    return (
      <section className="py-16 relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-indigo-500/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-2xl">Professional Summary</h2>
            <div className="bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/30">
              <p className="text-lg leading-relaxed text-white">
                QA Analyst with hands-on experience in manual and automation testing of web and mobile applications 
                across multiple browsers and devices. Skilled in developing and executing detailed test cases, logging 
                defects in Jira, and performing regression, smoke, and exploratory testing. Strong at translating 
                business requirements into test scenarios, collaborating with cross-functional teams, managing task 
                prioritization, and supporting Agile workflows with CI/CD exposure.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  