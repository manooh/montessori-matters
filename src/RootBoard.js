import React, { Component } from 'react';
import './RootBoard.scss';

class RootBoard extends Component {

  render() {
    const cSize = 15;
    var holes = [];
    var pegs = [];

    for (var r = 0; r < cSize; r++) {
      let holeRow = [];
      let pegRow  = [];
      for (var c = 0; c < cSize; c++) {
        holeRow.push(<span className='column' key={'holes-'+r+'-'+c}>&#9679; </span>);
        pegRow.push( <span className='column' key={'pegs-'+r+'-'+c}>&#9679; </span>);
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
