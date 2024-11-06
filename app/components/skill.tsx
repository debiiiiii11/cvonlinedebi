import React from 'react';
import './Skills.css';

const skills = [
  'JavaScript',
  'React',
  'CSS',
  'HTML',
  'Node.js',
  'Python',
  'SQL',
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
