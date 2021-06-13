import React from 'react';
import { Switch, Route } from 'react-router-dom';

// style
import './App.css';

// components
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Authentification from './components/Authentication';
import WeatherForecast from './components/WeatherForecast';

function App() {
  return (
    <div className="App">
      <div className="app_body">
        <header>
            <NavigationBar/>
        </header>
        <main className="main_content">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/authentification" component={Authentification} />
                <Route path="/weatherforecast" component={WeatherForecast} />
            </Switch>
        </main>       
      </div>
    </div>
  );
}

export default App;
