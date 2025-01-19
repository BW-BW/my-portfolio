import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import './App.css';
import { HistoryTimeline } from './pages/history/history';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<HistoryTimeline />} />
      </Routes>
      {/* <footer>
        <p>© 2025 My Portfolio</p>
      </footer> */}
    </Router>
  );
};

export default App;
