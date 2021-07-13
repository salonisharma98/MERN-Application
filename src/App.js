import React from 'react';
import Login from './ui/LoginSignup/Login';
import Signup from './ui/LoginSignup/Signup';
import Home from './ui/Home/HomePage';
import Userlist from './ui/Searchuser/Userlist'
import Profile from './ui/Home/Profile'
import HomeNav from './ui/Home/HomeNav'
import Searchuser from './ui/Home/Searchuser'
import Headers from './ui/Home/Headers'
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
				{/* <Route path="/LoggedProfile/:profileid" exact component={LoggedProfile} />	 */}
				<Route path="/Searchuser" exact component={Searchuser} />
				<Route path="/Searchuser/:id" exact component={Profile} />
			</Switch>
		</Router>
	);
}

export default App;
