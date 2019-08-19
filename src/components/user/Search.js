import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  state = {
    text: ''
  };

  onChange = e => this.setState({ text: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  onClick = e => {
    e.preventDefault();

    this.props.clearUsers();
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Please Enter a User"
            onChange={this.onChange}
            value={this.state.text}
          />
          <input
            type="submit"
            className="btn btn-dark btn-block"
            value="Submit"
          />
        </form>
        <button onClick={this.onClick} className="btn btn-light btn-block">
          Clear
        </button>
      </div>
    );
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired
  };
}
