import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    text: ''
  };

  onChange = e => this.setState({ text: e.target.value });

  render() {
    return (
      <div>
        <form className="form">
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
