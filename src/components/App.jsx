import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';
import Start from './Start.jsx';
import boardFunctions from '../data/boardFunctions.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      won: false,
      started: false
    }
  }

  startGameHandler(){
    let shuffled = boardFunctions.deal();
    this.setState({
      cards: shuffled,
      started: true,
    });
  }

  render(){
    return (
      <div>
        {this.state.started 
          ? < Board cards={this.state.cards} /> 
          : < Start startGame={this.startGameHandler.bind(this)} />}
      </div>
    );
  }
}

ReactDOM.render(< App />, document.getElementById('app'));