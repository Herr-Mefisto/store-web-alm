import React, { Component } from "react";

class TextSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.filter };
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form className="form-inline" onSubmit={this.onSubmit}>
        <i className="fas fa-search" aria-hidden="true"></i>
        <input
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={this.onChange}
        />
      </form>
    );
  }
}

export default TextSearch;
