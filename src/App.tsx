import React, { useContext } from 'react';
import { CountContext } from './context/provider';

function App() {
  const { count, increaseCount, decreaseCount } = useContext(CountContext);
  return (
    <div>
      {count}
      <div>
        <button onClick={() => increaseCount()}>+1</button>
        <button onClick={() => decreaseCount()}>-1</button>
      </div>
    </div>
  );
}

export default App;
