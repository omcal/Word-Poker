import React from 'react';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Word Poker</h1>
      <p>Word Poker is an exciting new game that combines the strategy of poker with the challenge of word games.</p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3v3Jx9BeQJg?si=H_m4I0NM_yqHIw6L    "
          title="Word Poker Introduction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h2>Contact Us</h2>
      <p>Email: anil.tekeli@fakeheavengames.com</p>
    </div>
  );
}

export default Home;