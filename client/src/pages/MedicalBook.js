import React from 'react'
// components 
import SearchBar from '../components/Searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// css 
import '../styles/MedicalBook/MedicalBook.css';

const MedicalBook = () => {

  // dummy data 
  const disease = { 
      title: 'Achalasia'
  }

  return (
    <section>
        <h2>Medical Book</h2>
        <div className='search-bar-medic'>
          <input type="text" placeholder='Search' />
          <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>


        {/* from database data */}
        <div className="medic-container">

            <div className='disease-container'>
              <img src={require('../images/disease/Achalasia.jpg')} alt={disease.title} />
              
              <div className='disease-text'>  
                <p className='title'>{disease.title}</p>
                <p>Read more <FontAwesomeIcon id='arrow' icon={faArrowRight}/></p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default MedicalBook