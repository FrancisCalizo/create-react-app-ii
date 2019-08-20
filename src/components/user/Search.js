import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from '../layout/Alert';

export default class Search extends Component {
  state = {
    text: '',
    alert: null
  };

  onChange = e => this.setState({ text: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    if (this.state.text === '') {
      this.setState({
        alert: { type: 'primary', msg: 'Username is required' }
      });

      setTimeout(() => this.setState({ alert: null }), 5000);
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '', alert: null });
    }
  };

  onClick = e => {
    e.preventDefault();

    this.props.clearUsers();
  };

  render() {
    return (
      <div>
        {this.state.alert !== null && <Alert alert={this.state.alert} />}
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
