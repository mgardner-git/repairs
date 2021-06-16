# 86 Repairs - Vue/Node Exercise

## Rules of engagement

* Fork the repository
* Spend no more than one hour fulfilling tasks below. Feel free to focus on either frontend, backend, or both!
* Commit and push your work as-is
* Email us a link to your repository 

## Installation

* Clone the repository
* Navigate to the project root and execute `npm install`

## Development

To run the frontend Vue app `npm run serve`.
To run the backend Node API `npm run api`

## Tasks

### Frontend Tasks
* Let's start by displaying [this](api/equipmentData.js) equipment data on the Home page (just copy/paste and hard-code it into state for now). Each piece of equipment should appear as a card that displays the manufacturer and the equipment_type.
* Now let's conditionally do some things to each piece of equipment:
    * If `equipment_type` or `manufacturer` are missing, apply a yellow background to card for that piece of equipment 
    * If missing photos, display “NO PHOTOS”
    * Do not display equipment if `active` is `false`
* Who doesn't like more info? Add a button to each card that expands and collapses the card. 
  * When expanded, show the serial_number, model_number, and description. 
* Add a trash-can icon to each card that removes that card from the list when clicked (refreshing the page should bring it back since this change won't persist). 
* Run the built-in API in a separate terminal window (`npm run api` should get it up and running)
    * Instead of relying on hard-coded data, retrieve the equipment via an HTTP GET request to `localhost:8100/equipment` (this should be where the API is running)
        * The response is an `Array<object>` and is the same that you previously hard-coded.
        * There is a 20% chance that the request **will** throw an error with a 500 HTTP status code
* Bonus:
    * Provide filters based on the value or status of one or more fields

### Backend Tasks
* Add an endpoint to the built-in API that allows users to search for a piece of equipment by manufacturer, and return an array of equipment objects (sourced from [equipmentData.js](api/equipmentData.js)) that have a matching manufacturer name
* Add an endpoint that allows users to submit tickets. Tickets should persist between API restarts (you can choose how, writing to a file or storing in a local DB are both fine). Tickets will have the structure:
```
{
    problem: "Uh oh, this thing is broken",
    equipmentSerial: "12345"
}
```
* Let's add some validation to the ticket-saving logic from the previous step. Tickets should only be successfully saved if they reference a serial number from one of the objects in the [equipmentData](api/equipmentData.js) array. Otherwise, return an error to the user and log something helpful to the console.
* It's test time! That's right, our QA person is tired of us breaking things that were previously working, and has asked us to add some unit tests. Add at least 1 unit test that tests the logic behind either of your endpoints. Use your testing framework of choice *or* just hand-roll a function to test it.

