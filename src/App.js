import React from 'react';
import Login from './ui/LoginSignup/Login';
import Signup from './ui/LoginSignup/Signup';
import Home from './ui/Home/HomePage';
import Profile from './ui/Home/Profile'
import HomeNav from './ui/Home/HomeNav'
import Searchuser from './ui/Home/Searchuser'
import OtherUser from './ui/Home/OtherUser'
import LoggedProfile from './ui/Home/LoggedProfile'

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

function App() {
	
	return (
		
		<Router>
			<HomeNav/>			
			<Switch>	
			<Route path="/" exact component={Login} />
				<Route path="/Signup" exact component={Signup} />
				<Route path="/Home" exact component={Home} />
				<Route path="/LoggedProfile" exact component={LoggedProfile} />	
				<Route path="/Searchuser" exact component={Searchuser} />
				<Route path="/Searchuser/:id" exact component={OtherUser} />
				</Switch>			
		</Router>
		
	);
}

export default App;
