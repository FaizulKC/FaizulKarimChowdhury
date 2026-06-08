import ProjectCard from "./ProjectCard";

export default function Projects({ useIntersection, PROJECTS }) {
  const [ref, visible] = useIntersection();
  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className={`section-label ${visible ? "reveal" : ""}`}>
        / Projects
      </div>
      <h2 className={`section-heading ${visible ? "reveal" : ""}`}>
        Selected
        <br />
        Work.
      </h2>
      <div className="projects-list">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.id}
            project={p}
            index={i}
            parentVisible={visible}
          />
        ))}
      </div>
    </section>
  );
}
