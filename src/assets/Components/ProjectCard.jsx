import { useState } from "react";

export default function ProjectCard({ project, index, parentVisible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`project-card ${parentVisible ? "reveal" : ""}`}
      style={{ "--delay": `${index * 0.12}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-header">
        <span className="project-num">{project.id}</span>
        <span className="project-year">{project.year}</span>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.desc}</p>
      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t} className="project-tag">
            {t}
          </span>
        ))}
      </div>
      <div
        className={`project-links ${hovered ? "project-links--visible" : ""}`}
      >
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          GitHub <span>↗</span>
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="project-link project-link--primary"
        >
          Live Demo <span>↗</span>
        </a>
      </div>
      <div className="project-line" />
    </div>
  );
}