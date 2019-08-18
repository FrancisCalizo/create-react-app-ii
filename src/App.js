import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Search from './components/user/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Search />
      </div>
    </div>
  );
}

export default App;
