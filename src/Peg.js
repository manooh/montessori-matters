import React, { Component, PropTypes } from 'react';
import './Peg.scss';


class Peg extends Component {
  render() {
    let pegType = '';
    switch(this.props.pegState) {
    case 'r':
        pegType = 'red';
        break;
    case 'b':
        pegType = 'blue';
        break;
    case 'g':
        pegType = 'green';
        break;
    default:
        pegType = 'unset';
    }

    return (

      <span className={'column peg ' + pegType} onClick={() => this.props.setPegState(this.props.row, this.props.column, 'r')}>&#9679; </span>
    );
  }
}
Peg.propTypes = {
  row:         PropTypes.number.isRequired,
  column:      PropTypes.number.isRequired,
  pegState:    PropTypes.string.isRequired,
  setPegState: PropTypes.func.isRequired
};
export default Peg;
