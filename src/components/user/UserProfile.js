import React, { Component } from 'react'

export default class UserProfile extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.username)
  }

  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}
