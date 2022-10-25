import React from 'react'

// components 
import SearchBar from '../components/Searchbar';
// css  
import '../styles/SymptomsChecker/SymptomsChecker.css';

const SymptomsChecker = () => {
    return (
        <section className="symptoms-input">
            <h2>Symptoms Checking</h2>
            <h3>Please Enter Symptoms</h3>
            <SearchBar /> 
            <div className="autocom-box">
                <ul className='symptoms-search-result' id='symptoms-search-result'>
                    <li><a href="#">list of results here</a></li>
                </ul>
            </div>
            <div className="user-symptoms">
                <li>symptom 1</li>
                <li>symptom 2</li>
                <li>symptom 3</li>
                <li>symptom 4</li>
                <li>symptom 5 max</li>
            </div>

        </section>
    )
}
export default SymptomsChecker