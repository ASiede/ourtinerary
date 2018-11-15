
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
	password,
});