import { useState, useEffect, useRef } from "react";
import Cursor from "./assets/Components/Cursor";
import Navbar from "./assets/Components/Navbar";
import Hero from "./assets/Components/Hero";
import About from "./assets/Components/About";
import Skills from "./assets/Components/Skills";
import Projects from "./assets/Components/Projects";
import Contact from "./assets/Components/Contact";
import Footer from "./assets/Components/Footer";
import "./App.css";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

const SKILLS = {
  Languages: ["C", "C++", "JavaScript"],
  Frontend: ["HTML", "CSS", "TailwindCSS", "React"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "VS Code"],
};

const PROJECTS = [
  {
    id: "01",
    title: "usePopcorn",
    year: "2026",
    tech: ["React", "CSS", "OMDb API"],
    desc: "Movie discovery and watchlist app integrated with the OMDb API. Search movies, track watched content, and store personal ratings.",
    github: "https://github.com/FaizulKC/usePopcorn",
    live: "https://use-popcorn-faizulkc.vercel.app",
  },
  {
    id: "02",
    title: "Travel Companion",
    year: "2026",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    desc: "React-based travel packing app enabling users to manage trip items through sorting, filtering, and completion tracking.",
    github: "https://github.com/FaizulKC/travel-companion-project",
    live: "https://travel-companion-faizulkc.vercel.app",
  },
  {
    id: "03",
    title: "Simon Says Game",
    year: "2024",
    tech: ["React", "CSS", "JavaScript"],
    desc: "Browser-based memory game featuring dynamic sequence generation, score tracking, and polished user interaction.",
    github: "https://github.com/FaizulKC/Simon-Says-Game",
    live: "https://faizulkc.github.io/Simon-Says-Game",
  },
];

function useIntersection(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { threshold: 0.4 },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const section = window.location.pathname.replace("/", "");
    if (section) {
      setTimeout(() => {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div className="app">
      <Cursor />
      <Navbar active={active} NAV_LINKS={NAV_LINKS} />
      <main>
        <Hero />
        <About useIntersection={useIntersection} />
        <Skills useIntersection={useIntersection} SKILLS={SKILLS} />
        <Projects useIntersection={useIntersection} PROJECTS={PROJECTS} />
        <Contact useIntersection={useIntersection} />
      </main>
      <Footer />
    </div>
  );
}
