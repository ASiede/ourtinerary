import {ourtineraryReducer} from './index';
import {logout, 
    fetchTripsSuccess, 
    fetchTripSuccess, 
    editTripSuccess,
    deleteTripSuccess,
    deleteItineraryItemSuccess,
    fetchUserSuccess,
    fetchUsersSuccess,
    fetchNewTripSuccess,
    fetchNewItineraryItemSuccess,
    fetchVoteSuccess,
    editVoteSuccess,
    setAuthToken,
    clearAuth,
    authRequest,
    authSuccess,
    authError
} from '../actions'

describe('ourtineraryReducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = ourtineraryReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            trips: [],
			users: [],
			itineraryItems: [],
			votes: [],
			authToken: null,
			currentUser: null,
			loading: false,
			error: null,
			newlyCreatedTrip: null
		});
    });
    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = ourtineraryReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });
});    

describe('logout', () => {
    it('Should logout user', () => {
        let state = {
            currentUser: "Loki"
        };
        state = ourtineraryReducer(state, logout());
        expect(state).toEqual({
            currentUser: null
        });
    });
});

describe('fetchTripsSuccess', () => {
    let state = {
    	trips: []
    }
    const trip1 = {
    	id: "123"
    }
    const trips = {trips: [trip1]}

    it('Should get trips', () => {
        state = ourtineraryReducer(state, fetchTripsSuccess(trips));
        expect(state).toEqual({
            trips: [trip1]
        });
    });
}); 

describe('fetchTripSuccess', () => {
    let state = {
    	trips: []
    }
    const trip1 = {
    	id: "123"
    }
    it('Should get trips', () => {
        state = ourtineraryReducer(state, fetchTripSuccess(trip1));
        expect(state.trips).toContain(trip1);
    });
});

describe('editTripSuccess', () => {
    let state = {
    	trips: [{
    		id: "123",
    		name: "A"
    	}]
    }
    const updatedTrip = {
    		id: "123",
    		name: "B"
    	}
    it('Should get trips', () => {
        state = ourtineraryReducer(state, editTripSuccess(updatedTrip));
        expect(state.trips).toContainEqual(updatedTrip);
    });
});

describe('deleteTripSuccess', () => {
    let state = {
        trips: [{
            _id: "123",
            name: "A"
        }]
    }
    const tripId = "123";
    it('Should delete trip', () => {
        state = ourtineraryReducer(state, deleteTripSuccess(tripId));
        expect(state.trips).toHaveLength(0);
    });
});

describe('deleteItineraryItemSuccess', () => {
     let state = {
        trips: [{
            id: "123",
            name: "A",
            itineraryItems: [
                {_id: "456"}
            ]
        }]
    }
    const tripId = "123";
    const itineraryItemId = "456"
    it('Should delete itinerary item', () => {
        state = ourtineraryReducer(state, deleteItineraryItemSuccess(itineraryItemId, tripId));
        expect(state.trips[0].itineraryItems).toHaveLength(0);
    });
});

describe('fetchUserSuccess', () => {
    let state = {
        users: []
    }
    const user1 = {
        id: "123"
    }
    it('Should get user', () => {
        state = ourtineraryReducer(state, fetchUserSuccess(user1));
        expect(state.users).toContain(user1);
    });
});

describe('fetchUsersSuccess', () => {
    let state = {
        users: []
    }
    const user1 = {
        id: "123"
    }
    const users = {users: [user1]}

    it('Should get users', () => {
        state = ourtineraryReducer(state, fetchUsersSuccess(users));
        expect(state).toEqual({
            users: [user1]
        });
    });
}); 

describe('fetchNewTripSuccess', () => {
    let state = {
        trips: [],
        users: []
    }
    const newTrip = {
            id: "123",
            name: "B",
            tripLeader: "Teddy"
        }
    it('Should create new trip', () => {
        state = ourtineraryReducer(state, fetchNewTripSuccess(newTrip));
        expect(state.trips).toContainEqual(newTrip);
    });
});

describe('fetchNewItineraryItemSuccess', () => {
    let state = {
        trips: [{
            id: "456",
            itineraryItems: []
            }
        ],
        users: [],
        votes: []
    }
    const newItineraryItem = {
            id: "123",
            name: "B",
            votes: ["789"]
        }
    it('Should create new itineraryItem', () => {
        state = ourtineraryReducer(state, fetchNewItineraryItemSuccess(newItineraryItem, "456"));
        expect(state.trips[0].itineraryItems).toHaveLength(1)
        expect(state.trips[0].itineraryItems[0].name).toEqual(newItineraryItem.name)
        expect(state.votes).toContainEqual(newItineraryItem.votes[0])
    });
});

describe('fetchVoteSuccess', () => {
    let state = {
        votes: []
    }
    const vote1 = {
        id: "123",
        status: "yes"
    }
    it('Should get vote', () => {
        state = ourtineraryReducer(state, fetchVoteSuccess(vote1));
        expect(state.votes).toContain(vote1);
    });
});

describe('editVoteSuccess', () => {
    let state = {
        votes: [{
            id: "123",
            status: "Yes"
        }]
    }
    const updatedVote = {
            id: "123",
            status: "No"
        }
    it('Should edit vote', () => {
        state = ourtineraryReducer(state, editVoteSuccess(updatedVote));
        expect(state.votes).toContainEqual(updatedVote);
        expect(state.votes[0].status).toEqual(updatedVote.status);
    });
});

describe('setAuthToken', () => {
    it('Should set auth token', () => {
        let state = {
            authToken: null
        }
        const authToken = "1A"
        state = ourtineraryReducer(state, setAuthToken(authToken));
        expect(state).toEqual({
            authToken: authToken
        });
    });
});

describe('clearAuth', () => {
    it('Should clear auth token', () => {
        let state = {
            authToken: "1A"
        }
        state = ourtineraryReducer(state, clearAuth());
        expect(state).toEqual({
            authToken: null,
            currentUser: null
        });
    });
});

describe('authRequest', () => {
    it('Should update loading to true and error to null', () => {
        let state = {
            loading: false
        }
        state = ourtineraryReducer(state, authRequest());
        expect(state).toEqual({
            loading: true,
            error: null
        });
    });
});

describe('authSuccess', () => {
    it('Should update loading to false and update currentUser', () => {
        let state = {
            loading: true
        }
        const currentUser = "123"
        state = ourtineraryReducer(state, authSuccess(currentUser));
        expect(state).toEqual({
            loading: false,
            currentUser: currentUser
        });
    });
});

describe('authError', () => {
    it('Should update loading to false and error to error', () => {
        let state = {
            loading: true
        }
        const error = "Unauthorized"
        state = ourtineraryReducer(state, authError(error));
        expect(state).toEqual({
            loading: false,
            error: error
        });
    });
});








