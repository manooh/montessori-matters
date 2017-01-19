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

      <div className='column peg' onClick={() => this.props.setPegState(this.props.row, this.props.column)}><span className={pegType}></span> </div>
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
