import {profile, skills} from "./data";
import Navber from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <>
     <Navber profile={profile} />
      <Hero profile={profile} />
      <About skills={skills} />
      <Skills skills={skills} />
    </>
  );
}


export default App;