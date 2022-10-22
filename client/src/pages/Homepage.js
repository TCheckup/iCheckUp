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
          <div className='description-container'> 
            <h2 className='title-home'>
              Greetings, {username}
            </h2>
            <button>Start Symptoms</button>
          </div>
          <div className='img-descp-container'> 

          </div>
          
        </div>

        {/* Buttons */}
        <div className='home-btns'>
          <div className='text section-1'>
            <Link to="/remedies-and-first-aids">Remedies and First Aids</Link>
          </div>
          <div className='text section-2'>
            <Link to="/symptoms-tracker">Symptoms Tracker</Link>
          </div>
          <div className='text section-3'>
            <Link to="/pill-identifier">Pill Identifier</Link>
          </div>
          <div className='text section-4'>
            <Link to="/medical-book">Medical Book</Link>
          </div>
        </div>  

        {/* Find hospital */}
        <div className='find-hospital'>
            <h2>Find Clinic Near You</h2>
            <div className='map-container'>
          </div>
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