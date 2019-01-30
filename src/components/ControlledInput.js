// Code ControlledInput Component Here
//import libraries
import React from 'react'

//import Components

//class component
export default class ControlledInput extends React.Component {
//state control
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    }, () => {console.log(this.state.firstName)})
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

//render
  render (){
    return (
      <div>
        <form>
          <input type="text" id="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
          <input type="text" id="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
        </form>
      </div>
    );//end return
  }//end render
}//end component
