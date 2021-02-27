import './App.css';
import React from 'react';
//var CoreComponent = require('./app/components/CoreComponent')
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
        <CoreComponent/>
      </header>
    </div>
  );
  class CoreComponent extends React.Component
  {
    constructor(props)
    {
     super(props);
     this.state = {
       email: "example@mail.com",
       password: "1111",
       username: "Viktor Braus",
       birthday: "10.08.1999",
       address: "Chernivtsi town",
       bio: "a 21 year old proggramer"
     }
    }
    render()
    {
      return (
      <ChildrenComponentUsername
      username = {this.state.username}
      email = {this.state.email}
      password = {this.state.password}
      birthday = {this.state.birthday}
      address = {this.state.address}
      bio = {this.state.bio}
      />
      )
    }
  };
  class ChildrenComponentUsername extends React.Component
  {
    render()
    {
      return <div>
        <p>Ім'я: {this.props.username}</p>
        <ChildrenComponentEmail 
        email = {this.props.email}
        password = {this.props.password}
        birthday = {this.props.birthday}
        address = {this.props.address}
        bio = {this.props.bio}
        />
      </div>
    }
  };
  class ChildrenComponentEmail extends React.Component
  {
    render()
    {
      return <div>
        <p>Email: {this.props.email}</p>
        <ChildrenComponentPassword 
        password={this.props.password}
        birthday={this.props.birthday}
        address={this.props.address}
        bio = {this.props.bio}
        />
      </div>
    }
  };
  class ChildrenComponentPassword extends React.Component
  {
    render()
    {
      return <div>
        <p>Пароль: {this.props.password}</p>
        <ChildrenComponentBirthday 
        birthday = {this.props.birthday}
        address = {this.props.address}
        bio = {this.props.bio}
        />
      </div>
    }
  };
  class ChildrenComponentBirthday extends React.Component
  {
    render()
    {
      return <div>
        <p>Дата Народження: {this.props.birthday}</p>
        <ChildrenComponentAddress 
        address = {this.props.address}
        bio = {this.props.bio}
        />
      </div>
    }
  };
  class ChildrenComponentAddress extends React.Component
  {
    render()
    {
      return <div>
        <p>Місто проживання: {this.props.address}</p>
        <ChildrenComponentBio 
        bio = {this.props.bio}
        />
      </div>
    }
  };
  class ChildrenComponentBio extends React.Component
  {
    render()
    {
      return <div>
        <p>Хто я?: {this.props.bio}</p>
      </div>
    }
  };
  const Input = ({class1, class2, class3, class4, class5, class6}) => 
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
const Button = ({ classn, title, name }) => 
(
  <div>
    <button className={classn} type={title}>{name}</button>
  </div>
);
export default App;
