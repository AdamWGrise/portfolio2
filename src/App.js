import React from 'react';
import LeftBar from './components/LeftBar';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1 className="title">My name's Adam Grise.</h1>
        <h3 className="title">(That rhymes with 'nice.')</h3>
        <h2 className="title">And I love to make websites.</h2>
        <LeftBar />
    </div>
  );
}

export default App;
