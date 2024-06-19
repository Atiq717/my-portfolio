import React, { useState } from 'react';
import './css/Projects.css';
import { useSwipeable } from 'react-swipeable';

const projectImages = [
  { link: 'https://atiq717.github.io/village-lodge', preview: '../public/images/project1.png' },
  { link: 'https://jamming-spotify-api.surge.sh', preview: '/images/project2.png' },
  { link: 'https://mohammedkhan.me/mohammedkhan/task', preview: '/images/project3.png' },
  { link: 'https://mohammedkhan.me/mohammedkhan/project1', preview: '/images/project4.png' },
  { link: 'https://mohammedkhan.me/mohammedkhan/project2', preview: '/images/project5.png' },
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (delta: number) => {
    let newIndex = currentIndex + delta;
    if (newIndex < 0) newIndex = projectImages.length - 1;
    else if (newIndex >= projectImages.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(1),
    onSwipedRight: () => handleSwipe(-1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title"><span>My</span> Projects</h2>
      <div className="carousel" {...handlers}>
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {projectImages.map((project, index) => (
            <div className="carousel-item" key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-preview">
                <img src={project.preview} alt={`Project ${index + 1}`} />
                <img src={project.preview} alt={`Preview ${index + 1}`} className="preview" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <div className="carousel-control" onClick={() => handleSwipe(-1)}>
          Previous
        </div>
        <div className="carousel-control" onClick={() => handleSwipe(1)}>
          Next
        </div>
      </div>
    </section>
  );
};

export default Projects;
