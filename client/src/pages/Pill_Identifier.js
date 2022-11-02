import React, { useState } from 'react'

// components 
import SearchBar from '../components/Searchbar';
// css 
import '../styles/Pill_Identifier/Pill_Identifier.css';


const Pill_Identifier = () => {
  const [showContainer, setShowContainer] = useState(false); 
  const [showResult, setShowResult] = useState(false); 


  // result handle show 
  const handleShow = () => { 
    setShowResult(!showResult);
  }

  return (
    <section>
        <div className='nav-pill'>
            <h2>Pill Identifier</h2>
        </div>
        <SearchBar />        
        
        <div className='shape-color'>

          <div className='pill-btns'>
            <button onClick={() => setShowContainer(false)}>Color</button>
            <button onClick={() => setShowContainer(true)}>Shape</button>
          </div>

          {showContainer === true ? 
            <div className='shape-container'>Shape Container</div>
            : 
            <div className='color-container'>Color Container</div>
          }  
          
        </div>
          
        
        <div className='btn-results'>
            <button onClick={() => handleShow()}>View Results</button>
        </div>
        
        {showResult && <div className='result-list-container'></div>}
        

    </section>
  )
}

export default Pill_Identifier