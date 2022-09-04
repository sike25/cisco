import React, { Component } from 'react';
import Card from './Card'
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://' + location.host + '/');

class PylonLatency extends Component {
  constructor(props) {
    super(props);
      this.state = {
        latency: null
    };
  }

  componentDidMount() {
    client.onerror = function() {
      console.log("Connection error");
    };

    client.onmessage = (message) => {
      this.setState({
        latency: new Date().getTime() - message.data
      })
    };
  }

  render() {
    return (
      <div>
        <Card title="Pylon Latency" info={this.state.latency} />
      </div>
    );
  }
}

export default PylonLatency;