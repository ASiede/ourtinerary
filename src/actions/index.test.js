import {API_BASE_URL} from '../config.js';
import {fetchTripsSuccess, 
	FETCH_TRIPS_SUCCESS, 
	getTrips,
	FETCH_USER_SUCCESS,
	fetchUserSuccess,
	getUser,
    fetchUsersSuccess,
    FETCH_USERS_SUCCESS,
    getUsers,
    FETCH_TRIP_SUCCESS,
    fetchTripSuccess,
    getTrip,
    logout,
    LOGOUT,
    registerUser,
    FETCH_NEW_TRIP_SUCCESS,
    fetchNewTripSuccess,
    createNewTrip,
    EDIT_TRIP_SUCCESS,
    editTrip,
    editTripSuccess,
    DELETE_TRIP_SUCCESS,
    deleteTripSuccess,
    deleteTrip,
    DELETE_ITINERARY_ITEM_SUCCESS,
    deleteItineraryItemSuccess,
    deleteItineraryItem,
    FETCH_NEW_ITINERARY_ITEM_SUCCESS,
    fetchNewItineraryItemSuccess,
    createNewItineraryItem,
    EDIT_VOTE_SUCCESS,
    editVoteSuccess,
    editVote,
    FETCH_VOTE_SUCCESS,
    fetchVoteSuccess,
    getVote,
    INVITE_SUCCESS,
    inviteSuccess,
    invite,
    SET_AUTH_TOKEN,
    setAuthToken,
    CLEAR_AUTH,
    clearAuth,
    AUTH_REQUEST,
    authRequest,
    AUTH_SUCCESS,
    authSuccess,
    AUTH_ERROR,
    authError,
    login,
    refreshAuthToken

} from './index';

describe('fetchTripsSuccess', () => {
    it('Should return the action', () => {
        const trips = [];
        const action = fetchTripsSuccess(trips);
        expect(action.type).toEqual(FETCH_TRIPS_SUCCESS);
        expect(action.trips).toEqual(trips);
    });
});

describe('getTrips', () => {
    it('Should dispatch fetchTripsSuccess', () => {
        const trips = [];
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return trips;
                }
            })
        );

        const dispatch = jest.fn();
        return getTrips()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/trips/`);
            expect(dispatch).toHaveBeenCalledWith(fetchTripsSuccess(trips));
        });
    });
});

describe('fetchUserSuccess', () => {
    it('Should return the action', () => {
        const user = {};
        const action = fetchUserSuccess(user);
        expect(action.type).toEqual(FETCH_USER_SUCCESS);
        expect(action.user).toEqual(user);
    });
});

describe('getUser', () => {
    it('Should dispatch fetchUserSuccess', () => {
        const user = {};
        const userId = "123"
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return user;
                }
            })
        );

        const dispatch = jest.fn();
        return getUser(userId)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users/${userId}`);
            expect(dispatch).toHaveBeenCalledWith(fetchUserSuccess(user));
        });
    });
});

describe('fetchUsersSuccess', () => {
    it('Should return the action', () => {
        const users = [];
        const action = fetchUsersSuccess(users);
        expect(action.type).toEqual(FETCH_USERS_SUCCESS);
        expect(action.users).toEqual(users);
    });
});

describe('getUsers', () => {
    it('Should dispatch fetchUsersSuccess', () => {
        const users = [];
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return users;
                }
            })
        );
        const dispatch = jest.fn();
        return getUsers()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users/`);
            expect(dispatch).toHaveBeenCalledWith(fetchUsersSuccess(users));
        });
    });
});

describe('fetchTripSuccess', () => {
    it('Should return the action', () => {
        const trip = {};
        const action = fetchTripSuccess(trip);
        expect(action.type).toEqual(FETCH_TRIP_SUCCESS);
        expect(action.trip).toEqual(trip);
    });
});

describe('getTrip', () => {
    it('Should dispatch fetchTripSuccess', () => {
        const trip = {};
        const tripId = "123"
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return trip;
                }
            })
        );

        const dispatch = jest.fn();
        return getTrip(tripId)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/trips/${tripId}`);
            expect(dispatch).toHaveBeenCalledWith(fetchTripSuccess(trip));
        });
    });
});

