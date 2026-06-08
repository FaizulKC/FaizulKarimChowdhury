export default function Contact({ useIntersection }) {
  const [ref, visible] = useIntersection();
  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className={`section-label ${visible ? "reveal" : ""}`}>
        / Contact
      </div>
      <div className={`contact-content ${visible ? "reveal" : ""}`}>
        <h2 className="contact-heading">
          Let's Build
          <br />
          Something.
        </h2>
        <p className="contact-sub">
          Open to collaborations, feedback, and opportunities.
        </p>
        <a
          className="contact-email"
          href="mailto:faizulkarimchowdhury@gmail.com"
        >
          faizulkarimchowdhury@gmail.com
          <span className="email-arrow">→</span>
        </a>
        <div className="contact-links">
          <a
            href="https://github.com/FaizulKC"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <span className="social-sep">·</span>
          <a
            href="https://linkedin.com/in/fkchowdhury"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
