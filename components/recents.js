import React from 'react';

class Recents extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const recentArr = [];
    if (this.props.recents) {
    this.props.recents.forEach(e => {
      recentArr.push (
        <li>{e}</li>
      )
    })
  }
    return (
      <div>
        <h2>Your Recent Searches</h2>
        <ul>{recentArr}</ul>
      </div>
    )
  }
}

export default Recents;