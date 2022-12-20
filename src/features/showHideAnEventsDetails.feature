Feature: Show/hide an event’s details

Scenario: An event element is collapsed by default.
Given a collapsed event element containing events is loaded on the page
When the user opens the app
Then all events’ details should be hidden.

Scenario: User can expand an event to see its details.
Given user has seen the list of events
When clicks on an event
Then all event information should be displayed.

Scenario: User can collapse an event to hide its details.
Given user got all necessary information on an event
When clicks again on the event button
Then the event information should be hidden.