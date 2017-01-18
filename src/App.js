import React, { Component } from 'react';
import './App.scss';


import PegSelector from './PegSelector';
import RootBoard from './RootBoard';


class App extends Component {
  constructor(props) {
    super(props);

    this.setNewPegsState = this.setNewPegsState.bind(this);

    this.state = {
      newPegsState: 'x'
    };
  }

  setNewPegsState(state) {
    this.setState({newPegsState: state});
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Montessori Matters</h2>
        </div>
        <div className="content">
          <h3>Small Square Root Board</h3>
          <PegSelector pegState={this.state.newPegsState} setNewPegsState={this.setNewPegsState}/>
          <RootBoard newPegsState={this.state.newPegsState}/>
        </div>
      </div>
    );
  }
}

export default App;
