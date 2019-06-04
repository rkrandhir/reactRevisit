//short form - RCE

import React, { Component } from 'react'

class count extends Component {
  //short form - rconst
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  onIncrementCount() {
    this.setState(
      {
        count: this.state.count + 1
      }, () => console.log(this.state.count)
    )
  }
  
  render() {
    return (
      <div>
        <h1>Count: { this.state.count}</h1> 
        <button onClick={() => this.onIncrementCount()}>Counter</button>
        <button onClick={this.onIncrementCount.bind(this)}>Counter1</button>
        {/* Both method are same to call event handler */}
      </div>
    )
  }
}

export default count
