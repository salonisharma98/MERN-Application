import React from 'react';
import Login from './ui/Login';
import Signup from './ui/Signup';
import Home from './ui/Home';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
function App() {
	return (
		<Router>
			
			<Switch>
				<Route path="/" exact component={Signup} />
				<Route path="/Login" exact component={Login} />
				<Route path="/Home" exact component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
