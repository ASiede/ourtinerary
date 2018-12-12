# OURtinerary

## Overview
OURtineary is a web app where you and your friends can plan your next trip simply and in one place. Users create a trip and invite all those going on the trip to join the trip on OURtinerary. Users can then view details of the trip and suggest different itinerary items. Users have the opportunity to vote on different itinerary items that have been suggested.

## Live Demo
[Link to Demo](https://stark-hamlet-54072.herokuapp.com/)

Wanna try it out? Use the demo account below:

Username: Delores

Password: passwordpassword

Try inviting her your Teddy(Teddy@gmail.com) and Mave(Mave@gmail.com) on a trip.

## Screenshots
Landing View

![Landing View](/src/screenshots/landing.png)

Create a Trip

![Create a Trip](/src/screenshots/newtrip.png)

View Trip

![Create Itinerary Item](/src/screenshots/tripview.png)

Mobile Landing View

![Mobile Landing View](/src/screenshots/mobile.png)


## API Documentation
API Layer of OURtinerary allows for:

- POST /trips...Add a new trip
- GET /trips...Find trips
- GET /trips/{tripId}...Find trip by ID
- PUT /trips...Edit an existing trip 

- DELETE /itineraryItems...Delete an existing trip
- POST /itineraryItems...Add a new itinerary item
- DELETE /itineraryItems...Delete an existing itinerary item

- GET /votes...Get votes
- PUT /votes...Edit an existing vote

- POST  /users...Register as a new user
- GET /users...Find users
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
