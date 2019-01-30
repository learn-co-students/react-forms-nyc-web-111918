// Code ControlledInput Component Here

import React from 'react';

class ControlledInput extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  }

  handleChange = event => {
    event.persist()
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(event.target))
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default ControlledInput;
