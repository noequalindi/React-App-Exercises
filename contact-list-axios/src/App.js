import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactList from './Components/ContactList'
class  App extends Component {
  render() {
    return (
    <React.Fragment>
    <div className="App">
      <h1> Contact List </h1>
      <ContactList />
    </div>
    </React.Fragment>
  );
}
}

export default App;
