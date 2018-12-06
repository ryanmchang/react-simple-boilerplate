import React, {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'


export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  sendToApply = () => {
    window.location = "https://docs.google.com/forms/d/e/1FAIpQLSds4W7RUL_GCpX33_Faztj2sQfBpIlOKAOCv3Nq8wPhJkfsIg/viewform";
  }

  render() {
    return (
      <ul id="navbar">
        <li className="navItemOuter"><img id="logo" src="https://image.flaticon.com/icons/svg/1227/1227606.svg"/></li>
        <li className="navItemOuter">
          <ul id="innerlist">
            <li className="navitem"> <AnchorLink className="navlink" href="#mission" offset="130">Mission</AnchorLink> </li>
            <li className="navitem"> <AnchorLink className="navlink" href="#sponsors" offset="130">Sponsors</AnchorLink> </li>
            <li className="navitem"> <AnchorLink className="navlink" href="#team" offset="130">Team</AnchorLink> </li>
            <li className="navitem"> <AnchorLink className="navlink" href="#contact" offset="130">Contact Us</AnchorLink> </li>
            <li className="navitem"> <button id="apply-button" onClick={this.sendToApply}>Apply</button> </li>
          </ul>
        </li>
      </ul>
    );
  }
}
