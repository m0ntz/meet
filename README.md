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

#### Feature 1. Filter events by city.

> As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

Scenario 1. When user hasn’t searched for a city, show upcoming events from all cities.

- Given user hasn’t searched for any city When the user opens the app Then the user should see a list of all upcoming events.

Scenario 2. User should see a list of suggestions when they search for a city.

- Given the main page is open When user starts typing in the city textbox Then the user should see a list of cities (suggestions) that match what they’ve typed.
