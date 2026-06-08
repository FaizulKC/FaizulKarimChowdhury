export default function About({ useIntersection }) {
  const [ref, visible] = useIntersection();
  return (
    <section className="about section" id="about" ref={ref}>
      <div className={`section-label ${visible ? "reveal" : ""}`}>/ About</div>
      <div className={`about-grid ${visible ? "reveal" : ""}`}>
        <div className="about-left">
          <h2 className={`section-heading ${visible ? "reveal" : ""}`}>
            Who I<br />
            Am.
          </h2>
        </div>
        <div className="about-right">
          <p className="about-text">
            I'm a Computer Science undergraduate at{" "}
            <strong>International Islamic University Chittagong</strong>,
            specializing in web development and software engineering. My journey
            started with systems programming in C and C++, and evolved into
            building interactive UIs with React.
          </p>
          <p className="about-text">
            Currently deep into the <strong>MERN stack</strong>, I obsess over
            clean code, meaningful UI interactions, and shipping real products —
            not just tutorials. Every project I build is a deliberate step
            toward mastering the full web development stack.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-num stat-infinit">5+</span>
              <span className="stat-label">Technologies Mastered</span>
            </div>
            <div className="stat">
              <span className="stat-num">24/7 </span>
              <span className="stat-label"> Always Learning</span>
            </div>
            <div className="stat">
              <span className="stat-num">MERN</span>
              <span className="stat-label">Stack Focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
