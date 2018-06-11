import React, {Component} from 'react';
import {hot} from 'react-hot-loader'
import './App.css';

import {CitizenshipWhy, CitizenshipWho} from './Citizenship';
import {TemporaryWhy, TemporaryWho} from './Temporary';
import {ImmigrationWhy, ImmigrationWho} from './Immigration';

class App extends Component {
  render() {
    return (
      <div className="container">
        <CitizenshipWhy />
        <CitizenshipWho />

        <ImmigrationWhy />
        <ImmigrationWho />

        <TemporaryWhy />
        <TemporaryWho />
      </div>
    );
  }
}

export default hot(module)(App);
