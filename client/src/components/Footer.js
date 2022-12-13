import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/Footer/Footer.css'; 

const Footer = () => {
  return (
    <section className='footer-container'>
      <div className='about-us-con'>
        <h3>About Us</h3>
        <p>Biringan City</p>
        <p>Cebu City, Brgy. Catbalogan, Biringan, Phillipiness 8700.</p>
        <div className='soc-icons'>
          <a href="https://www.facebook.com/">fb</a>
          <a href="https://www.instagram.com/">instagram</a>
          <a href="https://www.linkedin.com/feed/">linked</a>
          <a href="https://youtube.com/">youtube</a>
        </div>
      </div>
      <div className='service-containers'>
        <h3>Service</h3>
        <ul>
          <li><Link to='/medical-book'>Medical Book</Link></li>
          <li><Link to='/medicine-reminder'>Medicine Reminder</Link></li>
          <li><Link to='/remedies-bookmarks'>Remedies Bookmarks</Link></li>
          <li><Link to='/symptoms-tracker'>Symptoms Tracker</Link></li>
          <li><Link to='/remedies-first-aid'>Remedies First Aid</Link></li>
        </ul>
      </div>
      <div className='links-container'>
        <h3>Useful Link</h3>
        <ul>
          <li><Link to='/about-us'>About Us</Link></li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/download-app'>Download App</Link></li>
          <li><Link to='/how-to-works'>How it works</Link></li>
          <li><Link to='/contact-us'>Contact Us</Link></li>
        </ul>
      </div>

    </section>
  )
}

export default Footer