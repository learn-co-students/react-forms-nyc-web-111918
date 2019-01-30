// Code ControlledInput Component Here
import React, { Component } from 'react';


class TheInternetIsAForm extends Component {
  //Step one Set State.
  // remember you are in a class componet so you need this key word.
  // state = {
  //   firstName: "John",
  //   lastName: "Henry"
  // }

  state = {
    value: '',
  }

// step two make our event functions.
handleFirstNameChange = event => {
  this.setState({
    firstName:event.target.value
  })
}

handleLastNameChange = event => {
  console.log(event.target.value);
  this.setState({
    lastName: event.target.value
  })
}

onSubmit = event => {
  event.preventDefault()
  console.log(event.target.children);
  let children = event.target.children
  const firstName = children[0].value
  const lastName = children[1].value
  this.sendFormDataSomewhere({firstName, lastName})
}

  // render() {
  //   return (
  //     <form onSubmit={event => this.onSubmit(event)}>
  //       <input type="text" id="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName}/>
  //       <input type="text" id="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName}/>
  //     </form>
  //   ) // end of return
  // }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
      <input
      type="text"
      value={this.state.value}
      onChange={this.handleChange}
       />
      </form>
    ) //end of return
  } //end of render



} // end of class

export default TheInternetIsAForm
