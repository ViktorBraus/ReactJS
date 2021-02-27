var React = require('react');
var ChildrenComponentPassword = require('./ChildrenComponentPassword.jsx');
class ChildrenComponentEmail extends React.Component
  {
    render()
    {
      return (
      <div>
        <p>Email: {this.props.email}</p>
        <ChildrenComponentPassword 
        password={this.props.password}
        birthday={this.props.birthday}
        address={this.props.address}
        bio = {this.props.bio}
        />
      </div>
      )
    }
  };