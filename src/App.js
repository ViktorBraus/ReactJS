import logo from './logo.svg';
import './App.css';
const title = "Submit"
const input1 = ({ title }) => 
(
  <div>
  </div>
);
const Button = ({ title }) => 
(
    <p>Hello World</p>
);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input className="input1"></input>
        <input className="input2"></input>
        <input className="input3"></input>
        <input className="input4"></input>
        <input className="input5"></input>
        <input className="input6"></input>
        <input className="input7"></input>
        <input className="input8"></input>
        <input className="input9"></input>
        <input className="input10"></input>
        <button 
        className = "Mybutton"
        type="submit"
        const = "Button"
        >
        </button>
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

export default App;
