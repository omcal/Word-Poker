import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import teamImage from '../images/team-page.jpeg';
import '../Teams.css';

function TeamMember({ name, role, linkedIn }) {
  return (
    <div className="team-member">
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
        <h1>Our Word Flush Team</h1>
        <div className="team-hierarchy">
          <div className="team-members">
            <TeamMember
              name="Anıl Tekeli"
              role="Co-Founder and Full Stack Developer"
              linkedIn="https://www.linkedin.com/in/aniltekeli/"
            />
            <TeamMember
              name="Gökhan Demirkan"
              role="Co-founder and Game Designer"
            />
          </div>
          <div className="team-image">
            <img src={teamImage} alt="Word Flush Team" />
          </div>
          <div className="team-members">
            <TeamMember
              name="Ömer Işıldak"
              role="Founding Backend Developer"
              linkedIn="https://www.linkedin.com/in/omerisildak/"
            />
            <TeamMember
              name="M. Ertuğrul Erdem"
              role="Music and Art"
            />
          </div>
        </div>
      </div>
    );
  }

  export default Team;
