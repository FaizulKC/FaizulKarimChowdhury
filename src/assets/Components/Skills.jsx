export default function Skills({ useIntersection, SKILLS }) {
  const [ref, visible] = useIntersection();
  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className={`section-label ${visible ? "reveal" : ""}`}>/ Skills</div>
      <h2 className={`section-heading centered ${visible ? "reveal" : ""}`}>
        Tech Stack.
      </h2>
      <div className={`skills-grid ${visible ? "reveal" : ""}`}>
        {Object.entries(SKILLS).map(([cat, items], i) => (
          <div
            className="skill-category"
            key={cat}
            style={{ "--delay": `${i * 0.08}s` }}
          >
            <div className="skill-cat-label">{cat}</div>
            <div className="skill-tags">
              {items.map((s) => (
                <span className="skill-tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
