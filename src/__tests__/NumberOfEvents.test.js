import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("renders the component", () => {
    expect(NumberOfEventsWrapper).toBeDefined();
  });

  test("default number of event value is 32", () => {
    expect(NumberOfEventsWrapper.find("input.num").prop("type")).toBe("number");
    expect(NumberOfEventsWrapper.state("num")).toBe(32);
  });

  test("user changes value for rendered number of events", () => {
    expect(NumberOfEventsWrapper.state("num")).toBe(32);

    NumberOfEventsWrapper.find("input.num").simulate("change", {
      target: { value: 24 },
    });
    expect(NumberOfEventsWrapper.state("num")).toBe(24);
  });
});
