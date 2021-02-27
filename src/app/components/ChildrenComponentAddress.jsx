var React = require('react');
var ChildrenComponentBio = require('./ChildrenComponentBio.jsx');

class ChildrenComponentAddress extends React.Component
  {
    render()
    {
      return (
      <div>
        <p>Місто проживання: {this.props.address}</p>
        <ChildrenComponentBio 
        bio = {this.props.bio}
        />
      </div>
      )
    }
  };