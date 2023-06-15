import "./App.css";
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import HeroSection from "./components/HeroSection";
import data from "./data/portfolio-data.json";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";

function App() {

  // console.log(data);
  const { heroSection, projects, education, experience, certifications } = data;
  

  return (
    <>
    <ParticleBackground />

    <Header />
    <HeroSection heroData={heroSection} />
    <Experience experienceData={experience} />
    <Projects projectsData={projects} />
    <Education educationData={education}/>
    <Certifications certificationsData={certifications}/>
    <Contact />
    
    
    </>
  );
}

export default App;
