import React, { Component } from 'react';
import App1 from './app1'
import App2 from './app2'
import App3 from './app3'
import App4 from './app4'

class AppHome extends Component {
  render() {
    return (
      <div>
       <App1/>
       <App2/>
       <App3/>
       <App4/>
      </div>
    );
  }
}

export default AppHome;