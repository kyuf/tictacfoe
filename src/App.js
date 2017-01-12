import React, { Component } from 'react';
import BoardContainer from './containers/BoardContainer';
import ScoreboardContainer from './containers/ScoreboardContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <h1>X's and O's</h1>
        <BoardContainer />
        <ScoreboardContainer />
      </div>
    );
  }
}

export default App;
