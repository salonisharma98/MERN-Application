import Signin from './UI/Signin';
import SignUp from './UI/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Signin} />
          <Route path="/SignUp" exact component={SignUp} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
