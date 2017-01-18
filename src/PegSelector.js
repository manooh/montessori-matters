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
          <div>
            <input type="radio" name="pegType" id="red" value="r" onChange={this.handleCheck.bind(this)} checked={(this.props.pegState === 'r')} />
            <label htmlFor="red">red</label>
          </div>
          <div>
            <input type="radio" name="pegType" id="blue" value="b" onChange={this.handleCheck.bind(this)} checked={(this.props.pegState === 'b')} />
            <label htmlFor="blue">blue</label>
          </div>
          <div>
            <input type="radio" name="pegType" id="green" value="g" onChange={this.handleCheck.bind(this)} checked={(this.props.pegState === 'g')}/>
            <label htmlFor="green">green</label>
          </div>
          <div>
            <input type="radio" name="pegType" id="remove" value="x" onChange={this.handleCheck.bind(this)} checked={(this.props.pegState === 'x')} />
            <label htmlFor="remove">remove</label>
          </div>
        </form>
      </div>
    );
  }
}
PegSelector.propTypes = {
  setNewPegsState: PropTypes.func.isRequired,
  pegState:        PropTypes.string.isRequired
};

export default PegSelector;
