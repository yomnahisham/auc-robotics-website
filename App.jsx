// src/App.jsx

import React from 'react';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo src="/robotics.img" alt="React Logo" width="36" height="32" />
        <Logo src="/roboticsfulllogo.img" alt="Vue Logo" width="100" height="100" />
      </header>
    </div>
  );
}

export default App;