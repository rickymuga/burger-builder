import React, { Component } from 'react';
import './App.css';
import Person from'./Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1> Hi, I'm a react app </h1>
       <Person name="Max" age="28" />
       <Person name="Manu" age="29"> My hobbies: racing</Person>
       <Person name="Steph" age="23" />
      </div>
    );
  }
}

export default App;
