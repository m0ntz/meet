Feature: Specify Number of Events

    Scenario: When user has not specified a number, 32 is the default number.
        Given user hasn’t specified the number of events
        When the user opens the events page
        Then a default number of 32 events is loaded on the page

    Scenario: User can change the number of events they want to see.
        Given the events page is open
        When the user changes the number of events
        Then the event list elements shows the number of events set by the user.