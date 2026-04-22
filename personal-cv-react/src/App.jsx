import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ];
  
  const education = [
    {
      year: "2025 - Present",
      school: "USTP - CDO Campus",
      program: "Bachelor of Science in Information Technology"
    },
    {
      year: "2022 - 2024",
      school: "Holy Child High School",
      program: "Senior High School - GAS"
    },
    {
      year: "2018 - 2022",
      school: "Holy Child High School",
      program: "High School"
    },
    {
      year: "2012 - 2018",
      school: "Kinoguitan Central School",
      program: "Elementary School"
    },
    {
      year: "2010 - 2012",
      school: "Kinoguitan Kindergarten",
      program: "Kindergarten"
    }
  ];

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"} 
      </button>
      <main>
        <div className="container">
          <Header />
          <About />
          <Skills skills={skills} />
          <Education education={education} />
          <Contact />
          <ContactList />
        </div>
      </main>

      <footer>
        <p>
          &copy; 2026 Charie Mae R. De La Victoria. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;