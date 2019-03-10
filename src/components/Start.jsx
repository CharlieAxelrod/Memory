import React, { Component } from 'react';

function Start(props) {
  return (
    <div className="start-container">
      <h1 className="start-title">Memory</h1>
      <button className="start-button" onClick={props.startGame}>Click to play</button>
    </div>
  );
}

export default Start;