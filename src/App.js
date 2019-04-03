import React, { Component } from 'react';
import AppHeader from './app-header'
import AppHome from './App-home/app-home'
import AppFooter from './app-footer'

import './App.css';

class App extends Component {
render() {
return (


  <div id="wrapper">
    <AppHeader />
    <AppHome />
    <AppFooter />
  </div>


);
}
}

export default App;