import React, { Component } from 'react';
import './RootBoard.scss';

import Peg from './Peg';

const cSize = 15;

class RootBoard extends Component {

  constructor(props) {
    super(props);

    this.setPegState = this.setPegState.bind(this);

    let states = [];
    for (var r = 0; r < cSize; r++) {
      let chars = 'x'.repeat(cSize);
      states[r] = chars.split('');
    }
    this.state = {
      pegStates: states
    };
  }

  setPegState(r, c, state) {
    let states = this.state.pegStates;
    states[r][c] = state;
    this.setState({ pegStates: states });
  }

  render() {
    var holes = [];
    var pegs = [];

    for (var r = 0; r < cSize; r++) {
      let holeRow = [];
      let pegRow  = [];
      for (var c = 0; c < cSize; c++) {
        holeRow.push(<span className='column' key={'holes-'+r+'-'+c}>&#9679; </span>);
        pegRow.push( <Peg key={'pegs-'+r+'-'+c} row={r} column={c} pegState={this.state.pegStates[r][c]} setPegState={this.setPegState}/>);
      }
      holes.push(<div className='row' key={'holes-'+r}>{holeRow}</div>);
      pegs.push(<div className='row' key={'pegs-'+r}>{pegRow}</div>);
    }

    return (
      <div className="board">
        <div>
          <div className="holes">
            {holes}
          </div>
          <div className="pegs">
            {pegs}
          </div>
        </div>
      </div>
    );
  }
}

export default RootBoard;
