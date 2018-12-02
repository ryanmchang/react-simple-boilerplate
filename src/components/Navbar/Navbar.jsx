import React, {Component} from 'react';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

//window scroll to method can be used for link pressing


  componentDidMount() {
  }

  render() {
    return (
      <ul id="navbar">
        <li><img id="logo" src="https://image.flaticon.com/icons/svg/1227/1227606.svg"/></li>
        <li className="navitem"> <a className="navlink" href="#about">Home</a> </li>
        <li className="navitem"> <a className="navlink" href="#">FAQ</a> </li>
        <li className="navitem"> <a className="navlink" href="#">Team</a> </li>
        <li className="navitem"> <a className="navlink" href="#">Contact</a> </li>
      </ul>
    );
  }
}
