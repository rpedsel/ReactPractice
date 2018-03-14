import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    skills:[
      {skill: 'React', description: 'hard'},
      {skill: 'Web Development', description: 'interesting'},
      {skill: 'A New Word', description: 'amazing'}
    ]
  }

  changeSkillHandler = (event) => {
    this.setState( {
      skills:[
        {skill: event.target.value, description: 'handy'},
        {skill: 'Web Development', description: 'interesting'},
        {skill: 'A New Word', description: 'amazing'}          
      ]
    } )
  }

  render() {   
  
    return (
      <div className="App">
        <h1>This is Homework #1 </h1>
        <UserOutput 
          skill={this.state.skills[0].skill}
          description={this.state.skills[0].description}/>
        <UserOutput 
          skill={this.state.skills[1].skill}
          description={this.state.skills[1].description}/>
        <UserOutput 
          skill={this.state.skills[2].skill}
          description={this.state.skills[2].description}/>
        <UserInput 
          skill={this.state.skills[0].skill}
          changed={this.changeSkillHandler}/>
      </div>
    );
  }
}

export default App;
