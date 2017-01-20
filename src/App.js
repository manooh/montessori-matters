import React, { Component } from 'react';
import EuCookies from 'reactjs-eu-cookies';
import './App.scss';


import PegSelector from './PegSelector';
import RootBoard from './RootBoard';


class App extends Component {
  constructor(props) {
    super(props);

    this.setNewPegsState = this.setNewPegsState.bind(this);

    this.state = {
      toClear:      false,
      newPegsState: 'x'
    };
  }

  setClearAll(clearAll) {
    this.setState({toClear: clearAll});
  }

  setNewPegsState(state) {
    this.setState({newPegsState: state});
  }


  render() {
    return (
      <div className="App">
        <EuCookies />
        <div className="App-header">
          <h2>Montessori Matters</h2>
        </div>
        <div className="content">
          <h3>Small Square Root Board</h3>
          <PegSelector pegState={this.state.newPegsState} setNewPegsState={this.setNewPegsState} clearAll={this.setClearAll.bind(this, true)}/>
          <RootBoard newPegsState={this.state.newPegsState} toClear={this.state.toClear} clearDone={this.setClearAll.bind(this, false)}/>
        </div>
      </div>
    );
  }
}

export default App;
