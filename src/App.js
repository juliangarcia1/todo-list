import React from 'react';
import './App.css';
import Title from './components/Title/Title';
import TextField from './components/TextField/TextField';
export default class App extends React.Component {
  render(){
  return (
    <div>
      <div className="App">
        <Title title="Todo List"/>
        <TextField />
      </div>
    </div>
  );
  }
}

