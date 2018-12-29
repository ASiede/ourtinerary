import React from 'react';
import {connect} from 'react-redux';
import {getVote, editVote} from '../actions';
import pencil from '../screenshots/pencil.png';
import './vote.css';

export class Vote extends React.Component { 
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
      	const vote = this.props.ourtinerary.votes && this.props.ourtinerary.votes.length>0 ? this.props.ourtinerary.votes.find(vote => vote.id === this.props.voteId): [];
        let editVoteHTML = (vote && vote.user && this.props.currentUser && (this.props.currentUser.username === vote.user.username) && vote.status !== '') ?
            
            <img className="change-vote" onClick={() => this.handleVote(vote.id,'')} src={pencil} alt="edit-pencil"></img>
            :
            '';

      	let voteHTML = '';

  			if (vote && vote.status === 'Yes') {
  				  voteHTML = <p className="vote" key={vote.id}> {editVoteHTML} {vote.user.username}: 👍 </p>

  			} else if (vote && vote.status === 'No'){
  				  voteHTML = <p className="vote" key={vote.id}>{editVoteHTML} {vote.user.username}: 👎 </p>

  			} else if (vote && vote.user && this.props.currentUser && (this.props.currentUser.username === vote.user.username)) {
  				  voteHTML =<p className="vote" key={vote.id}>{vote.user.usernam}Your Vote:<span onClick={() => this.handleVote(vote.id,'Yes')}>👍</span><span onClick={() => this.handleVote(vote.id, 'No')}>👎</span></p>

  			} else if (vote && vote.user) {
  				  voteHTML = <p className="vote" key={vote.id}>{vote.user.username}: None </p>
  			} 
          return (
              <div aria-live="assertive">
                  {voteHTML}
              </div>
          )} 
}

const mapStateToProps = state => ({
    currentUser: state.ourtinerary.currentUser,
    ourtinerary: state.ourtinerary
});

export default connect(mapStateToProps)(Vote);
