import React, {Component } from 'react';
import './App.css';
import Address from './components/Address';
import Banner from './components/Banner';
import PylonLatency from './components/PylonLatency';

class App extends Component {
  render() {
    return (
      <>
        <Banner />
        <Address url='https://api.ipify.org?format=json'/>
        <Address url='https://api64.ipify.org?format=json'/>
        <PylonLatency />
      </>   
    );
  }
}

export default App;
