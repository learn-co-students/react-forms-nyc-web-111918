import React, {Component} from 'react';

export default class ControlledInput extends Component {

  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  handleChange = e => {
    this.setState({value: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
      </form>
    );
  }

}
