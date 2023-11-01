import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import TimeLine from "./components/TimeLine";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <TimeLine/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
