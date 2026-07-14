import { ThemeProvider } from "./ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedExperience from "./components/FeaturedExperience";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <FeaturedExperience />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
