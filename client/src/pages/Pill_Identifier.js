import React from 'react'

// components 
import SearchBar from '../components/Searchbar';
// css 
import '../styles/Pill_Identifier/Pill_Identifier.css';


const Pill_Identifier = () => {
  return (
    <section>
        <SearchBar />
        <div className='nav-pillID'>
            <h2>Pill ID</h2>
            <button>Clear</button>
        </div>
        <div className='searchbar'></div>
        <div className='shape-container'></div>
        <div className='color-container'></div>

        <div className='result-list-container'></div>
        <div className='btn-results'>
            <button>View Results</button>
        </div>
    </section>
  )
}

export default Pill_Identifier