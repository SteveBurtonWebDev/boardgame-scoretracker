import React, { Component } from 'react';
import './App.css';
import PlayerCard from '../components/playercard/Playercard.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      playerHealth: 50,
      playerLevel: 0,
    }
  }



  onButtonAddLife = (event) => {
    if (this.state.playerHealth < 50) {
      this.setState({playerHealth: this.state.playerHealth + 1})
    }
  }

  onButtonMinusLife = (event) => {
    if (this.state.playerHealth > 0) {
      this.setState({playerHealth: this.state.playerHealth - 1})
    }
  }
  onButtonAddPower = (event) => {
    if (this.state.playerLevel < 30) {
      this.setState({playerLevel: this.state.playerLevel + 1})
    }
  }

  onButtonMinusPower = (event) => {
    if (this.state.playerLevel > 0) {
      this.setState({playerLevel: this.state.playerLevel - 1})
    }
  }

  render() {
   return (
     <PlayerCard 
      playerHealth = {this.state.playerHealth} playerLevel = {this.state.playerLevel}
      onButtonAddLife = {this.onButtonAddLife}
      onButtonMinusLife = {this.onButtonMinusLife}
      onButtonAddPower = {this.onButtonAddPower}
      onButtonMinusPower = {this.onButtonMinusPower}  
      /> 
   )
  }

}

export default App;
