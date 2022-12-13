import React, { useState }from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPills } from '@fortawesome/free-solid-svg-icons'
import { faKitMedical } from '@fortawesome/free-solid-svg-icons'
import { faBedPulse } from '@fortawesome/free-solid-svg-icons'
import { faBookMedical } from '@fortawesome/free-solid-svg-icons'


// components 
import SearchBar from '../components/Searchbar';
import MapGoogle from '../components/MapsGoogle';

// styles 
import '../styles/Homepage/Homepage.css';

const Homepage = () => {
  const [username, setUsername] = useState("Sean Edward"); 
  return (
    <>
      <section>
        {/* Search Bar */}
        <SearchBar />
        <div className='intro'>  
          <div className='description-container'> 
            <h2 className='title-home'>
              Greetings, {username}
            </h2>
            <a Link to="symptoms-checker">
              <button>Start Symptoms</button>
            </a>
          </div>
          <div className='img-descp-container'> 
          </div>
        </div>

        {/* Buttons */}
        <div className='home-btns'>

          <div className='text section-1'>
            <FontAwesomeIcon icon={faKitMedical} />

            <div className='btn-text'>
              <Link to="/remedies-and-first-aids">Remedies and First Aids</Link>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              <Link className='click-btn' to="/remedies-and-first-aids">Click here</Link>  
            </div>
          </div>

          <div className='text section-2'>
            <FontAwesomeIcon icon={faBedPulse} />
            <div className='btn-text'>
              <Link to="/symptoms-tracker">Symptoms Tracker</Link>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              <Link className='click-btn' to="/symptoms-tracker">Click here</Link>

            </div>
          </div>

          <div className='text section-3'>
            <FontAwesomeIcon icon={faPills} />
            
            <div className='btn-text'>
              <Link to="/pill-identifier">Pill Identifier</Link>         
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              <Link className='click-btn' to="/pill-identifier">Click here</Link>         
            </div>
          </div>
          <div className='text section-4'>
            <FontAwesomeIcon icon={faBookMedical} />

            <div className='btn-text'>
              <Link to="/medical-book">Medical Book</Link>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              <Link className='click-btn' to="/medical-book">Click here </Link>
            </div>
          </div>
        </div>  

        {/* Find hospital */}
        <div className='find-hospital'>
            <h2>Find Clinic Near You</h2>
              <MapGoogle />
        </div>

        <div className='feedback-container'>
          <h2>Send Feedback</h2>
          <input type="text" placeholder='Write a feedback' />
          <button>Submit Feedback</button>
        </div>
      </section>
    </>
  )
}

export default Homepage