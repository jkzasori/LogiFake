import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import fire from './config/Fire';

class Login extends Component {
	constructor(props) {
		super(props);
		this.login = this.login.bind(this);
		this.sigup = this.sigup.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			email:'',
			password:''
		}
	}

	login(e) {
		e.preventDefault();
		fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
		}).catch((error) => {
			console.log(error);
		});
	}
	sigup(e){
		e.preventDefault();
		fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
		.catch((error)=>{
			console.log(error);
		})
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value});
	}
	render() {
		return (
			<div className="col-md-6">
				<form>
					<div className="form-group">
						<label htmlFor="InputMail">Email Address</label>
						<input value={this.state.email} onChange={this.handleChange} type="email" name="email" 
						className="form-control" id="InputMail" aria_describeby="emailHelp" 
						placeholder="Enter email" />
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with 
						anyone else.</small>
					</div>
					<div className="form-group">
						<label htmlFor="InputPassword">Password</label>
						<input value={this.state.password} onChange={this.handleChange} type="password"
						name="password" className="form-control" id="InputPassword" placeholder="password" />
					</div>
					<button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
					<button onClick={this.sigup} style={{marginLeft: '25px'}} className="btn btn-success">Sigup</button>
				</form>
			</div>
			)
	}
}
export default Login;
