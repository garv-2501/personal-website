import { useState, useEffect } from "react";
import "./index.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { ShootingStarsAndStarsBackgroundDemo } from "./components/ui/shooting-stars-and-stars-background-demo";
import { BackgroundGradientAnimationDemo } from "./components/ui/background-gradient-animation-demo";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
      if (JSON.parse(savedMode)) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`relative font-mono mx-auto md:px-16 px-5 ${
        darkMode ? "dark:bg-dark dark:text-light" : "bg-light text-dark"
      }`}
    >
      {darkMode ? (
        <ShootingStarsAndStarsBackgroundDemo />
      ) : (
        <BackgroundGradientAnimationDemo />
      )}
      <div className="relative z-10">
        {/* navigation bar */}
        <nav className="w-full flex justify-end md:pt-11 pt-4">
          <button onClick={toggleDarkMode} className="text-2xl font-semibold">
            {darkMode ? "Night" : "Day"}
          </button>
        </nav>

        {/* hero section */}
        <Hero />

        <main className="w-full">
          <About />
          <Skills />
          <Projects />
        </main>
      </div>
    </div>
  );
};

export default App;
