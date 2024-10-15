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
      <h1>Our Word Royal Flush Team</h1>
      <p className="team-intro">Meet the aces behind Word Poker!</p>
      <div className="team-hierarchy">
        <div className="founders">
          <TeamMember
            name="Anıl"
            role="Co-Founder and Full Stack Developer"
            image="https://via.placeholder.com/150"
            linkedIn="https://www.linkedin.com/in/anil-profile/"
          />
          <TeamMember
            name="Gökhan"
            role="Co-founder and Game Designer"
            image="https://via.placeholder.com/150"
            linkedIn="https://www.linkedin.com/in/gokhan-profile/"
          />
        </div>
        <div className="engineering">
          <TeamMember
            name="Ömer"
            role="Full Stack Developer"
            image="https://via.placeholder.com/150"
            linkedIn="https://www.linkedin.com/in/omer-profile/"
          />
        </div>
        <div className="engineering">
          <TeamMember
            name="Ertuğrul"
            role="Music and Art"
            image="https://via.placeholder.com/150"
            linkedIn="https://www.linkedin.com/in/Ertugrul-profile/"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;