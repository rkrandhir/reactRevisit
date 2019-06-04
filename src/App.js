import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Abc from './components/TypeOfComponent';
import PropsImplement from './components/Props';
import StateImplement from './components/States';
import Count from './components/Count';
import EventBind from './components/EventBind'

/*
import TypeOfComponent from './components/typeOfComponent'
-- you may want to provide your custom name (Abc) in place of exact name if it has export default written.
-- You can't do in case 
"export const"  written
*/

class App extends Component {
  render() {
    return (
    <div>
      <Abc></Abc>
      <PropsImplement name="Rekha"></PropsImplement>
      <PropsImplement name="Ritwik"></PropsImplement>
      <PropsImplement name="Rishat"></PropsImplement> 
      <StateImplement></StateImplement>
      <Count></Count>
      <EventBind></EventBind> {/* how to call events - 4 approaches */}
    </div>
    );
  }
}

export default App;
