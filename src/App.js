import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home'
import Projects from './components/Projects'
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
        <Route path={process.env.PUBLIC_URL + '/projects'} component={Projects}/>
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
