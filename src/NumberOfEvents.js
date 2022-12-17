import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    events: [],
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 0 || value > 32) {
      this.setState({
        numberOfEvents: this.state.numberOfEvents,
      });
    } else {
      this.setState({
        numberOfEvents: value,
      });
    }

    this.props.updateEvents(undefined, value);
  };

  render() {
    return (
      <div>
        <div className="number-of-events">
          <label>
            Number of Events:
            <input
              type="number"
              className="number-of-events-input"
              min="1"
              value={this.state.numberOfEvents}
              onChange={this.handleInputChanged}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;
