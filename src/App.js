import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import JobApplication from './pages/JobApplication';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/job-application">Job Application</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/job-application" element={<JobApplication />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;