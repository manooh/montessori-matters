import React, { Component } from 'react';
import './App.scss';


import RootBoard from './RootBoard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Montessori Matters</h2>
        </div>
        <RootBoard/>
      </div>
    );
  }
}

export default App;
