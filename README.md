# Meet App

👉 [Open App](https://m0ntz.github.io/meet/)

![image](https://user-images.githubusercontent.com/109100764/212966878-973392c1-e9b8-4191-b78a-b94e5755c14e.png)


## Description

The Meet App is a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

## Main Features

- Filter events by city.
- Show/hide event details.
- Specify number of events.
- Use the app when offline.
- Add an app shortcut to the home screen.
- View a chart showing the number of upcoming events by city.

## Tech Stack
- React
- TDD technique
- API
- AWS lambda

## User Stories

### Feature 1. Filter events by city

> "As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city."

#### Scenario 1. When user hasn’t searched for a city, show upcoming events from all cities.

- _Given_ the user hasn’t searched for any city _When_ the user opens the app _Then_ the user should see a list of all upcoming events.

#### Scenario 2. User should see a list of suggestions when they search for a city.

- _Given_ the main page is open _When_ the user starts typing in the city textbox _Then_ the user should see a list of cities (suggestions) that match what they’ve typed.

#### Scenario 3: User can select a city from the suggested list.

- _Given_ the user was typing “Berlin” in the city textbox and the list of suggested cities is showing _When_ the user selects a city (e.g., “Berlin, Germany”) from the list _Then_ their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city.

### Feature 2: Show/hide an event’s details

> “As a user I should be able to show and hide event’s details so that I can focus on the events that I’m interested in and avoid cluttering the page."

#### Scenario 1: An event element is collapsed by default.

- _Given_ a collapsed event element containing events is loaded on the page, _When_ the user opens the app, _Then_ all events’ details should be hidden.

#### Scenario 2: User can expand an event to see its details.

- _Given_ user has seen the list of events _When_ he clicks on an event _Then_ all event information should be displayed.

#### Scenario 3: User can collapse an event to hide its details.

- _Given_ the user got all necessary information on an event _When_ clicks again on the event button _Then_ the event information should be hidden.

### Feature 3: Specify number of events

> “As a user I should be able to specify the number of events that are displayed so that I can see more or less events at once.”

#### Scenario 1: When user hasn’t specified a number, 32 is the default number.

- _Given_ user hasn’t specified the number of events _When_ the user opens the events page _Then_ a default number of 32 events is loaded on the page.

#### Scenario 2: User can change the number of events they want to see.

- _Given_ the events page is open _When_ the user changes the number of events _Then_ the event list elements shows the number of events set by the user.

### Feature 4: Use the app when offline

> “As a user I should be able to access the app at all times so that I can have access to my events when I run out of mobile data or there is no service coverage.”

#### Scenario 1: Show cached data when there’s no internet connection.

- _Given_ the user wanted to access the app on the go, _When_ connection to internet is lost, _Then_ the app should still work by showing data taken from an offline cache.

#### Scenario 2: Show error when user changes the settings (city, time range).

- _Given_ default time and city settings, _When_ a user changes city and time settings, _Then_ an error message should be displayed.

### Feature 5: Data Visualization

> “As a user I should be able to have a clear visualisation of the events in all cities so that I can keep better track of them.”

#### Scenario 1: Show a chart with the number of upcoming events in each city.

- _Given_ the user chooses a specific city _When_ the user wants to view data regarding future events _Then_ the desired visualisation chart will be displayed.
