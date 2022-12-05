# Meet App

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

- _Given_ a user has searched for an specific city, _When_ the list of events is shown, _Then_ all events’ details should be hidden.

#### Scenario 2: User can expand an event to see its details.

- _Given_ a user was interested in an event _When_ she clicks on an event _Then_ all event information should be displayed.

#### Scenario 3: User can collapse an event to hide its details.

- _Given_ the user got all necessary information on an event _When_ she clicks on a “show less details” button _Then_ the event information should be hidden
