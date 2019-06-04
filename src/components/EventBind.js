import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Congratulations !!'
    }

    this.congratulate = this.congratulate.bind(this)  /* third approach */
  }
  
  congratulate() { /* for first 3 approach */
    this.setState({
      message: 'Many Congratulations !!'
    })
  }

  congratulate1 = () => {
    this.setState({
      message: 'Many many congratulations !!'
    })
  }


  render() {
    return (
      <div>
        <p>Ritwik is the World Champion</p>
        <br/>     
        <i>{ this.state.message }</i>
        <br/>
        <br/>
        {/* <button onClick={() => this.congratulate()}>Congratulate him</button>  -- 1st Approach  */}
        {/* <button onClick={this.congratulate.bind(this)}>Congratulate him</button> -- 2nd approach; it has performance implications  */}
        {/* <button onClick={this.congratulate}>Congratulate him</button>  -- 3rd Approach */}
        <button onClick={this.congratulate1}>Congratulate him</button> {/*  -- 4th Approach */}
        
      </div>
    )
  }
}

export default EventBind
