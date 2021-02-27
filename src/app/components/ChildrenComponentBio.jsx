var React = require('react');
var ChildrenComponentAddress = require('./ChildrenComponentAddress.jsx');

class ChildrenComponentBio extends React.Component
{
  render()
  {
    return (
    <div>
      <p>Хто я?: {this.props.bio}</p>
    </div>
    )  
  }
};