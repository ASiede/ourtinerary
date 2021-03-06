import {API_BASE_URL} from '../config.js';
import {SubmissionError, focus} from 'redux-form';
import jwtDecode from 'jwt-decode';
import {saveAuthToken, clearAuthToken} from '../local-storage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import {history} from '../components/app.js'


export const FETCH_TRIPS_SUCCESS = 'FETCH_TRIPS_SUCCESS';
export const fetchTripsSuccess = trips => ({
    type: FETCH_TRIPS_SUCCESS,
	trips
})

export const getTrips = () => dispatch => {
	return fetch(`${API_BASE_URL}/trips/`)
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        })
		.then(trips => {
			dispatch(fetchTripsSuccess(trips));
		});
};

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = user => ({
    type: FETCH_USER_SUCCESS,
    user
})
export const getUser = (userId) => dispatch => {
    return fetch(`${API_BASE_URL}/users/` + userId)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        })
        .then(user => {
            dispatch(fetchUserSuccess(user));
        });
};

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    users
})
export const getUsers = () => dispatch => {
    return fetch(`${API_BASE_URL}/users/`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        })
        .then(users => {
            dispatch(fetchUsersSuccess(users));
        });
};

export const FETCH_TRIP_SUCCESS = 'FETCH_TRIP_SUCCESS';
export const fetchTripSuccess = trip => ({
    type: FETCH_TRIP_SUCCESS,
    trip
})
export const getTrip = (tripId) => dispatch => {
    return fetch(`${API_BASE_URL}/trips/` + tripId)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        })
        .then(trip => {
            dispatch(fetchTripSuccess(trip));
        });
};

// export const FETCH_ITINERARY_ITEM_SUCCESS = 'FETCH_ITINERARY_ITEM_SUCCESS';
// export const fetchItineraryItemSuccess = (itineraryItem, tripId) => ({
//     type: FETCH_ITINERARY_ITEM_SUCCESS,
//     itineraryItem,
//     tripId
// })
// export const getItineraryItem = (itemId, tripId) => dispatch => {
//     fetch(`${API_BASE_URL}/itineraryItems/` + itemId)
//         .then(res => {
//             if (!res.ok) {
//                 return Promise.reject(res.statusText);
//             }
//             return res.json();
//         })
//         .catch(err => {
//             const {reason, message, location} = err;
//             if (reason === 'ValidationError') {
//                 // Convert ValidationErrors into SubmissionErrors for Redux Form
//                 return Promise.reject(
//                     new SubmissionError({
//                         [location]: message
//                     })
//                 );
//             }
//         })
//         .then((itineraryItem) => {
//             dispatch(fetchItineraryItemSuccess(itineraryItem, tripId));
//         });
// };

export const LOGOUT = "LOGOUT"
export const logout = () => ({
	type: LOGOUT,
});

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    	.then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                dispatch(authError(err)); //trying something
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const FETCH_NEW_TRIP_SUCCESS = 'FETCH_NEW_TRIP_SUCCESS';
export const fetchNewTripSuccess = trip => ({
    type: FETCH_NEW_TRIP_SUCCESS,
    trip
})
export const createNewTrip = (newTrip) => dispatch => {
    return fetch(`${API_BASE_URL}/trips`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTrip)
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        })
        .then(trip => {
            dispatch(fetchNewTripSuccess(trip))
            history.push(`/trip/${trip.id}`)
        })
};

export const EDIT_TRIP_SUCCESS = 'EDIT_TRIP_SUCCESS';
export const editTripSuccess = trip => ({
    type: EDIT_TRIP_SUCCESS,
    trip
})
export const editTrip = (updatedFields) => dispatch => {
    return fetch(`${API_BASE_URL}/trips/`+updatedFields.id, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedFields)
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        })
        .then(trip => {
            dispatch(editTripSuccess(trip));
        });
};

export const DELETE_TRIP_SUCCESS = 'DELETE_TRIP_SUCCESS';
export const deleteTripSuccess = trip => ({
    type: DELETE_TRIP_SUCCESS,
    trip
})
export const deleteTrip = (tripId, userId) => dispatch => {
    return fetch(`${API_BASE_URL}/trips/`+ tripId, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({id: tripId})
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            
            return res.json();
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        })
        .then(deletedTrip => {
            dispatch(deleteTripSuccess(tripId));
            history.goBack();
        })
};

