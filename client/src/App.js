import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Employee Time-Tracker</h1>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;