import React from 'react';
import { NavLink } from 'react-router-dom'

function Navigation() {
    return(<nav>
        <NavLink className="navlink" to='/website/'>Home</NavLink>
        <NavLink className="navlink" to='/website/projects'>Projects</NavLink>
        <NavLink className="navlink" to='/website/experiments'>Experiments</NavLink>
    </nav>)
}
export default Navigation;