import {fetchTripsSuccess, 
	FETCH_TRIPS_SUCCESS, 
	getTrips,
	FETCH_USER_SUCCESS,
	fetchUserSuccess,
	getUser

} from './index';

describe('fetchTripsSuccess', () => {
    it('Should return the action', () => {
        const trips = [];
        const action = fetchTripsSuccess(trips);
        expect(action.type).toEqual(FETCH_TRIPS_SUCCESS);
        expect(action.trips).toEqual(trips);
    });
});

//NOT WORKING

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
            expect(fetch).toHaveBeenCalledWith('/trips/');
            expect(dispatch).toHaveBeenCalledWith(fetchBoardSuccess(trips));
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

//NOT WORKING

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
            expect(fetch).toHaveBeenCalledWith('/user');
            expect(dispatch).toHaveBeenCalledWith(fetchUserSuccess(user));
        });
    });
});

