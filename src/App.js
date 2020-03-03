import React from 'react';
import {BrowseRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Title from './components/Title/Title';
import TextField from './components/TextField/TextField';
export default class App extends React.Component {

  render(){
  return (
    <div>
      <div className="App">
        <Router>
          <Title title="Todo List"/>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
          <TextField/>
        </Router>
      </div>
    </div>
  );
  }
}

