import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  console.log('I am called');
  const [dynamicCounter, setdynamicCounter] = useState(0);
  const increaseHandler = () => {
    setdynamicCounter(dynamicCounter + 1);
  }
  const decreaseHandler = () => {
    setdynamicCounter(dynamicCounter - 1);
  }
  return (
    <div className="App">
      <p>The value of the counter is {dynamicCounter}</p>
      <button onClick={increaseHandler}>Increase by 1</button>
      <button onClick={decreaseHandler}>Decrease by 1</button>
    </div>
  );
}

export default App;