export const DELETE_ITINERARY_ITEM_SUCCESS = 'DELETE_ITINERARY_ITEM_SUCCESS';
export const deleteItineraryItemSuccess = (itineraryItemId, tripId) => ({
    type: DELETE_ITINERARY_ITEM_SUCCESS,
    itineraryItemId,
    tripId
})
export const deleteItineraryItem = (itineraryItemId, tripId) => dispatch => {
    return fetch(`${API_BASE_URL}/itineraryItems/`+ itineraryItemId, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            itineraryItemId: itineraryItemId,
            tripId: tripId
        })
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        })
        .then(deletedItineraryItem => {
            dispatch(deleteItineraryItemSuccess(itineraryItemId, tripId));
        });
};

export const FETCH_NEW_ITINERARY_ITEM_SUCCESS = 'FETCH_NEW_ITINERARY_ITEM_SUCCESS';
export const fetchNewItineraryItemSuccess = (itineraryItem, tripId) => ({
    type: FETCH_NEW_ITINERARY_ITEM_SUCCESS,
    translatedItineraryItem : {
        _id: itineraryItem.id,
        type: itineraryItem.type,
        confirmed: itineraryItem.confirmed,
        flightNumber: itineraryItem.flightNumber,
        layovers: itineraryItem.layovers,
        length: itineraryItem.length,
        departureTimeArrivalTime: itineraryItem.departureTimeArrivalTime,
        name: itineraryItem.name,
        price: itineraryItem.price,
        location: itineraryItem.location,
        pool: itineraryItem.pool,
        foodType: itineraryItem.foodType,
        website: itineraryItem.website,
        other: itineraryItem.other,
        votes: itineraryItem.votes
        },
    tripId
})
export const createNewItineraryItem = (itineraryItem, tripId) => dispatch => {
    return fetch(`${API_BASE_URL}/itineraryItems`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(itineraryItem)
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        })
        .then(itineraryItem => {
            dispatch(fetchNewItineraryItemSuccess(itineraryItem, tripId));
        });
};

export const EDIT_VOTE_SUCCESS = 'EDIT_VOTE_SUCCESS';
export const editVoteSuccess = vote => ({
    type: EDIT_VOTE_SUCCESS,
    vote
})
export const editVote = (vote) => dispatch => {
    return fetch(`${API_BASE_URL}/votes/`+ vote.id, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(vote)
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        })
        .then(vote => {
            dispatch(editVoteSuccess(vote));
        });
};

export const FETCH_VOTE_SUCCESS = 'FETCH_VOTE_SUCCESS';
export const fetchVoteSuccess = vote => ({
    type: FETCH_VOTE_SUCCESS,
    vote
})
export const getVote = (voteId) => dispatch => {
    return fetch(`${API_BASE_URL}/votes/` + voteId)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        })
        .then(vote => {
            dispatch(fetchVoteSuccess(vote));
        });
};

export const INVITE_SUCCESS = 'INVITE_SUCCESS';
export const inviteSuccess = () => ({
    type: INVITE_SUCCESS,
})
export const invite = (email, inviterName, tripName) => dispatch => {
    const emailBody = {
        to: email,
        inviter: inviterName,
        trip: tripName
    }
    return fetch(`${API_BASE_URL}/send-email`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(emailBody)
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        })
        .then(() => {
            dispatch(inviteSuccess())
        });
};

//LOGGIN IN
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});

const normalizeResponseErrors = res => {
    if (!res.ok) {
        if (
            res.headers.has('content-type') &&
            res.headers.get('content-type').startsWith('application/json')
        ) {
            // It's a nice JSON error returned by us, so decode it
            return res.json().then(err => Promise.reject(err));
        }
        // It's a less informative error returned by express
        return Promise.reject({
            code: res.status,
            message: res.statusText
        });
    }
    return res;
};

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken.user));
    saveAuthToken(authToken);
};

export const login = (username, password) => dispatch => {
    dispatch(authRequest());
    return (
        fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(({authToken}) => storeAuthInfo(authToken, dispatch))
            .catch(err => {
                const {code} = err;
                const message =
                    code === 401
                        ? 'Incorrect username or password'
                        : 'Unable to login, please try again';
                dispatch(authError(err));
                // Could not authenticate, so return a SubmissionError for Redux
                // Form
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                    })
                );
            })
    );
};

export const refreshAuthToken = () => (dispatch, getState) => {
    dispatch(authRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            // Provide our existing token as credentials to get a new one
            Authorization: `Bearer ${authToken}`
        }
    })
    	.then(res => normalizeResponseErrors(res))
        // .then(res => (res))
        .then(res => res.json())
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            // We couldn't get a refresh token because our current credentials
            // are invalid or expired, or something else went wrong, so clear
            // them and sign us out
            dispatch(authError(err));
            dispatch(clearAuth());
            clearAuthToken(authToken);
        });
};
