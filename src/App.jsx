import React, {Component} from 'react';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

class App extends Component {

  /*
  id - id of element that you want to move
  magnitude - higher number will slow down element movement
  direction - X or Y
  */
  parallax = ( id,magnitude,direction) => {
    var movingObj = document.getElementById(id);
    var val  = scrollY;
    movingObj.style.transform = "translate" + direction + "(" + val / magnitude + "px)";
  };

  /*
  Changes color of navbar when not at the top of the page
  */
  changeNav = () => {
    var nav = document.getElementById("navbar");
    var text = document.getElementsByClassName("navlink");
    //if not at the top of the page
    if (scrollY) {
      navbar.style.backgroundColor = "black";
      for (var i = 0; i < text.length; i++) {
        text[i].style.color = "white"
      }
    }
    else {
      navbar.style.backgroundColor = "white";
      for (var i = 0; i < text.length; i++) {
        text[i].style.color = "black"
      }
    }
  }

  rotate = (id) => {
    console.log("Inside");
    var movingObj = document.getElementById(id);
    var val  = scrollY;
    movingObj.style.transform = "rotate(" + val % 360 + "deg)";
  }

  componentDidMount() {
    //save reference to this(at top level), so we can use it to call class methods
    var self = this;
    window.onscroll = function() {
      self.parallax("title", 2, "Y");
      self.changeNav();
      self.rotate("logo");
    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <div id="container">
          <span id="about">
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.</h1>
          </span>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.</h1>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.</h1>
        </div>
      </div>
    );
  }
}
export default App;
