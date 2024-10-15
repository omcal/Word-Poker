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
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Word Poker Introduction"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h2>Contact Us</h2>
      <p>Email: info@wordpoker.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>Address: 123 Game Street, Word City, WP 12345</p>
    </div>
  );
}

export default Home;