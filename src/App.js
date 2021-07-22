import React from 'react';
import Login from './ui/LoginSignup/Login';
import Signup from './ui/LoginSignup/Signup';
import Home from './ui/Home/HomePage';
import HomeNav from './ui/Home/HomeNav'
import Searchuser from './ui/Home/Searchuser'
import OtherUser from './ui/Home/OtherUser'
import LoggedProfile from './ui/Home/LoggedProfile'
import LoggedHistory from './ui/Home/LoggedHistory'

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

function App() {
	
	return (
		
		<Router>		
			<Switch>	
			<Route path="/" exact component={Login} />
				<Route path="/Signup" exact component={Signup} />
				<Route path="/Home" exact component={Home} />
				<Route path="/LoggedProfile" exact component={LoggedProfile} />	
				<Route path="/Searchuser" exact component={Searchuser} />
				<Route path="/Searchuser/:id" exact component={OtherUser} />
				<Route path="/LoggedHistory" exact component={LoggedHistory}></Route>
				</Switch>			
		</Router>
	
		
	);
}

export default App;
