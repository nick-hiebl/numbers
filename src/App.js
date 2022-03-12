import React, { useState } from 'react';

import './App.css';

const TOTAL = 6;

function randint(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function numbers(big = 2) {
  return new Array(big).fill(0).map(() => randint(1, 4) * 25).concat(new Array(TOTAL - big).fill(0).map(() => randint(1, 10)));
}

function App() {
  const [nums, setNums] = useState(numbers(1));
  const [target, setTarget] = useState(randint(100, 999));

  function reset(n) {
    setNums(numbers(n));
    setTarget(randint(100, 999));
  }

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={() => reset(1)}>1 big, 5 small</button>
        <button onClick={() => reset(2)}>2 big, 4 small</button>
        <button onClick={() => reset(3)}>3 big, 3 small</button>
        <button onClick={() => reset(4)}>4 big, 2 small</button>
        <button onClick={() => reset(5)}>5 big, 1 small</button>
      </div>
      <header className="App-header">
        <div className="row">
          <span className="num-card card-wide">{target}</span>
        </div>
        <div className="row">
          {nums.map(num => (
            <span className="num-card">{num}</span>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
