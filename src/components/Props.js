import React, { Component } from 'react';

class PropsImplement extends Component {
render(props) {
  console.log(this.props)
  return <div>{this.props.name}</div>
  }
}

export default PropsImplement