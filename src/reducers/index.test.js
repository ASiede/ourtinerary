import {ourtineraryReducer} from './index';
import {logout, fetchTripsSuccess, fetchTripSuccess, editTripSuccess} from '../actions'

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

// NOT WORKING
// describe('fetchTripsSuccess', () => {
//     let state = {
//     	trips: []
//     }
//     const trip1 = {
//     	id: "123"
//     }
//     it('Should get trips', () => {
//         state = ourtineraryReducer(state, fetchTripsSuccess());
//         expect(state).toEqual({
//             trips: [trip1]
//         });
//     });
// });

//NOT WORKING
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


