import * as actions from '../actions'

const initialState = {
	trips: [],
	users: [],
	itineraryItems: [],
	votes: [],
	authToken: null,
	currentUser: null,
	loading: false,
	error: null,
	newlyCreatedTrip: null
};

export const ourtineraryReducer = (state=initialState, action) => {

	let expression = action.type
	switch (expression) {

		case actions.LOGOUT: 
			return Object.assign({}, state, {
				currentUser: null
			});
			break;		
		
		case actions.FETCH_TRIPS_SUCCESS:
			
			return Object.assign({}, state, {
				trips: action.trips.trips
			});
			break;

		case actions.FETCH_TRIP_SUCCESS:
			return Object.assign({}, state, {
				trips: [...state.trips, action.trip],
			});
			break;

		case actions.EDIT_TRIP_SUCCESS:
			let tripsWithEditedTrip = state.trips.filter(trip => {
				if(trip.id !== action.trip.id) {
					return trip;
				}
			})
			return Object.assign({}, state, {
				trips: [...tripsWithEditedTrip, action.trip]
			});
			break;	

		case actions.DELETE_TRIP_SUCCESS:
			let trips = state.trips.filter((trip) => {
				if(trip.id !== action.tripId) {
					return trip;
				};
			});
			return Object.assign({}, state, {
				trips
			});
			break;

		case actions.DELETE_ITINERARY_ITEM_SUCCESS:
			let tripsWithDeletedItem = state.trips.map((trip) => {
				if(trip.id !== action.tripId) {
					return trip;
				};
				let filteredItineraryItems = trip.itineraryItems.filter((itineraryItem => {
					if (itineraryItem._id !== action.itineraryItemId) {
						return itineraryItem;
					};
				}));
				return Object.assign({}, trip, {
					itineraryItems: [...filteredItineraryItems]
				})
			});
			return Object.assign({}, state, {
				trips: tripsWithDeletedItem
			});
			break;						

		case actions.FETCH_USER_SUCCESS:
			return Object.assign({}, state, {
				users: [...state.users, action.user]
			});
			break;

		case actions.FETCH_USERS_SUCCESS:
			
			return Object.assign({}, state, {
				users: action.users.users
			});
			break;	
			

		case actions.FETCH_ITINERARY_ITEM_SUCCESS:
			let tripsToUpdateWithItems = state.trips.map((trip => {
				if(!trip.id === action.tripId) {
					return trip;
				}

				return Object.assign({}, trip, {
					itineraryItems: [...trip.itineraryItems, action.itineraryItem]
				})
			}))

			return Object.assign({}, state, {
				itineraryItems: [...state.itineraryItems, action.itineraryItem],
				// trips: tripsToUpdateWithItems
			});
			break;		

		case actions.FETCH_NEW_TRIP_SUCCESS:
			const trip = action.trip
			trip._id = action.trip.id
			let users = state.users.map( user => {
				if(user.id ==! action.trip.tripLeader.id) {
					return user;
				}
				return Object.assign({}, user, {
					trips: [...user.trips, trip]
				})
			})

			return Object.assign({}, state, {
				trips: [...state.trips, action.trip],
				newlyCreatedTrip: action.trip,
				users
			});
			break;

		case actions.FETCH_NEW_ITINERARY_ITEM_SUCCESS:
			console.log(action.translatedItineraryItem)
			
			let tripsWithNewItineraryItem = state.trips.map( trip => {
				if(trip.id !== action.tripId) {
					return trip;
				}
				
				return Object.assign({}, trip, {
					itineraryItems: [...trip.itineraryItems, action.translatedItineraryItem]
				})
			})
			return Object.assign({}, state, {
				trips: tripsWithNewItineraryItem,
				votes: [...state.votes, ...action.translatedItineraryItem.votes]
			})
			break;

		case actions.FETCH_VOTE_SUCCESS:
			return Object.assign({}, state, {
				votes: [...state.votes, action.vote]
			});
			break;		

		case actions.EDIT_VOTE_SUCCESS:
			let votes = state.votes.map((vote) => {
				if(vote.id !== action.vote.id) {
					return vote;
				}
				return Object.assign({}, vote, {
					status: action.vote.status
				})
			})

			return Object.assign({}, state, {
				votes
			})
			break;

		// FOLLOWING CASES ARE IN REGARDS TO LOGGING IN	
		case actions.SET_AUTH_TOKEN:
			return Object.assign({}, state, {
            	authToken: action.authToken
        	});
			break;

		case actions.CLEAR_AUTH:
			return Object.assign({}, state, {
            	authToken: null,
            	currentUser: null
        	});
        	break;

		case actions.AUTH_REQUEST:
			return Object.assign({}, state, {
            	loading: true,
            	error: null
        	});
        	break;

		case actions.AUTH_SUCCESS:
			return Object.assign({}, state, {
            	loading: false,
            	currentUser: action.currentUser
        	});
        	break;

		case actions.AUTH_ERROR:
			return Object.assign({}, state, {
            loading: false,
            error: action.error
        });

		default:
		return state;
	}
}











