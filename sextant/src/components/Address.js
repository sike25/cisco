import React, { Component } from 'react';
import Card from './Card';

class Address extends Component {
  constructor(props) {
      super(props);
      this.state = {
        url: props.url,
        ipAddress: null
      };
  }

  componentDidMount() {
      fetch(this.state.url)
        .then(response => response.json())
        .then(data => this.setState({ ipAddress: data.ip }));
    }

  render() {
    //check to confirm or update the type of ip address we are rendering
    var ipType = 'IPV6';
    if (this.state.url == 'https://api.ipify.org?format=json') ipType = 'IPV4';  
      
    //String concantenation inside div
    return (
      <div className="ipAdd">
        <Card title={ipType} info={"{ ip: " + this.state.ipAddress + " }"}/>
      </div>
    );
  }
}

export default Address;
