import React from "react";
import { mount, shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents.js";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test("render element", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });

  test("render input for number of events", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events-input")).toHaveLength(
      1
    );
  });

  test("render default input for number of events of 32", () => {
    expect(
      NumberOfEventsWrapper.find(".number-of-events-input").prop("value")
    ).toBe(32);
  });

  test("render change of input number of events within range", () => {
    const eventObject = { target: { value: 2 } };
    NumberOfEventsWrapper.find(".number-of-events-input").simulate(
      "change",
      eventObject
    );
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(2);
  });

  test("render change of input number of events out of range", () => {
    const outOfRangeValue = { target: { value: 33 } };
    const originalValue = NumberOfEventsWrapper.state("numberOfEvents");
    NumberOfEventsWrapper.find(".number-of-events-input").simulate(
      "change",
      outOfRangeValue
    );
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(originalValue);
  });
});

// Integration Tests

describe("< NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = mount(<NumberOfEvents />);
  });

  test("integration for App, NumberOfEvents, and EventList", () => {
    const NumberOfEventsState = NumberOfEventsWrapper.state({
      numberOfEvents: 32,
    });
  });
});
