import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';

import fighters from '../../state/fighters';
import events from '../../state/events';

import API from '../../api';
import classes from './App.scss';

//Pages
import Header from '../../components/Header/Header';
import Home from '../Home/Home';
import Game from '../Game/Game';


class App extends Component {
  state = {
    loaded: false
  };
  componentDidMount() {
   // Pre-load data
   axios.all([ 

     API.getFighters()
        .then( response => {
            // Loads all fighter data into fighters state
            fighters.setData(response.data);
        }),

    API.getEvents()
        .then( response => {
            // Loads all event data into events state
            events.setData(response.data);
        }) 

      ]).then( () => {
        this.setState({
          loaded: true
        });
        console.log('Data loaded')
        // You can now import ../../state/fighters and ../../state/events
        // into your component and use it to search for fighters.
        //Examples:
        // Get a fighter by their full name
        console.log('Fighter: ', fighters.getFighter('Jon Jones'))
        // Get all fighters by weightclass
        // console.log('Light Heavyweights: ', fighters.getWeightclass('Light Heavyweight'));
        // You can also get all events
        console.log('Events: ', events.getAll());
      });
  }
  render() {
    if(!this.state.loaded) {
      return <div>Loading...</div>
    }
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Header  />
          <Route path="/" exact component={Home}/>
          <Route exact path="/play/:gameMode" component={Game}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
