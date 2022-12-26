import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      background: this.background,
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "#fff";
    this.background = "#d90429";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "#fff";
    this.background = "#d90429";
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "gray";
    this.background = "#edf2f4";
  }
}

export { InfoAlert };
export { ErrorAlert };
export { WarningAlert };
