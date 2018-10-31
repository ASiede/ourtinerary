import {addToCount} from '../actions'

const initialState = {
	trips: [{
			id: 1,
			name: 'NYC',
			date: '2/2/2020-2/20/2020',
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
			date: '2/2/2020-2/20/2020',
			location: 'New York City, NY',
			tripleader: 'Rupaul',
			itineraryItems: []
		}, 
		{
			id: 3,
			name: 'Spring Break',
			date: '2/2/2020-2/20/2020',
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
		password: 'password'
	},
	{
		id: 30,
		username: 'Katya',
		password: 'password'
	},
	{
		id: 40,
		username: 'Trixie',
		password: 'password'
	}]
}

export const ourtineraryReducer = (state=initialState, action) => {
	if (addToCount.type === addToCount.ADD_TO_COUNT) {
		const newCount = state.count + 1
		return Object.assign({}, state, {
			count: newCount
		})
	}
	return state
}