import React, { useState }from 'react'
import { Link } from 'react-router-dom';
 

// styles 
import '../styles/Homepage/Homepage.css';

const Homepage = () => {
  const [username, setUsername] = useState("Sean Edward"); 
  return (
    <>
      <section>
        {/* Search Bar */}
        <div className='intro'>  
          <h2 className='title-home'>
            Greetings, {username}
          </h2>
          <p>Start Symptoms</p>
        </div>

        {/* Buttons */}
        <div className='home-btns'>
          <div className='section-1'>
            <Link to="/remedies-and-first-aids">Remedies and First Aids</Link>
          </div>
          <div className='section-2'>
            <Link to="/symptoms-tracker">Symptoms Tracker</Link>
          </div>
          <div className='section-3'>
            <Link to="/pill-identifier">Pill Identifier</Link>
          </div>
          <div className='section-4'>
            <Link to="/medical-book">Medical Book</Link>
          </div>
        </div>  

        {/* Find hospital */}
        <div className='find-hospital'>
          <div className="title-map">
            <p>Find Clinic Near You</p>
          </div>
        </div>

        <div className='feedback-container'>
          <input type="text" placeholder='Write a feedback' />
          <button>Submit Feedback</button>
        </div>
      </section>
    </>
  )
}

export default Homepage