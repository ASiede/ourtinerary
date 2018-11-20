
export const ADD_TO_COUNT = 'ADD_TO_COUNT'
export const addToCount = count => ({
	type: ADD_TO_COUNT,
	count
});

export const LOGIN = "LOGIN"
export const login = (username, password) => ({
	type: LOGIN,
	username, 
	password
});

export const REGISTER_USER = "REGISTER_USER"
export const registerUser = (firstName, lastName, username, password) => ({
	type: REGISTER_USER,
	firstName,
	lastName,
	username, 
	password
});

export const CREATE_NEW_TRIP = "CREATE_NEW_TRIP"
export const createNewTrip = (id, tripName, dates, location, collaborators, tripLeader) => ({
	type: CREATE_NEW_TRIP,
	id, 
	tripName,
	dates,
	location, 
	collaborators,
	tripLeader
});


export const CREATE_NEW_ITINERARY_ITEM = "CREATE_NEW_ITINERARY_ITEM"
export const createNewItineraryItem = (tripId, itineraryType, flightNumber, name, price, foodType, pool, website, other, collaborators) => ({
	type: CREATE_NEW_ITINERARY_ITEM,
	tripId,
	itineraryType,
	flightNumber,
	name,
	price,
	foodType,
	pool,
	website,
	other,
	collaborators
});