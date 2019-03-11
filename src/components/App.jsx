import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';
import Start from './Start.jsx';
import deal from '../data/boardFunctions.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      started: false,
      removed: 0,
      won: false
    }
  }

  startGameHandler(){
    let shuffled = deal();
    this.setState({
      cards: shuffled,
      started: true,
      removed: 0,
      won: false
    });
  }

  removeCards(toRemove){
    this.setState(prevState => ({
      cards: prevState.cards.map(card => 
        card.id === toRemove[0].id || card.id === toRemove[1].id ? {id: card.id} : card),
      removed: prevState.removed + 2
    }), () => {
      if (this.state.removed === 54) {
        this.setState({
          won: true,
          started: false
        });
      }
    });
  }

  render(){
    return (
      <div className="container">
        {this.state.started 
          ? < Board cards={this.state.cards} removeCards={this.removeCards.bind(this)} /> 
          : < Start startGame={this.startGameHandler.bind(this)} />}
        {this.state.won
          ? <h1 className="win-message">Good Work! Click the button to start a new game</h1>
          : null}
      </div>
    );
  }
}

ReactDOM.render(< App />, document.getElementById('app'));