import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  let AppWrapper;

  //Scenario 1
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    given(
      "a collapsed event element containing events is loaded on the page",
      () => {}
    );

    when("the user opens the app", () => {
      AppWrapper = mount(<App />);
    });

    then("all events’ details should be hidden.", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event .event-details")).toHaveLength(0);
    });
  });

  //Scenario 2
  test("User can expand an event to see its details.", ({
    given,
    when,
    then,
  }) => {
    given("user has seen the list of events", () => {
      AppWrapper = mount(<App />);
    });

    when("clicks on an event", () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-button").at(0).simulate("click");
    });

    then("all event information should be displayed.", () => {
      expect(AppWrapper.find(".event .details")).toHaveLength(1);
    });
  });

  //Scenario 3
  test("User can collapse an event to hide its details.", ({
    given,
    when,
    then,
  }) => {
    given("user got all necessary information on an event", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find(".event .details-button").at(0).simulate("click");
    });

    when("clicks again on the event button", () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-button").at(0).simulate("click");
    });

    then("the event information should be hidden.", () => {
      expect(AppWrapper.find(".event .details")).toHaveLength(0);
    });
  });
});
