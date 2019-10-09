import React, { Component } from "react";
import PropTypes from "prop-types";

class TextInput extends Component {
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
          type="text"
          placeholder={this.props.title}
          value={this.props.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
