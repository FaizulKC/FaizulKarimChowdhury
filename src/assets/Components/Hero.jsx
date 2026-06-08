import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <section className="hero" id="home">
      <div className={`hero-content ${show ? "hero-content--visible" : ""}`}>
        <div className="hero-eyebrow">
          <span className="eyebrow-line" />
          <span>CS Undergrad · MERN Developer</span>
        </div>
        <h1 className="hero-name">
          <span className="name-line name-line--1">Faizul</span>
          <span className="name-line name-line--2">Karim</span>
          <span className="name-line name-line--3">Chowdhury</span>
        </h1>
        <p className="hero-tagline">
          Frontend-focused. Full-stack curious.
          <br />
           Always building.
        </p>
        <div className="hero-cta">
          <button
            className="btn btn--primary"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View Work <span className="btn-arrow">↓</span>
          </button>
          <a
            className="btn btn--ghost"
            href="mailto:faizulkarimchowdhury@gmail.com"
          >
            Get in touch
          </a>
        </div>
      </div>
      {/* <div className={`hero-number ${show ? "hero-number--visible" : ""}`}>
        <span>2021</span>
      </div> */}
      <div className="hero-scroll-hint">
        <span>scroll</span>
        <span className="scroll-bar" />
      </div>
    </section>
  );
}
