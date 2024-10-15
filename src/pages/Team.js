import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function TeamMember({ name, role, image, linkedIn }) {
  return (
    <div className="team-member">
      <img src={image} alt={name} className="team-member-image" />
      <h2>{name}</h2>
      <p>{role}</p>
      <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="linkedin-link">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
}

function Team() {
  return (
    <div className="team">
      <h1>Our Word  Flush Team</h1>
      <p className="team-intro">Meet the Aces behind Word Poker!</p>
      <div className="team-hierarchy">
        <div className="founders">
          <TeamMember
            name="Anıl Tekeli"
            role="Co-Founder and Full Stack Developer"
            image="https://via.placeholder.com/150"
            linkedIn="https://www.linkedin.com/in/aniltekeli/"
          />
          <TeamMember
            name="Gökhan Demirkan"
            role="Co-founder and Game Designer"
            image="https://via.placeholder.com/150"
          />
        </div>
        <div className="engineering">
          <TeamMember
            name="Ömer Işıldak"
            role="Full Stack Developer"
            image="https://via.placeholder.com/150"
            linkedIn="https://www.linkedin.com/in/omerisildak/"
          />
        </div>
        <div className="engineering">
          <TeamMember
            name="M. Ertuğrul Erdem"
            role="Music and Art"
            image="https://via.placeholder.com/150"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;