import React from 'react'
import '../App.css';
import {Link } from 'react-router-dom';

class Nav extends React.Component {
  
    render() {
    return (
 
        <nav>
            <h3>Solstice</h3>
            <ul className="nav-links">
            <Link className="link" to="/home">
                <li>Home</li>
            </Link>
            <Link className="link" to="/contacts">
                <li>Contact List</li>
            </Link>
            </ul>
        </nav>
        
    )
    
}
}
export default Nav