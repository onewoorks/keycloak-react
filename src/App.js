import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Secured from './Secured';
import Secured2 from './Secured2';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <ul>
            <li><Link to="/">public component</Link></li>
            <li><Link to="/secured">secured component 1 untuk 3000</Link></li>
            <li><Link to="/secured2">secured component 2 untuk 3001</Link></li>
          </ul>
          <Route exact path="/" component={Welcome} />
          <Route path="/secured" component={Secured} />
          <Route path="/secured2" component={Secured2} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;