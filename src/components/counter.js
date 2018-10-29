import React from 'react';
import {connect} from 'react-redux'

import {addToCount} from '../actions'

export class Counter extends React.Component {

	addToCount() {
		this.props.dispatch(addToCount());
	}

	render() { 
		// const count = this.props.count
		return (
		<div>
			<p>Your number is {this.props.count} </p>
			<button onClick={e => this.addToCount()} type="click">Count</button>
		</div>
		)
	}
}

Counter.defaultProps = {
	count: 0
}

const mapStateToProps = state => ({
		count: state.count	
});

export default connect(mapStateToProps)(Counter)