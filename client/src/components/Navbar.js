import React from 'react'
import { Link } from 'react-router-dom';

// styles 
import '../styles/Nav/Navbar.css';

const Navbar = () => {
  return (
    <div className='section-nav'>
        <nav>
            <div className="logo">
                <Link to="/">iCheckUp</Link>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/how-to-works">How it works</Link></li>
                <li><Link to="/download-app">Download App</Link></li>
                <li><Link className='login' to="/login">Login</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar