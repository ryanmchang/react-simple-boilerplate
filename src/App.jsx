import React, {Component} from 'react';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import TeamMemberBox from './components/TeamMemberBox/TeamMemberBox.jsx'

class App extends Component {

  /*
  id - id of element that you want to move
  magnitude - higher number will slow down element movement
  direction - X or Y
  */
  parallax = (id,magnitude,direction) => {
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
    var movingObj = document.getElementById(id);
    var val  = scrollY;
    movingObj.style.transform = "rotate(" + val % 360 + "deg)";
  }

  componentDidMount() {
    //save reference to this(at top level), so we can use it to call class methods
    var self = this;
    window.onscroll = function() {
      self.parallax("title", 2, "Y");
      self.parallax("subtext", 1.8, "Y");
      self.changeNav();
      self.rotate("logo");
    }
  }

  render() {
    return (
      <div id="toplevel-container">
        <Navbar/>
        <Header/>
        <div id="container">

          <div className="section" id="mission">
            <h1 className="mainh">Mission</h1>
            <p className="mainp">The two main focuses for our team are competition and outreach.</p>
            <p className="mainp">In order to compete in the 2019 International RoboSub Competition in our native San Diego, our team will build an autonomous underwater vehicle (AUV) to complete various challenges. This made possible through our mulit-disciplinary team and the support of industry sponsors. </p>
            <p className="mainp">With the experience and knowledge gained through this project, our second focus is supporting local high school robotics teams in building their own AUVs. This will involve collaboration and testing with between the teams, sharing technology and ideas.</p>
          </div>

          <div className="section" id="sponsors">
            <h1 className="mainh">Sponsors</h1>
            <img id="ucsdImg" src="https://upload.wikimedia.org/wikipedia/commons/f/f6/UCSD_logo.png"/>
          </div>

          <div className="section" id="team">
            <h1 className="mainh">Our Team</h1>
            <div className="team-row">
              <TeamMemberBox
                img="https://media.licdn.com/dms/image/C4E03AQG-2tuRQ1XGqw/profile-displayphoto-shrink_800_800/0?e=1549497600&v=beta&t=5yCZZiHaruPCfwCdjCp78tx6p-v0EtHIrD9ZEANQOl8"
                name="Jack Silberman"
                title="Academic Advisor"
                description="A Mechanical and Aerospace Engineering & Electrical and Computer Engineering Lecturer at UCSD, he is an advisor and lead for many robotic teams and projects."
                link="https://www.linkedin.com/in/jacksilberman"
              />
              <TeamMemberBox
                img="https://media.licdn.com/dms/image/C5603AQH_QrD0zsZInA/profile-displayphoto-shrink_800_800/0?e=1549497600&v=beta&t=Zpp6uJnUs107gY94luUZXp6seJ3y0wNxWNLztShpLdA"
                name="Phillip Vally"
                title="Aerospace Engineering ‘21"
                description="A current member of the thermal team at TritonCubed, a student run club whose goal is to launch a cubesat into lunar orbit.  He has an interest in space travel and satellite technology. He is into basketball, fitness, and enjoys chilling at the beach with his friends."
                link="https://www.linkedin.com/in/phillipvally/"
              />
            </div>
            <div className="team-row">
              <TeamMemberBox
                img="https://media.licdn.com/dms/image/C5603AQEIULd0zOD4XQ/profile-displayphoto-shrink_800_800/0?e=1549497600&v=beta&t=Po1ABwfkXSDdT2a6Up32L86_MJDmnv77skrGLmNgDkc"
                name="Armon Naddaf"
                title="Chemical Engineering ‘19"
                description="A transfer student who sees robosub as an opportunity to get involved with a genuinely interesting project. He views it as a good way to make friends and gain some experience."
                link="https://www.linkedin.com/in/armon-naddaf"
              />
              <TeamMemberBox
                img="https://media.licdn.com/dms/image/C5603AQHdumtbjadxLA/profile-displayphoto-shrink_800_800/0?e=1549497600&v=beta&t=2hfxKu3kgsw_zR7kFaGxAr3vCygoUx8e5SKI5MNRv-Y"
                name="Ezequiel Ansaldi"
                title="Chemical Engineering '20"
                description="A member of both Triton Robosub and Phosphorous Water Treatment project groups, he is interested in applying his knowledge to the real world. He hopes to gain experience while leveraging his strengths to help the team succeed."
                link="https://www.linkedin.com/in/ezequiel-ansaldi/"
              />
            </div>
          </div>

          <div className="section" id="contact">
            <h1 className="mainh">Contact us</h1>
            <p className="mainp">If you have a question, you can reach us at:</p>
            <p className="mainp" id="robo-email">robosub@ucsd.edu</p>
          </div>

        </div>
      </div>
    );
  }
}
export default App;
