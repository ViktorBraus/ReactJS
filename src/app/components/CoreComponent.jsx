var React = require('react');
var ChildrenComponentUsername = require('./ChildrenComponentUsername.jsx');

class CoreComponent extends React.Component
  {
    constructor(props)
    {
     super(props);
     this.state = 
     {
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
      return (<p></p>)
    }
  };
