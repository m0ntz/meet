import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  let AppWrapper;

  //Scenario 1
  test("When user has not specified a number, 32 is the default number.", ({
    given,
    when,
    then,
  }) => {
    given("user hasn’t specified the number of events", () => {});

    when("the user opens the events page", async () => {
      AppWrapper = await mount(<App />);
    });

    then("a default number of 32 events is loaded on the page", () => {
      AppWrapper.update();
      expect(AppWrapper.state("numberOfEvents")).toEqual(32);
    });
  });

  //Scenario 2
  test("User can change the number of events they want to see.", ({
    given,
    when,
    then,
  }) => {
    given("the events page is open", async () => {
      AppWrapper = await mount(<App />);
    });

    when("the user changes the number of events", () => {
      AppWrapper.update();
      const NumberOfEventsWrapper = AppWrapper.find("NumberOfEvents");
      const eventObject = { target: { value: 5 } };
      NumberOfEventsWrapper.find(".number-of-events-input").simulate(
        "change",
        eventObject
      );
    });

    then(
      "the event list elements shows the number of events set by the user.",
      () => {
        AppWrapper.update();
        expect(AppWrapper.state("numberOfEvents")).toEqual(5);
      }
    );
  });
});
