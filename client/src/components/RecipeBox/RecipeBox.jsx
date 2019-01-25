import React, {Component} from 'react';

export default class RecipeBox extends Component {
  constructor(props) {
    super(props);
  }

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
