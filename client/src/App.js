import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import Signupcomplete from './components/Signupcomplete';
import Projects from './components/projects';
import Data from './components/Data';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Employee Time-Tracker</h1>
        </header>
        <main className='App-main'>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/data" element={<Data />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signupcomplete" element={<Signupcomplete />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;