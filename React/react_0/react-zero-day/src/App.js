import logo from './logo.svg';
import './App.css';

function App() {
  console.log('I am called');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

/* A component must fullfil 3 criteria:
1) A component must be a function
2) That function should return "something"
3) That "something" should be some html-ish code (JSX)
 */

export default App;
