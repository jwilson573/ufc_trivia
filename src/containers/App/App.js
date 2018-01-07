import React, { Component } from 'react';
import axios from 'axios';

import Octagon from '../../components/Octagon/Octagon';
import Header from '../../components/Header/Header';
import fighters from '../../state/fighters';
import events from '../../state/events';

import API from '../../api';
import classes from './App.scss';

class App extends Component {
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
        console.log('Data loaded')
        // You can now import ../../state/fighters and ../../state/events
        // into your component and use it to search for fighters.
        //Examples:
        // Get a fighter by their full name
        console.log('Fighter: ', fighters.getFighter('Jon Jones'))
        // Get all fighters by weightclass
        console.log('Light Heavyweights: ', fighters.getWeightclass('Light Heavyweight'));
        // You can also get all events
        console.log('Events: ', events.getAll());
      });
  }
  render() {
    return (
      <div className={classes.App}>
        <Header  />
        <Octagon />
      </div>
    );
  }
}

export default App;
