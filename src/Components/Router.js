import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Movie from "Routes/Movie";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Detail from "Routes/Detail";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Movie} />
      <Route exact path="/tv" component={TV} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/movie/:id" component={Detail} />
      <Route exact path="/tv/:id" component={Detail} />
      <Redirect from="*" to="/"></Redirect>
    </Switch>
  </Router>
);
