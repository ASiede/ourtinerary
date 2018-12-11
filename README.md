# OURtinerary

## Overview
OURtineary is a web app where you and your friends can plan your next trip simply and in one place. Users create a trip and invited all those going on the trip to join the trip on OURtinerary. Users then have one central place to view details of the trip and suggest different itinerary items. Users have the opputunity to vote on different itinerary items that have been suggested. My organizing ideas and opinions OURtinerary will help groups enjoy their next trip 

## Live Demo
[Link to Demo](https://stark-hamlet-54072.herokuapp.com/)

## Screenshots
Landing View

![Landing View]()

Register/Login

![Register/Login]()

Create a Trip

![Create a Trip](/src/screenshots/newtrip.png)

View Trip

![Create Itinerary Item]()

Mobile Landing View

![Mobile Landing View]()


## API Documentation
API Layer of Ourtinerary allows for:

- POST /trip...Add a new trip
- GET /trip...Find trips by most recent or by severeal search parameter options
- GET /trip/{tripId}...Find trip by ID
- PUT /trip...Updtate an existing trip that you have contributed
- DELETE /trip...Delete an existing trip that you have contributed

- POST  /user...Register as a new user
- GET /user/{userID}...Find user by ID
- POST  /auth/login...Login as an existing user

## Tecnhnology used

### Front End
- HTML
- CSS
- JavaScript
- React
- Redux
- React Router
- Redux Thunk
- Redux Form

### Back End

- Node.js
- Express Framework
- Passport Authentification
- Jwt Security

### Testing

- Chai
- Chai-http
- Mocha
- Enzyme
- Jest
