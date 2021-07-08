import React from 'react';
import { NavLink } from 'react-router-dom';

// styles
import '../style/NavigationBar.css';

const NavigationBar = () => {
    return (
        <nav className="navigation">
            <div className="nav-wrapper">
                <NavLink to='/' exact className="nav-link-home">
                    <p>Home</p> 
                </NavLink>
                <NavLink to='/weatherforecast' className="nav-link-weatherforecast">
                    <p> Weather Forecast</p> 
                </NavLink>
                <NavLink to='/authentification' className="nav-link-authentification">
                    <p>My email notification</p>
                </NavLink>                     
            </div>
        </nav>
    );
}
 
export default NavigationBar;