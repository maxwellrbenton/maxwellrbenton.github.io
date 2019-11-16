import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home'
import Experiments from './components/Experiments'
import API from './components/API'
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
          <Route path={process.env.PUBLIC_URL + '/experiments'} component={Experiments}/>
          <Route path={process.env.PUBLIC_URL + '/projects'} component={Projects}/>
          <Redirect to='/' />
        </Switch>
      </main>
    </div>
  );
}

export default App;
