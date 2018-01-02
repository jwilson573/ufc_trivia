import React, { Component } from 'react';
import Octagon from '../../components/Octagon/Octagon';
import Header from '../../components/Header/Header';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <Octagon />
      </div>
    );
  }
}

export default App;
