import React from 'react';
import { NavLink } from 'react-router-dom';

// styles
import '../style/NavigationBar.css';

const NavigationBar = () => {
    return (
        <nav className="navigation">
            <div className="nav-wrapper">
                <NavLink to='/' exact>
                    <p>Home</p> 
                </NavLink>
                <NavLink to='/weatherforecast'>
                    <p> Weather Forecast</p> 
                </NavLink>
                <NavLink to='/authentification'>
                    <p>My mail notification</p>
                </NavLink>                
            </div>
        </nav>
    );
}
 
export default NavigationBar;