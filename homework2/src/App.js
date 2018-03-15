import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent';


class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = ( event ) => {
    this.setState( {userInput: event.target.value} );
  }

  deleteCharHandler = (charIndex) => {
    const charlist = this.state.userInput.split('');
    charlist.splice(charIndex, 1);
    this.setState({userInput: charlist.join('')});
  }
  
  render() {
    const character = (
      <div>
        {this.state.userInput.split('').map((char, index) => {
          return <CharComponent 
            char={char} 
            key={index}
            click={() => this.deleteCharHandler(index)}/>
        })}
      </div>
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Homework #2</h1>
        </header>
      
        <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput}/>
        <p>{this.state.userInput.length}</p>
        <ValidationComponent textLength={this.state.userInput.length}/>
        {character}
      </div>
    );
  }
}

export default App;
