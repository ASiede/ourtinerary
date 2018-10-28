import {addToCount} from '../actions'

const initialState = {
	count: 0
}

export const reducer = (state=initialState, action) => {
	if (addToCount.type === addToCount.ADD_TO_COUNT) {
		const newCount = state.count + 1
		return Object.assign({}, state, {
			count: newCount
		})
	}
	return state
}