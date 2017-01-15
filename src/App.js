import React, { Component } from 'react';
import BoardContainer from './containers/BoardContainer';
import ScoreboardContainer from './containers/ScoreboardContainer';
import ConsoleContainer from './containers/ConsoleContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <h1>X's & O's</h1>
        <BoardContainer />
        <ConsoleContainer />
        <ScoreboardContainer />
      </div>
    );
  }
}

export default App;