describe('logout', () => {
    it('Should return the action', () => {
        const action = logout();
        expect(action.type).toEqual(LOGOUT);
    });
});

describe('registerUser', () => {
    it('Should dispatch fetchTripSuccess', () => {
        const user = {};
        const payload = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return user;
                }
            })
        );

        const dispatch = jest.fn();
        return registerUser(user)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users`, payload);
        });
    });
});

describe('fetchNewTripSuccess', () => {
    it('Should return the action', () => {
        const trip = {};
        const action = fetchNewTripSuccess(trip);
        expect(action.type).toEqual(FETCH_NEW_TRIP_SUCCESS);
        expect(action.trip).toEqual(trip);
    });
});

describe('createNewTrip', () => {
    it('Should dispatch fetchNewTripSuccess', () => {
        const trip = {};
        const payload = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(trip)
        }
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return trip;
                }
            })
        );

        const dispatch = jest.fn();
        return createNewTrip(trip)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/trips`, payload);
            expect(dispatch).toHaveBeenCalledWith(fetchNewTripSuccess(trip));
        });
    });
});

describe('editTripSuccess', () => {
    it('Should return the action', () => {
        const newTrip = {};
        const action = editTripSuccess(newTrip);
        expect(action.type).toEqual(EDIT_TRIP_SUCCESS);
        expect(action.trip).toEqual(newTrip);
    });
});

describe('editTrip', () => {
    it('Should dispatch editTripSuccess', () => {
        const newTrip = {id: "123"};
        const payload = {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTrip)
        }
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return newTrip;
                }
            })
        );

        const dispatch = jest.fn();
        return editTrip(newTrip)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/trips/${newTrip.id}`, payload);
            expect(dispatch).toHaveBeenCalledWith(editTripSuccess(newTrip));
        });
    });
});

describe('deleteTripSuccess', () => {
    it('Should return the action', () => {
        const tripId = "456";
        const action = deleteTripSuccess(tripId);
        expect(action.type).toEqual(DELETE_TRIP_SUCCESS);
        expect(action.trip).toEqual(tripId);
    });
});

describe('deleteTrip', () => {
    it('Should dispatch deleteTripSuccess', () => {
        const tripId = "456";
        const payload = {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({id: tripId})
        }
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return tripId;
                }
            })
        );

        const dispatch = jest.fn();
        return deleteTrip(tripId)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/trips/${tripId}`, payload);
            expect(dispatch).toHaveBeenCalledWith(deleteTripSuccess(tripId));
        });
    });
});

describe('deleteItineraryItemSuccess', () => {
    it('Should return the action', () => {
        const tripId = "456";
        const itineraryItemId = "123";
        const action = deleteItineraryItemSuccess(itineraryItemId, tripId);
        expect(action.type).toEqual(DELETE_ITINERARY_ITEM_SUCCESS);
        expect(action.itineraryItemId).toEqual(itineraryItemId);
    });
});

