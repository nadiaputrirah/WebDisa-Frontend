import React, { Component } from "react";
import QrReader from "react-qr-scanner";

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: "No result",
    };

    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    this.setState({
      result: data,
    });
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    const scannerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    };

    const previewStyle = {
      height: 500,
      width: 800,
    };

    return (
      <div style={scannerStyle}>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          
          // facingMode="environment"
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default Scanner;
