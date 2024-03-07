import "./style.css";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";


export default function App() {
  return (
    <div id="page-top">
      <Navigation />
      <div className="container-fluid p-0">
        <About />
        <Education/>
        <Skills/>
        <Projects/>
        <ContactUs/>
      </div>
    </div>
  );
}
