import './App.css';
import Admin from './components/Profile/Admin.js'
import NavBar from './components/NavBar/NavBar.js';
import Login from './components/Login/Login.js';
import Profile from './components/Profile/Profile.js';
import HomeHub from './components/Home/HomeHub.js';
import Register from './components/Login/Register.js';
import event from './components/Events/events.js';
import CreateEvent from './components/createEvent/createEvent.js';
import HeldEvent from './components/heldEvent/heldEvent.js';
import lookupEvent from './components/lookupEvent/lookupEvent.js';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component = {HomeHub} />
          <Route path="/login" component={Login} />
          <Route path="/prof" component={Profile} />
          <Route path="/regis" component={Register} />
          <Route path="/admin" component={Admin} />
          <Route path="/event" exact component = {event} />
          <Route path="/create" exact component = {CreateEvent} />
          <Route path="/held" exact component = {HeldEvent} />
          <Route path="/lookup" exact component = {lookupEvent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
