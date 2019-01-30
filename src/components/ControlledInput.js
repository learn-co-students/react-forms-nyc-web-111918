import React from 'react';

export default class ControlledInput extends React.Component {

  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
    console.log(this.state.value);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.sendSomething(this.state)
  }

  render() {
    return (
      <form onSubmit={ (e) => this.handleSubmit(e) }>
        <input onChange={this.handleChange} type="text" value={this.state.value} />
      </form>
    )
  }

}
