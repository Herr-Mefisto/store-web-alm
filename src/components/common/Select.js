import React, { Component } from "react";

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value };
  }

  onChange = event => {
    this.setState({ value: event.target.value });
    this.props.onChange(event.target.value);
  };
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.title + "Id"} className="form-label">
          {this.props.title}
        </label>
        <select
          id={this.props.title + "Id"}
          className="form-control"
          onChange={this.onChange}
          defaultValue={this.state.value}
        >
          {this.props.options.map(option => {
            return (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Select;
