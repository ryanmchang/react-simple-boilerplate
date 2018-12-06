import React, {Component} from 'react';

export default class TeamMemberBox extends Component {
  constructor(props) {
    super(props);
  }

//window scroll to method can be used for link pressing


  componentDidMount() {
  }

  render() {
    return (
      <div className="teamBox">
        <img className="memberPic" src={this.props.img}></img>

        <div className="textBox">
          <h1 className="memberH">{this.props.name}</h1>
          <p className="memberText">{this.props.title}</p>
          <p className="memberText">{this.props.description}</p>
          <p className="memberText">{this.props.link}</p>
        </div>

      </div>
    );
  }
}