describe('deleteItineraryItem', () => {
    it('Should dispatch deleteItineraryItemSuccess', () => {
        const tripId = "456";
        const itineraryItemId = "123";
        const payload = {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                itineraryItemId: itineraryItemId,
                tripId: tripId
            })
        }
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return itineraryItemId;
                }
            })
        );

        const dispatch = jest.fn();
        return deleteItineraryItem(itineraryItemId, tripId)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/itineraryItems/${itineraryItemId}`, payload);
            expect(dispatch).toHaveBeenCalledWith(deleteItineraryItemSuccess(itineraryItemId, tripId));
        });
    });
});


describe('fetchNewItineraryItemSuccess', () => {
    it('Should return the action', () => {
        const itineraryItem = {};
        const tripId = "123";
        const action = fetchNewItineraryItemSuccess(itineraryItem);
        expect(action.type).toEqual(FETCH_NEW_ITINERARY_ITEM_SUCCESS);
        expect(action.translatedItineraryItem).toEqual(itineraryItem);
    });
});

describe('createNewItineraryItem', () => {
    it('Should dispatch fetchNewItineraryItemSuccess', () => {
        const itineraryItem = {};
        const tripId = "123";
        const payload = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(itineraryItem)
        }
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return itineraryItem;
                }
            })
        );

        const dispatch = jest.fn();
        return createNewItineraryItem(itineraryItem)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/itineraryItems`, payload);
            expect(dispatch).toHaveBeenCalledWith(fetchNewItineraryItemSuccess(itineraryItem));
        });
    });
});

describe('editVoteSuccess', () => {
    it('Should return the action', () => {
        const newVote = {};
        const action = editVoteSuccess(newVote);
        expect(action.type).toEqual(EDIT_VOTE_SUCCESS);
        expect(action.vote).toEqual(newVote);
    });
});

describe('editVote', () => {
    it('Should dispatch editVoteSuccess', () => {
        const newVote = {id: "123"};
        const payload = {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newVote)
        }
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return newVote;
                }
            })
        );

        const dispatch = jest.fn();
        return editVote(newVote)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/votes/${newVote.id}`, payload);
            expect(dispatch).toHaveBeenCalledWith(editVoteSuccess(newVote));
        });
    });
});

describe('fetchVoteSuccess', () => {
    it('Should return the action', () => {
        const vote = {};
        const action = fetchVoteSuccess(vote);
        expect(action.type).toEqual(FETCH_VOTE_SUCCESS);
        expect(action.vote).toEqual(vote);
    });
});

describe('getVote', () => {
    it('Should dispatch fetchVoteSuccess', () => {
        const vote = {};
        const voteId = "123"
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return vote;
                }
            })
        );

        const dispatch = jest.fn();
        return getVote(voteId)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/votes/${voteId}`);
            expect(dispatch).toHaveBeenCalledWith(fetchVoteSuccess(vote));
        });
    });
});

describe('inviteSuccess', () => {
    it('Should return the action', () => {
        const action = inviteSuccess();
        expect(action.type).toEqual(INVITE_SUCCESS);
    });
});

describe('invite', () => {
    it('Should send invite', () => {
        const email = "";
        const inviterName = "";
        const tripName = "";
        const emailBody = {
            to: email,
            inviter: inviterName,
            trip: tripName
        }
        const payload = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(emailBody)
        }
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return emailBody;
                }
            })
        );
        const dispatch = jest.fn();
        return invite(email, inviterName, tripName)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/send-email`, payload);
            expect(dispatch).toHaveBeenCalledWith(inviteSuccess());
        });
    });
});

describe('setAuthToken', () => {
    it('Should return the action', () => {
        const authToken = "123"
        const action = setAuthToken(authToken);
        expect(action.type).toEqual(SET_AUTH_TOKEN);
        expect(action.authToken).toEqual(authToken);
    });
});

describe('clearAuth', () => {
    it('Should return the action', () => {
        const action = clearAuth();
        expect(action.type).toEqual(CLEAR_AUTH);
    });
});

describe('authRequest', () => {
    it('Should return the action', () => {
        const action = authRequest();
        expect(action.type).toEqual(AUTH_REQUEST);
    });
});

describe('authSuccess', () => {
    it('Should return the action', () => {
        const currentUser = "Teddy"
        const action = authSuccess(currentUser);
        expect(action.type).toEqual(AUTH_SUCCESS);
        expect(action.currentUser).toEqual(currentUser);
    });
});

describe('authError', () => {
    it('Should return the action', () => {
        const error = "Unauthorized"
        const action = authError(error);
        expect(action.type).toEqual(AUTH_ERROR);
        expect(action.error).toEqual(error);
    });
});