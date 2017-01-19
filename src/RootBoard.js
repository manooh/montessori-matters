import React, { Component, PropTypes } from 'react';
import './RootBoard.scss';

import Peg from './Peg';

const cSize = 15;

class RootBoard extends Component {

  constructor(props) {
    super(props);

    this.setPegState = this.setPegState.bind(this);
    this.clearAll    = this.clearAll.bind(this);

    this.state = {
      pegStates: this.getClearedPegs()
    };
  }

  getClearedPegs() {
    let states = [];
    for (var r = 0; r < cSize; r++) {
      let chars = 'x'.repeat(cSize);
      states[r] = chars.split('');
    }
    return states;
  }

  clearAll() {
    this.setState({ pegStates: this.getClearedPegs() });
  }

  setPegState(r, c) {
    let states = this.state.pegStates;
    states[r][c] = this.props.newPegsState;
    this.setState({ pegStates: states });
  }

  componentWillReceiveProps(props) {
    if (props.toClear === true) {
      this.clearAll();
      this.props.clearDone();
    }
  }


  render() {
    var holes = [];
    var pegs = [];

    for (var r = 0; r < cSize; r++) {
      let holeRow = [];
      let pegRow  = [];
      for (var c = 0; c < cSize; c++) {
        holeRow.push(<div className='column hole' key={'holes-'+r+'-'+c}><span></span></div>);
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
RootBoard.propTypes = {
  newPegsState: PropTypes.string.isRequired,
  toClear:      PropTypes.bool.isRequired,
  clearDone:    PropTypes.func.isRequired
};


export default RootBoard;
