import React, { Component, PropTypes } from 'react';
import './PegSelector.scss';


class PegSelector extends Component {
  handleCheck(e) {
    this.props.setNewPegsState(e.currentTarget.value);
  }

  render() {
    return (
      <div className="peg-selector">
        <form className="peg-choices">
          <div>
            <input type="radio" name="pegType" id="red" value="r" onChange={this.handleCheck.bind(this)}/>
            <label htmlFor="red">red</label>
          </div>
          <div>
            <input type="radio" name="pegType" id="blue" value="b" onChange={this.handleCheck.bind(this)}/>
            <label htmlFor="blue">blue</label>
          </div>
          <div>
            <input type="radio" name="pegType" id="green" value="g" onChange={this.handleCheck.bind(this)}/>
            <label htmlFor="green">green</label>
          </div>
          <div>
            <input type="radio" name="pegType" id="remove" value="x" onChange={this.handleCheck.bind(this)}/>
            <label htmlFor="remove">remove</label>
          </div>
        </form>
      </div>
    );
  }
}
PegSelector.propTypes = {
  setNewPegsState: PropTypes.func.isRequired
};

export default PegSelector;
