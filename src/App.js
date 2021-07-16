import logo from './logo.svg';
import './assets/scss/style.scss';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {

  const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
  })

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
