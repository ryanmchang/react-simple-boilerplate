import React, {Component} from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="background">
        <h1 id="title">Triton RoboSub</h1>
        <p id="subtext">A Triton Robotics Team</p>
      </div>
    );
  }
}
