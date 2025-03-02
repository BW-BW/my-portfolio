import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header/header';
import './App.css';
import { HistoryTimeline } from './pages/history/history';
import Project from './pages/project/project';
import Contact from './pages/contact/contact';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/contact" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/history" element={<HistoryTimeline />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
