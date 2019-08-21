import React, { Fragment, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Search from './components/user/Search';
import Users from './components/user/Users';
import About from './components/pages/About';
import UserProfile from './components/user/UserProfile';

export default class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  // Get Single GitHub User
  getUser = async username => {
    this.setState({ loading: true });

    const response = await fetch(
      `https://api.github.com/users/${username}?client_id${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const res = await response.json();

    this.setState({ user: res, loading: false });
  };

  // Search GitHub Users
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

    // Get User Repos
    getRepos = async username => {
      this.setState({ loading: true });

      const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=created&client_id${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const res = await response.json();

      this.setState({ repos: res, loading: false });
    };

  clearUsers = () => this.setState({ users: [] });

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                  />
                  <Users
                    users={this.state.users}
                    loading={this.state.loading}
                  />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/users/:userlogin"
              render={props => (
                <UserProfile
                  {...props}
                  user={this.state.user}
                  getUser={this.getUser}
                  loading={this.state.loading}
                  getRepos={this.getRepos}
                  repos={this.state.repos}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
