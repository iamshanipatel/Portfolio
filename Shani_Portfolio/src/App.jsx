import {profile, skills, projects, experiences} from "./data";
import Navber from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";

function App() {
  return (
    <>
     <Navber profile={profile} />
      <Hero profile={profile} />
      <About skills={skills} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      {/* <Journey Journey={Journey}/> */}
      <Journey experiences={experiences}/>
     
    </>
  );
}


export default App;