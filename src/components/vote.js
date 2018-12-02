import React from 'react';
import {connect} from 'react-redux';
import {getVote, editVote} from '../actions';

export class Vote extends React.Component { 
    constructor(props) {
      super(props);
    }

    componentDidMount() {
     this.props.dispatch(getVote(this.props.voteId))
    }

    handleVote(voteId, status){
		const vote = {
		  id: voteId,
		  status: status
		}

	return this.props.dispatch(editVote(vote));

	}

    render() {

    	const vote = this.props.ourtinerary.votes.length>0 ? this.props.ourtinerary.votes.find(vote => vote.id === this.props.voteId): [];

    	let voteHTML = '';

			if (vote && vote.status === 'Yes') {
				voteHTML = <li key={vote.id}>{vote.user.username} 👍</li>

			} else if (vote && vote.status === 'No'){
				voteHTML = <li key={vote.id}>{vote.user.username} 👎</li>

			} else if (vote && vote.user && this.props.currentUser && (this.props.currentUser.username === vote.user.username)) {
				voteHTML =<li key={vote.id}>{vote.user.usernam} Choose your vote:<span onClick={() => this.handleVote(vote.id,'Yes')}>👍</span><span onClick={() => this.handleVote(vote.id, 'No')}>👎</span></li>

			} else if (vote && vote.user) {
				voteHTML = <li key={vote.id}>{vote.user.username} hasn't voted yet </li>
			} 

        return (
            <div>
                {voteHTML}
            </div>
        )} 
}

const mapStateToProps = state => ({
  currentUser: state.ourtinerary.currentUser,
  ourtinerary: state.ourtinerary
  
});

export default connect(mapStateToProps)(Vote);
