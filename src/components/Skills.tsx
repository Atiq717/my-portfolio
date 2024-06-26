import React from 'react';
import './css/Skills.css';
import jqueryIcon from '../../public/image/jqueryicon.png';

const skills = [
  { name: 'HTML', icon: 'fab fa-html5', color: '#E34F26' },
  { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572B6' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952B3' },
  { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
  { name: 'jQuery', icon: 'img', imgSrc: jqueryIcon },
  { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
  { name: 'Redux', icon: 'fab fa-react', color: '#764ABC' },
  { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
  { name: 'PHP', icon: 'fab fa-php', color: '#777BB4' },
  { name: 'TypeScript', icon: 'fab fa-js', color: '#3178C6' },
  { name: 'API', icon: 'fas fa-cogs', color: '#E34F26' },
  { name: 'Node', icon: 'fab fa-node', color: '#339933' },
  { name: 'Express', icon: 'fas fa-server', color: '#000000' },
  { name: 'Auth', icon: 'fas fa-user-shield', color: '#0077B5' },
  { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' },
  { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
  { name: 'GitHub', icon: 'fab fa-github', color: '#181717' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section container-fluid">
      <h2 className="skills-title"><span>My</span> Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {skill.icon === 'img' ? (
              <img src={skill.imgSrc} alt={skill.name} />
            ) : (
              <i className={skill.icon} style={{ color: skill.color }}></i>
            )}
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
