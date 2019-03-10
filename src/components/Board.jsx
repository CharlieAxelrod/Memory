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
    if (!clicked.value) {
      return;
    } else if (!this.state.flipped.length) {
      this.setState({flipped: [clicked]});
    } else if (this.state.flipped.some(i => i.id === clicked.id)) {
      return;
    } else if (this.state.flipped.length === 1) {
      this.checkMatch(clicked);
    }
  }

  checkMatch(card) {
    this.setState({flipped: [this.state.flipped[0], card]}, () => {
      let [a, b] = this.state.flipped;
      console.log(a, b);
      if (a.value === b.value && suitMap[a.suit] === b.suit) {
        console.log('pair');
        setTimeout(() => {
          this.setState({ flipped: [] }, () => this.props.removeCards([a, b]))
        }, 1000);
      } else {
        setTimeout(() => this.setState({ flipped: [] }), 1000);
      }
    });
  }

  render() {
    return (
      <div className="card-grid">
      {this.props.cards.map((card, index) => 
      card.value
        ? < Card key={card.id} id={card.id} location={index} suit={card.suit} value={card.value} 
          flipped={this.state.flipped.some(i => i.id === card.id) ? true : false} handleFlip={this.handleFlip.bind(this)} />
      : <div key={card.id}></div>)}
      </div>
    )
  }
}

export default Board;