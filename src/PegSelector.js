import React, { Component, PropTypes } from 'react';
import './PegSelector.scss';


class PegSelector extends Component {
  handleCheck(e) {
    this.props.setNewPegsState(e.currentTarget.value);
  }

  handleKey(e) {
    if ('xrbg'.includes(e.key)) {
      this.props.setNewPegsState(e.key);
    }
  }

  componentWillMount() {
    document.addEventListener('keypress', this.handleKey.bind(this));
  }

  componentWillUnount() {
    document.removeEventListener('keypress', this.handleKey.bind(this));
  }


  render() {
    return (
      <div className="peg-selector">
        <form className="peg-choices">
          <div className="desc-text">Select color: </div>
          <div>
            <input type="radio" name="pegType" id="red" value="r" onChange={this.handleCheck.bind(this)} checked={(this.props.pegState === 'r')} />
            <label htmlFor="red" className="column peg"><span className="red"></span></label>
          </div>
          <div>
            <input type="radio" name="pegType" id="blue" value="b" onChange={this.handleCheck.bind(this)} checked={(this.props.pegState === 'b')} />
            <label htmlFor="blue" className="column peg"><span className="blue"></span></label>
          </div>
          <div>
            <input type="radio" name="pegType" id="green" value="g" onChange={this.handleCheck.bind(this)} checked={(this.props.pegState === 'g')}/>
            <label htmlFor="green" className="column peg"><span className="green"></span></label>
          </div>
          <div className="column">
            <input type="radio" name="pegType" id="remove" value="x" onChange={this.handleCheck.bind(this)} checked={(this.props.pegState === 'x')} />
            <label htmlFor="remove" className="remove"><span>&#10006;</span></label>
          </div>
          <div className="clear-all">
            <a href="#" onClick={ (e) => { e.preventDefault(); this.props.clearAll(); } } >Clear All</a>
          </div>
        </form>
      </div>
    );
  }
}
PegSelector.propTypes = {
  setNewPegsState: PropTypes.func.isRequired,
  pegState:        PropTypes.string.isRequired,
  clearAll:        PropTypes.func.isRequired
};

export default PegSelector;
