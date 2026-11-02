import { Link } from "react-router-dom";
import { config } from "../config";
import "./MyWorks.css";

const MyWorks = () => {
  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of all my projects and creations</p>
      </div>

      <div className="myworks-grid">
        {config.projects.map((project, index) => {
          const cardContent = (
            <>
              <div className="myworks-card-number">0{index + 1}</div>
              <div className="myworks-card-image">
                <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
              </div>
              <div className="myworks-card-info">
                <h3>{project.title}</h3>
                <p className="myworks-card-category">{project.category}</p>
                <p className="myworks-card-description">{project.description}</p>
                <p className="myworks-card-tech">{project.technologies}</p>
              </div>
            </>
          );
          const projectLinks =
            project.links.length > 0
              ? project.links
              : project.link
                ? [{ label: "View Project", url: project.link }]
                : [];

          return (
            <article className="myworks-card" key={project.id}>
              {project.link?.startsWith("/") ? (
                <Link
                  className="myworks-card-main"
                  data-cursor="disable"
                  to={project.link}
                >
                  {cardContent}
                </Link>
              ) : project.link ? (
                <a
                  className="myworks-card-main"
                  data-cursor="disable"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cardContent}
                </a>
              ) : (
                <div className="myworks-card-main">{cardContent}</div>
              )}
              {projectLinks.length > 0 && (
                <div className="myworks-card-links">
                  {projectLinks.map((projectLink) => (
                    <a
                      key={projectLink.url}
                      href={projectLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="disable"
                    >
                      {projectLink.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorks;
