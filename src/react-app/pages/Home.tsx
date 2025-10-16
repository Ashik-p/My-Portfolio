import Header from '@/react-app/components/Header';
import Summary from '@/react-app/components/Summary';
import TechnicalSkills from '@/react-app/components/TechnicalSkills';
import Experience from '@/react-app/components/Experience';
import Projects from '@/react-app/components/Projects';
import Education from '@/react-app/components/Education';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Summary />
      <TechnicalSkills />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}
