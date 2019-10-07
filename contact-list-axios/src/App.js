import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import ContactList from './Components/ContactList'
import Nav from './Components/Nav'
class  App extends Component {
  render() {
    return (
    <Router>
    <div className="App">
    <Nav />
    <Switch>
    <Route path="/" exact component={App}/>
    <Route path="/contacts" exact component={ContactList}/>
    </Switch>
    </div>
    </Router>
  );
}
}

export default App;
