import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent';


class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = ( event ) => {
    let userInput = this.state.userInput;
    userInput = event.target.value;
    this.setState( {userInput: userInput} );
    this.setState( {userInput: userInput} );
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Homework #2</h1>
        </header>
      
        <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput}/>
        <p>{this.state.userInput.length}</p>
        <ValidationComponent textLength={this.state.userInput.length}/>
        <CharComponent />
      </div>
    );
  }
}

export default App;
