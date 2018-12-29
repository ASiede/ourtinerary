import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {logout} from '../actions/index';
import RegistrationForm from './registration-form';
import LoginForm from './login-form';
import threeLines from '../screenshots/three-lines.png';
import globe from '../screenshots/globe.png';
import './nav.css';

export class Nav extends React.Component {
	constructor(props) { 
		super(props);
		this.state = {
			className: 'modal',
			loggedInClassName: 'logged-in-modal'
		} 
	}

	scrollToTop() {
        window.scrollTo({
        	top: 0,
        	behavior: 'smooth'
        })
    }

	showModal(e) {
		this.setState({
			className: 'modal-show'
		})
	}

	hideModal(e) {
		this.setState({
			className: 'modal'
		})
	}

	showLoggedInModal(e) {
		this.setState({
			loggedInClassName: 'logged-in-modal-show'
		})
	}

	hideLoggedInModal(e) {
		this.setState({
			loggedInClassName: 'logged-in-modal'
		})
	}

	logout() {
		this.scrollToTop()
		return this.props.dispatch(logout());
	}

	render() {
		const username = this.props.currentUser ? this.props.currentUser.username: '';
		const navLinks = this.props.loggedIn ? 
			<div>
				<img 
				onClick={(e) => this.showLoggedInModal(e)}
				 className="login-lines" 
				 src={threeLines}
				 alt="three lines"></img>

				<div className={this.state.loggedInClassName}  >
					<div className="logged-in-modal-content">
						<span onClick={(e) => this.hideLoggedInModal(e)} className="close">&times;</span>
    					<p>Currrently logged in as {username}</p>
						<p className="modal-select" 
						onClick={(e) => this.hideLoggedInModal(e)}
						onClick={(e) => this.scrollToTop()}>
						<Link to={`/user/${this.props.currentUser}`}>MyTrips</Link></p>
						<p className="modal-select"
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
					src={threeLines}
					alt="three lines">
				</img>

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
		<nav role="navigation">
			<img className="globe" src={globe}></img>
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