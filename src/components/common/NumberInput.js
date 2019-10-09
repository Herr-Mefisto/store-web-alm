import React, { Component } from "react";
import PropTypes from "prop-types";

class NumberInput extends Component {
  onChange = event => {
    const newValue = event.target.value;
    this.setState({ value: newValue });
    this.props.onChange(newValue);
  };

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.title + "Id"} className="form-label">
          {this.props.title}
        </label>
        <input
          className="form-control"
          type="number"
          placeholder={this.props.title}
          value={this.props.value}
          onChange={this.onChange}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
        />
      </div>
    );
  }
}

NumberInput.propTypes = {
  // value: PropTypes.number | PropTypes.string,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default NumberInput;
