import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

// components
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Authentification from './components/Authentification';
import WeatherForecast from './components/WeatherForecast';
import MyPlaces from './components/MyPlaces';

function App() {
  return (
    <div className="App">
      <header>
          <NavigationBar/>
      </header>
      <main className="main_content">
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/authentification" component={Authentification} />
              <Route path="/weatherforecast" component={WeatherForecast} />
              <Route path="/myplaces" component={MyPlaces} />
          </Switch>
      </main>
    </div>
  );
}

export default App;
