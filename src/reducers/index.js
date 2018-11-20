import * as actions from '../actions'

const initialState = {
	currentUser: null,
	trips: [{
			id: 1,
			name: 'NYC',
			dates: '2/2/2020-2/20/2020',
			location: 'New York City, NY',
			tripleader: 'Rupaul',
			collaborators:["Rupaul", "Alyssa", "Katya", "Trixie"],
			itineraryItems: [
				{
					type: 'Hotel',
					name: 'Mariot',
					confirmed: false,
					price: 500,
					pool: 'Yes',
					website: 'mariot.com',
					other: 'Close to the airport',
					votes: {
						"Rupaul": 'Yes',
						"Alyssa": 'Yes',
						"Katya": null,
						"Trixie": 'No'
					}
				},

				{
					type: 'Hotel',
					name: 'Motel 6',
					confirmed: true,
					price: 300,
					pool: 'Yes',
					website: 'motel6.com',
					other: '',
					votes: {
						"Rupaul": 'yes',
						"Alyssa": 'Yes',
						"Katya": 'Yes',
						"Trixie": 'Yes'
					}	
				},
				{
					type: 'Restaurant',
					name: 'Yum Yum',
					catagory: 'chinese',
					confirmed: true,
					price: 'cheap',
					website: 'yumyum.com',
					other: 'super yelp reviews',
					votes: {
						"Rupaul": 'Yes',
						"Alyssa": 'Yes',
						"Katya": 'Yes',
						"Trixie": 'Yes'
					}
				},
				{
					type: 'Activity',
					name: 'National Art Museum',
					confirmed: false,
					price: 'free',
					location: 'googlemaps.link',
					website: 'museum.com',
					votes: {"Rupaul": 'No',
						"Alyssa": 'Yes',
						"Katya": 'No',
						"Trixie": 'Yes'
					}
				}
			]
		}, 
		{
			id: 2,
			name: 'Paris',
			dates: '2/2/2020-2/20/2020',
			location: 'New York City, NY',
			tripleader: 'Rupaul',
			collaborators: ['Rupaul', 'Alyssa'],
			itineraryItems: []
		}, 
		{
			id: 3,
			name: 'Spring Break',
			dates: '2/2/2020-2/20/2020',
			location: 'New York City, NY',
			tripleader: 'Rupaul',
			itineraryItems: []
		}
	],

	users: [{
		id: 10,
		username: 'Rupaul',
		password: 'password',
		tripsById: [1, 2, 3]
	},
	{
		id: 20,
		username: 'Alyssa',
		password: 'password',
		tripsById: [1]
	},
	{
		id: 30,
		username: 'Katya',
		password: 'password',
		tripsById: []
	},
	{
		id: 40,
		username: 'Trixie',
		password: 'password',
		tripsById: []
	}]
}



export const ourtineraryReducer = (state=initialState, action) => {
	
	if (action.type === actions.ADD_TO_COUNT) {
		const newCount = state.count + 1
		return Object.assign({}, state, {
			count: newCount
		});
	}
	

	if (action.type === actions.LOGIN) {
		const currentUser = state.users.find( user => user.username === action.username)
		if (currentUser && currentUser.password === action.password) {
			return Object.assign({}, state, {
			currentUser: currentUser.username
			});
		}	
	} 

	if (action.type === actions.REGISTER_USER) {
		const newUser = {
			firstName: action.firstName,
			lastName: action.lastName,
			username: action.username,
			password: action.password,
			tripsById: []	
		}

		return Object.assign({}, state, {
			users: [...state.users, newUser],
			currentUser: action.username
		});
			
	} 

	if (action.type === actions.CREATE_NEW_TRIP) {
		
		const newTrip = {
			id: action.id,
			name: action.tripName,
			dates: action.dates,
			location: action.location,
			tripLeader: action.tripLeader,
			collaborators: [...action.collaborators],
			itineraryItems: []
		}
		
		let users = state.users.map((user, username)=>{
			if(user.username !== action.tripLeader &&
				!action.collaborators.includes(user.username)) {
					return user;
			}

			return Object.assign({}, user, {
				tripsById: [...user.tripsById, action.id]
			})
		})
		
		return Object.assign({}, state, {
			trips: [...state.trips, newTrip],
			users
		});
	} 

	if (action.type === actions.CREATE_NEW_ITINERARY_ITEM) {
	
	console.log(action.collaborators)	
	const votes = {}	
	action.collaborators.forEach(collaborator => {
		votes[`${collaborator}`] = null
	})
	
	console.log(votes)
		const newItineraryItem = {
			type: action.itineraryType,
			confirmed: false,
			flightNumber: action.flightNumber,
			name: action.name,
			price: action.price,
			foodType: action.foodType,
			pool: action.pool,
			website: action.website,
			other: action.other,
			votes: votes
		} 
		
		let trips = state.trips.map((trip, tripId) => {
			if(trip.id !== action.tripId) {
				return trip;
			}

			return Object.assign({}, trip, {
				itineraryItems: [...trip.itineraryItems, newItineraryItem]
			});
		}) 

		return Object.assign({}, state, {
			trips
		});
			
	} 

	return state;
}
















