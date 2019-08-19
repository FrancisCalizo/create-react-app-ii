import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Search from './components/user/Search';
import Users from './components/user/Users';

export default class App extends Component {
  state = {
    users: [],
    loading: false
  };

  searchUsers = async inputText => {
    this.setState({ loading: true });

    const response = await fetch(
      `https://api.github.com/search/users?q=${inputText}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    const data = await response.json();

    this.setState({ users: data.items, loading: false });
  };

  clearUsers = () => this.setState({ users: [] });

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}
