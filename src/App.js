import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Title from './components/Title/Title';
import TextField from './components/TextField/TextField';
import Menu from './components/Menu/Menu';
import MainMenu from './components/Menu/Menu-ui';
import store from './store';
import { SOURCE_TYPE_LOCAL, SOURCE_TYPE_REMOTE } from './constants';
export default class App extends React.Component {
    render() {
        return (
            <div >
                <Provider store={store}>
                    <div className="App" >
                        <Router>
                            <div className="Menu">
                                <Menu />
                            </div>
                            <div className="mainMenu">
                                <MainMenu/>
                            </div>
                            <div className="Content">
                                <Title title="Todo List" />
                            <Switch>
                                <Route exact path="/"
                                    render={(props) => < TextField {...props} 
                                                            source={SOURCE_TYPE_LOCAL} />} />
                                <Route exact path="/remote" 
                                    render={(props) => < TextField {...props} 
                                                            source={SOURCE_TYPE_REMOTE} />} />
                            </Switch>
                            </div>
                        </Router >
                    </div>
                </Provider>
            </div>
        );
    }
}


