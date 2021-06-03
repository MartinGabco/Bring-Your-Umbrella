import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className="navigation">
            <NavLink to='/' exact>
                Home
            </NavLink>
            <NavLink to='/authentification'>
                Authentication
            </NavLink>
            <NavLink to='/weatherforecast'>
                Weather Forecast
            </NavLink>
            <NavLink to='/myplaces'>
                My Places
            </NavLink>
        </nav>
    );
}
 
export default NavigationBar;