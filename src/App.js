import React from 'react';
import './App.css';
import Title from './components/Title/Title';
import TextField from './components/TextField/TextField';
import ListItem from './components/ListItem/ListItem';
export default class App extends React.Component {
  render(){
  return (
    <div>
      <div className="App">
        <Title />
        <ListItem />
        <TextField />
        
        <h1>App</h1>
      </div>
    </div>
  );
  }
}

