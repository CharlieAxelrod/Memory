import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleFlip(this.props);
  }

  render() {
    return <img onClick={this.handleClick} width="100.2" height="145.6" src={this.props.flipped 
      ? `assets/cards/${this.props.id}.svg`
      : "assets/cards/back.svg"} />
  }
}

export default Card;