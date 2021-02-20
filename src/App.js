import logo from './logo.svg';
import './App.css';
const App = () => 
  (
    <div className="App">
      <header className="App-header">
        <Input 
        class1="input1"
        class2="input2"
        class3="input3"
        class4="input4"
        class5="input5"
        class6="input6"
        >
        </Input>
        <Button classn="Mybutton" title="Submit" name="Hello world!">
        </Button>
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
  const Input = ({class1, class2,class3,class4, class5,class6}) => 
  (
      <div>
        <input className={class1}></input>
        <input className={class2}></input>
        <p></p>
        <input className={class3}></input>
        <input className={class4}></input>
        <p></p>
        <input className={class5}></input>
        <input className={class6}></input>
        <p></p>
        <input className={class1}></input>
        <input className={class2}></input>
        <p></p>
        <input className={class3}></input>
        <input className={class4}></input>
      </div>
  );

const Button = ({ classn, title,name }) => 
(
  <div>
    <button className={classn} type={title}>{name}</button>
  </div>
);
export default App;
