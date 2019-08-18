import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    text: ''
  };

  onChange = e => this.setState({ text: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    this.props.searchUsers(this.state.text);
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Please Enter a User"
            onChange={this.onChange}
          />
          <input
            type="submit"
            className="btn btn-dark btn-block"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}
