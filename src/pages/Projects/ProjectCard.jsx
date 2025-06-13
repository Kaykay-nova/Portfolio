import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const gitHubIcon = <FontAwesomeIcon icon={faGithub} />;
const chevronIcon = <FontAwesomeIcon icon={faChevronRight} />;

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <div className="project__card">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="project__cover"
      />
      <h3 className="project__title">{project.title}</h3>
      <p className="project__description">{project.description}</p>
      <div className="project__links">
        <a
          className="project__link"
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            Kód <i className="gitHubIcon">{gitHubIcon}</i>
          </button>
        </a>
        {project.caseStudyLink && (
          <a
            className="project__link"
            href={project.caseStudyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              Case Study <i className="gitHubIcon">{chevronIcon}</i>
            </button>
          </a>
        )}
        <a
          className="project__link"
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            Projekt <i className="gitHubIcon">{chevronIcon}</i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
