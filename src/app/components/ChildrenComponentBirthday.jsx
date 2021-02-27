var React = require('react');
var ChildrenComponentAddress = require('./ChildrenComponentAddress.jsx');
class ChildrenComponentBirthday extends React.Component
{
  render()
  {
    return ( 
    <div>
      <p>Дата Народження: {this.props.birthday}</p>
      <ChildrenComponentAddress 
      address = {this.props.address}
      bio = {this.props.bio}
      />
    </div>
    )
  }
};