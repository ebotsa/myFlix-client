import React, { useState } from 'react';
	import PropTypes from 'prop-types';
	import "./registration-view.scss";
	

	export function RegistrationView(props) {
	    const [username, setUsername] = useState('');
	    const [password, setPassword] = useState('');
	

	    const handleSubmit = (event) => {
	        event.preventDefault();
	        console.log(username, password);
	        props.onLoggedIn(username);
	    };
	

	    return (
	        <form>
	            <label>
	                Username:
	                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
	            </label>
	            <label>
	                Password:
	                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
	            </label>
	            <button type="submit" onClick={handleSubmit}>Submit</button>
	        </form>
	    );
	}
	

	RegistrationView.propTypes = {
	    registration: PropTypes.shape({
	        Username: PropTypes.string.isRequired,
	        Password: PropTypes.string.isRequired,
	    }).isRequired,
	};