import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {

  const [showCounter, setShowCounter] = useState(false)

  const handleShow = () => {
    setShowCounter(prev => !prev)
  }

  return (
    <div className="App">
      <h1>Guille's Counter</h1>
      <button onClick={handleShow}>{showCounter ? 'Hide Counter' : 'Show Counter'}</button> 
      {showCounter && <Counter />}
    </div>
  );
}

export default App;
