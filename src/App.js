import './App.css';
import Admin from './components/Profile/Admin.js'
import NavBar from './components/NavBar/NavBar.js';
import Login from './components/Login/Login.js';
import Profile from './components/Profile/Profile.js';
import Events from './components/Events/Event.js'; 
import HomeHub from './components/Home/HomeHub.js';
import Register from './components/Login/Register.js';
import { useState } from 'react';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const [username, setUsername] = useState('');

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component = {HomeHub} />
          <Route path="/login" component={Login} />
          <Route path="/prof" component={Profile} />
          <Route path="/events" component={Events} />
          <Route path="/regis" component={Register} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
