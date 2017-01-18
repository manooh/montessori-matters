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
        <PegSelector setNewPegsState={this.setNewPegsState}/>
        <RootBoard newPegsState={this.state.newPegsState}/>
      </div>
    );
  }
}

export default App;
