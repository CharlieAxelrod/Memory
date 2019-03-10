import React, { Component } from 'react';
import Card from './Card.jsx';
import suitMap from '../data/suitMap.js';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: []
    }
  }

  handleFlip(clicked) {
    if (!clicked) {
      return;
    } else if (this.state.flipped.some(i => i.id === clicked.id)) {
      return;
    } else if (this.state.flipped.length === 1) {
      this.checkMatch(clicked);
    } else {
      this.setState({flipped: [this.state.flipped[0], clicked]});
    }
  }

  checkMatch(card) {
    if (this.state.flipped[0].value === card.value && suitMap[this.state.flipped[0].suit] === card.suit) {
      this.setState({flipped: [this.state.flipped[0], card]}, () => {
        setTimeout(() => {console.log('pair')}, 1000);
      });
    } else {
      this.setState({flipped: [this.state.flipped[0], card]}, () => {
        setTimeout(() => {this.setState({flipped: []})}, 1000);
      });
    }
  }

  render() {
    return (
      <div>
      {this.props.cards.map((card, index) => 
      card === null 
        ? <div minHeight="100.2" minWidth="145.6"></div>
        : < Card key={card.id} id={card.id} location={index} suit={card.suit} value={card.value} 
        flipped={this.state.flipped.some(i => i.id === card.id) ? true : false} handleFlip={this.handleFlip.bind(this)} />)}
      </div>
    )
  }
}

export default Board;