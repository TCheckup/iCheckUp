import React from 'react'

// components 
import SearchBar from '../components/Searchbar';
// css  
import '../styles/RemediesFirstAids/RemediesFirstAids.css';

const RemediesFirstAid = () => {
  return (
    <section>
        {/* Result section of remedies and first aid */}
        <SearchBar />
        <section className='result-container'>
            <div className='title-result'>
                <div className='img-container'>
                    <div className='img-overlay'>
                        <img src="" alt="" />
                    </div>
                </div>
                 <div>
                    <p>Illness Name</p>
                </div>
            
            </div>
            <div className='info-container'>
                <h2>Intro</h2>
                <div>
                    description here
                </div> 
            </div>
            <div className='cause-container'>
                <h2>Causes</h2>
                <div>
                    <p>description</p>
                </div>             
            </div>
            <div className='symptoms-container'>
                <h2>Symptoms</h2>
                <div>
                    <p>description</p>
                </div>
            </div>
            <div className='instruction-container'>
                <h2>Instruction</h2>
                <div>
                    <p>description</p>
                </div>
            </div>
        </section>
    </section>
  )
}

export default RemediesFirstAid