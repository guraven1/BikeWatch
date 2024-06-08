import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import JerusalemMonth from "./pages/JerusalemMonth";
import TelAvivFullData from "./pages/TelAvivFullData";
import TelAvivMonth from "./pages/TelAvivMonth";

const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
            <Route path="/users" element={<JerusalemMonth />} />
            <Route path="/users" element={<TelAvivFullData />} />
            <Route path="/users" element={<TelAvivMonth />} />
        </Routes>
      </Router>
  );
};

export default App;