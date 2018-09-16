import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import home from './pages/Home';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <div className="App">
           <Router>
              <Switch>
                <Route exact path="/" component={home}></Route> */}
                 <Route exact path="/about" component={About} ></Route>
              </Switch> 
           </Router>
      </div>
    );
  }
}

export default App;
