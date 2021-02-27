var React = require('react');
var ChildrenComponentBirthday = require('./ChildrenComponentBirthday.jsx');

class ChildrenComponentPassword extends React.Component
  {
    render()
    {
      return (
        <div>
        <p>Пароль: {this.props.password}</p>
        <ChildrenComponentBirthday 
        birthday = {this.props.birthday}
        address = {this.props.address}
        bio = {this.props.bio}
        />
      </div>
      )  
    }
  };