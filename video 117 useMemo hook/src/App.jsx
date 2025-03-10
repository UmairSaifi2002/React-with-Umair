import { useState, useMemo } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Initial array with 10,000,000 elements
const nums = new Array(20_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 19_000_000, // Corrected the condition
  };
});

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);

  // const magical = numbers.find(item => item.isMagical === true) // Expensive Computation
  // Memoized magical number calculation
  const magical = useMemo(() => numbers.find(i => i.isMagical === true), [numbers]);

  const handleClick = () => {
    setCount((count) => count + 1);
    // Update numbers array when count reaches 10
    if (count + 1 === 10) {
      setNumbers(
        new Array(1_000).fill(0).map((_, i) => {
          return {
            index: i,
            isMagical: i === 500, // New magical number condition
          };
        })
      );
    }
  };

  return (
    <>
      <div>Magical number is {magical ? magical.index : 'Not found'}</div>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}
        //   () => {
        //     setCount((count) => count + 1);

        //     // Update numbers array when count reaches 10
        //     if (count + 1 === 10) {
        //       setNumbers(
        //         new Array(1_000).fill(0).map((_, i) => {
        //           return {
        //             index: i,
        //             isMagical: i === 500, // New magical number condition
        //           };
        //         })
        //       );
        //     }
        //   }
        // }
        >count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;