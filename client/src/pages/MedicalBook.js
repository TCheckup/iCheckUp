import React from 'react'
// components 
import SearchBar from '../components/Searchbar';

// css 
import '../styles/MedicalBook/MedicalBook.css';

const MedicalBook = () => {
  return (
    <section>
        <SearchBar /> 
        <div className="list-result">
            
        </div>
    </section>
  )
}

export default MedicalBook