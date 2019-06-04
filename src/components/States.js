import React, { Component } from 'react';

class StateImplement extends Component {
constructor() {
  super() 
  this.state = {
    message: "Welcome visitor"
  }
}

getSubscription() {
  this.setState({
    message: 'Thanks for Subscribing it'
  }) 
}

  render() {
  return (
    <div>
      <div>{this.state.message}</div> 
      <button onClick={() => this.getSubscription()}>Subscribe</button>
    </div>
  )
}
}

export default StateImplement;