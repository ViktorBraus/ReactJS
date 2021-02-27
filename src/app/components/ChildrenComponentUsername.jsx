var React = require('react');
var ChildrenComponentEmail = require('./ChildrenComponentEmail.jsx');
class ChildrenComponentUsername extends React.Component
  {
    render()
    {
      return (
      <div>
        <p>Ім'я: {this.props.username}</p>
        <ChildrenComponentEmail 
        email = {this.props.email}
        password = {this.props.password}
        birthday = {this.props.birthday}
        address = {this.props.address}
        bio = {this.props.bio}
        />
      </div>
      )
    }
  };
