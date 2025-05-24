import React, { forwardRef, useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from './ProjectData';
import './style.css';
import { images } from './ImageData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const upIcon = <FontAwesomeIcon icon={faChevronUp} />;

const SkeletonLoader = () => (
  <div
    className="skeleton-loader"
    style={{
      width: '150px',
      height: '100px',
      backgroundColor: '#e0e0e0',
      borderRadius: '8px',
      margin: '5px',
    }}
  />
);

const Projects = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  const closeLightbox = () => setSelectedImageIndex(null);

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const handleKeyDown = (event) => {
    if (selectedImageIndex !== null) {
      if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'Escape') {
        closeLightbox();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex]);

  const handleImageLoad = () => {
    setLoadedImages((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (loadedImages === images.length) {
      setLoading(false);
    }
  }, [loadedImages]);

  const handleScrollToUp = () => {
    window.history.replaceState(null, '', '/projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page__container">
      <h1>Moje projekty</h1>
      <p className="project__intro">
        Jako junior UX/UI designérka si postupně tvořím své portfolio – zahrnuje
        jak reálné, tak konceptuální projekty, které mi pomáhají rozvíjet
        dovednosti a osobní styl. Níže najdete několik mých posledních prací.
        Kromě nich dokážu vytvořit i jednoduché responzivní webové stránky,
        například toto portfolio, které jsem sama navrhla a vytvořila v Reactu.
        Další projekty brzy přibudou! 🙌
      </p>

      <div className="project__cards">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <h2>Ukázky grafické práce</h2>
      <div className="image-gallery">
        {loading && (
          <>
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
          </>
        )}
        {images.map((image, index) => (
          <div
            className="image-thumbnail"
            key={index}
            onClick={() => setSelectedImageIndex(index)}
          >
            <img src={image.src} alt={image.alt} onLoad={handleImageLoad} />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img
              src={images[selectedImageIndex].src}
              alt={`Selected ${selectedImageIndex + 1}`}
            />
            <p className="image-caption">{images[selectedImageIndex].alt}</p>{' '}
            {/* Popis obrázku */}
          </div>
          <div className="nav-buttons-container">
            <button
              className="nav-button prev"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              &#10094;
            </button>
            <button
              className="nav-button next"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
      <a className="up__btn" onClick={handleScrollToUp}>
        <i>{upIcon}</i>
      </a>
      <p className="up__text">Zpět nahoru</p>
    </div>
  );
};

export default Projects;
