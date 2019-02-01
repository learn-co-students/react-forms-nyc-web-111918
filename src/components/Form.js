import React from 'react';

class Form extends React.Component{
  state = {
    firstName: 'Joe',
    lastName: 'Henry'
  }

  handleFirstNameChange = event =>{
    console.log('first name',event.target.value)
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event =>{
    console.log('last name',event.target.value)
    this.setState({
      lastName: event.target.value
    })
  }



  render(){
    return(
      <form>
      <input type="text"
      id="firstName"
      onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName}/>
      <input type="text"
      id="lastName"
      onChange={event => this.handleLastNameChange(event)} value={this.state.lastName}
      value={this.state.lastName}/>

      <textarea placeholder="hello"/>
      <input type="checkbox"/>
      <input type="radio"/>
      <select>
        <option value="hello">Hello</option>
        <option value="bye">Bye</option>
      </select>
      </form>
    )
  }
}

export default Form
