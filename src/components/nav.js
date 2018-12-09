import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {logout} from '../actions/index';
import RegistrationForm from './registration-form';
import LoginForm from './login-form'
import './nav.css'

export class Nav extends React.Component {
	constructor(props) { 
		super(props);
		this.state = {
			className: 'modal',
			loggedInClassName: 'logged-in-modal'
		} 
	}

	showModal(e) {
		this.setState({
			className: 'modal-show'
		})
	}

	hideModal(e) {
		this.setState({
			// modalVisable: !this.state.modalVisable
			className: 'modal'
		})
	}

	showLoggedInModal(e) {
		console.log('clicked')
		this.setState({
			loggedInClassName: 'logged-in-modal-show'
		})
	}

	hideLoggedInModal(e) {
		this.setState({
			// modalVisable: !this.state.modalVisable
			loggedInClassName: 'logged-in-modal'
		})
	}

	logout() {
		return this.props.dispatch(logout());
	}

	render() {

		const className = 'box'

		const username = this.props.currentUser ? this.props.currentUser.username: '';
		const navLinks = this.props.loggedIn ? 
			<div>
				<img 
				onClick={(e) => this.showLoggedInModal(e)}
				 className="login-lines" 
				 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAADVCAMAAABjeOxDAAAAclBMVEUAAAD////Nzc13d3csLCxoaGgzMzPU1NTm5ub8/PxwcHD39/cpKSnIyMhFRUU6OjqHh4e4uLirq6vBwcHd3d1LS0uzs7NtbW1kZGQhISF/f38/Pz+lpaWOjo7x8fEQEBBcXFyYmJhTU1MaGhoTExOcnJzr4P1zAAAEP0lEQVR4nO2d23aiQBBFS1BbwCsqKl5izOT/f3FA4nDVeQlVy1O13/J29opod3V1QYMmLk73x+Gbc9ynsWupUf3P2Y6A2M1eyCZf0vF+m0PyRNYNpaP1wdB1yS6lY/XFsiUbzKUz9cc8qMtGcE9rlUNUlQ2gXTPboCJ7lE7TN/NSNpXO0j/Lh6wnnYQD9yML/sAWHArZk3QOHuK7rHQKJj5y2ZV0Ci7WmexNOgQX1wFF0hn4CGgmHYEPjz6lI/DxTVClideEtJCOwMec/khH4OMgHYCTD+kAnHyQil1AwZSAa09NbuRLR+AjJSUbvJyYnHQEPhxp2c5mZFs8NetFP5NVUW7LcXlZZiydgofFvQa1lo7Bw6wopW6lc3Bw+6kbT6SDcDB5HH/E0kn6JykPtuDXjGn1fPYqnaZfrvWT9710nj7ZN3sqYFsqiM7tBhLYn9t1V2tQBPk15UddrUH5D24oHe23CSdVv0Y7XxQDnXNt46hu15DNCFxyTv03Jz0nLmiptWWBMVlUTBYVk0XFZFExWVRMFhWTRcVkUTFZVEwWFZNFxWRRMVlUTBYVk0XFZFExWVRMFpUu2WDivDfHTdq9Mm3ZaOWDzMAa+qvopawH1py6957KOsBLiEfXLQvXuFgQdshupEP1x6YpC9ttnLOuy4IPmFlVZeHHkMxKWQW3mCb/ZEGWEa8YPmTP0kk4OBeyCj7EOZO7LOhiokmYy16kU3BxyWTVDIT6zGTVzFuZDkjJ11POhBLpCHysCPh2ZZMlXaUj8LGnqXQEPsaaZn0pGleXjzVT9J/90vXMXqUj8LHX9Dt71rWCUrQ2vija9Qw17We/tVUqtNSgfE3VxYuiuvGnohOBsc6zHvxTPE/r+Sz4yfvjxYcKeio+Wj0VuN0yfmdrEGQf1PxJH9QAsMOt/lpWxb2LBWq6UqExWVRMFhWTRcVkUTFZVEwWFZNFxWRRMVlUTBYVk0XFZFExWVRMFhWTRcVkUTFZVEwWlbZs5MVLPxy9NaG/jL1mY1BL9vIN1OV2PF1eyG7AGtyIRpsnstFOOlof7DrfPwvbX71qy6bSmfojbcoCvWO3zbUuC+1KdKvKQn41VQlL2ZN0lv6JH7IK7jAVt5hyWaBF03O2hSz0lZ6S9V0W5E7A/xjnsp50Ci68THYkHYKLMJOVzsDHgNR8iokcfUtH4ONEoNcNu/BJxYqi4EZqpq2QptFXpGmoWS6raGTdgRbSEfjYEnyRoiQkNeOgKFs/wQ8fKfEokI7AR7brAa+iluwzWdhjjybrvCwjHYKJP/caVCwdg4ekKKUepHNwMPypG6soVrjH8YeC4bDn8mALfge/rZziBeCP7bR2PhtB206DRpvBVjpRf9zaDSSwczXPHd0yAwe5j19UOqFqTV8ruPrbcFX1a7Tzeb50vN/Er7+ktKNRc5MsR9vF+K1ZbHfLZNNS+wszzXIUlsUJ6wAAAABJRU5ErkJggg=="
				  alt="three lines"></img>

				<div className={this.state.loggedInClassName}  >
					<div className="logged-in-modal-content">
						<span onClick={(e) => this.hideLoggedInModal(e)} className="close">&times;</span>
    					<p>Currrently logged in as {username}</p>
						<p onClick={(e) => this.hideLoggedInModal(e)}><Link to={`/user/${this.props.currentUser}`}>MyTrips</Link></p>
						<p 
						onClick={(e) => this.hideLoggedInModal(e)} 
						onClick={() => this.logout()}
						><Link to={`/`}>Log Out</Link></p>
						
					</div>
				</div>  

				
			</div>
			: 
			<div className='join'>
				<img 
				onClick={(e) => this.showModal(e)}
				 className="login-lines" 
				 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAADVCAMAAABjeOxDAAAAclBMVEUAAAD////Nzc13d3csLCxoaGgzMzPU1NTm5ub8/PxwcHD39/cpKSnIyMhFRUU6OjqHh4e4uLirq6vBwcHd3d1LS0uzs7NtbW1kZGQhISF/f38/Pz+lpaWOjo7x8fEQEBBcXFyYmJhTU1MaGhoTExOcnJzr4P1zAAAEP0lEQVR4nO2d23aiQBBFS1BbwCsqKl5izOT/f3FA4nDVeQlVy1O13/J29opod3V1QYMmLk73x+Gbc9ynsWupUf3P2Y6A2M1eyCZf0vF+m0PyRNYNpaP1wdB1yS6lY/XFsiUbzKUz9cc8qMtGcE9rlUNUlQ2gXTPboCJ7lE7TN/NSNpXO0j/Lh6wnnYQD9yML/sAWHArZk3QOHuK7rHQKJj5y2ZV0Ci7WmexNOgQX1wFF0hn4CGgmHYEPjz6lI/DxTVClideEtJCOwMec/khH4OMgHYCTD+kAnHyQil1AwZSAa09NbuRLR+AjJSUbvJyYnHQEPhxp2c5mZFs8NetFP5NVUW7LcXlZZiydgofFvQa1lo7Bw6wopW6lc3Bw+6kbT6SDcDB5HH/E0kn6JykPtuDXjGn1fPYqnaZfrvWT9710nj7ZN3sqYFsqiM7tBhLYn9t1V2tQBPk15UddrUH5D24oHe23CSdVv0Y7XxQDnXNt46hu15DNCFxyTv03Jz0nLmiptWWBMVlUTBYVk0XFZFExWVRMFhWTRcVkUTFZVEwWFZNFxWRRMVlUTBYVk0XFZFExWVRMFpUu2WDivDfHTdq9Mm3ZaOWDzMAa+qvopawH1py6957KOsBLiEfXLQvXuFgQdshupEP1x6YpC9ttnLOuy4IPmFlVZeHHkMxKWQW3mCb/ZEGWEa8YPmTP0kk4OBeyCj7EOZO7LOhiokmYy16kU3BxyWTVDIT6zGTVzFuZDkjJ11POhBLpCHysCPh2ZZMlXaUj8LGnqXQEPsaaZn0pGleXjzVT9J/90vXMXqUj8LHX9Dt71rWCUrQ2vija9Qw17We/tVUqtNSgfE3VxYuiuvGnohOBsc6zHvxTPE/r+Sz4yfvjxYcKeio+Wj0VuN0yfmdrEGQf1PxJH9QAsMOt/lpWxb2LBWq6UqExWVRMFhWTRcVkUTFZVEwWFZNFxWRRMVlUTBYVk0XFZFExWVRMFhWTRcVkUTFZVEwWlbZs5MVLPxy9NaG/jL1mY1BL9vIN1OV2PF1eyG7AGtyIRpsnstFOOlof7DrfPwvbX71qy6bSmfojbcoCvWO3zbUuC+1KdKvKQn41VQlL2ZN0lv6JH7IK7jAVt5hyWaBF03O2hSz0lZ6S9V0W5E7A/xjnsp50Ci68THYkHYKLMJOVzsDHgNR8iokcfUtH4ONEoNcNu/BJxYqi4EZqpq2QptFXpGmoWS6raGTdgRbSEfjYEnyRoiQkNeOgKFs/wQ8fKfEokI7AR7brAa+iluwzWdhjjybrvCwjHYKJP/caVCwdg4ekKKUepHNwMPypG6soVrjH8YeC4bDn8mALfge/rZziBeCP7bR2PhtB206DRpvBVjpRf9zaDSSwczXPHd0yAwe5j19UOqFqTV8ruPrbcFX1a7Tzeb50vN/Er7+ktKNRc5MsR9vF+K1ZbHfLZNNS+wszzXIUlsUJ6wAAAABJRU5ErkJggg=="
				  alt="three lines"></img>

				
				
				<div className={this.state.className}  >
					<div className="login-modal-content">
						<span onClick={(e) => this.hideModal(e)} className="close">&times;</span>
    					<LoginForm />
    					<RegistrationForm />
					</div>
				</div>
				
				
			</div>;

		return (
		
		<div className="nav-wrapper">
		<nav>
			<img className="globe" src="https://www.issaquahhighlands.com/wp-content/uploads/2015/06/Travel-Night-globe.png"></img>
			<h1 className="title">OURtinerary</h1>


			{navLinks}
		</nav>
		</div>

	
		)
	}	
}

const mapStateToProps = state => ({
	currentUser: state.ourtinerary.currentUser,
	loggedIn: state.ourtinerary.currentUser !== null
});

export default connect(mapStateToProps)(Nav);