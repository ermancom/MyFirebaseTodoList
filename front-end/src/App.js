import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './pages/login';
import signup from './pages/signup';
import home from './pages/home';
import axios from 'axios';

axios.defaults.baseURL = 'https://us-central1-todolist-290da.cloudfunctions.net/api';
axios.defaults.headers.common['Origin'] = 'https://us-central1-todolist-290da.cloudfunctions.net/api';

function App() {
  return (
    <Router>
    <div>
       <Switch>
           <Route exact path="/login" component={login}/>
           <Route exact path="/signup" component={signup}/>
           <Route exact path="/" component={home}/>
       </Switch>
    </div>
</Router>
  );
}
export default App;
