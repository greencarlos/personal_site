import React from 'react';
import './App.css';
import Personal from './components/personal';
import Para from './components/para';
import Links from './components/links';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Personal/>
      <Para/>
      <Links/>
      <Projects/>
      </header>
    </div>
  );
}

export default App;

