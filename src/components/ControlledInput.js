import React from 'react';

export default class ControlledInput extends React.Component {
  state = {
    value: "",
  }

  handleChange=(event)=>{
    console.log(event.target.value)
    this.setState({
      value: event.target.value,
    })
  }

  render(){
    return(
      <form>
        <input type="text"
        value={this.state.value}
        onChange={this.handleChange}
        />
      </form>
    )

  }
}
