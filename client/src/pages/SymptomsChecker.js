import React from 'react'

// components 
import SearchBar from '../components/Searchbar';
// css  
import '../styles/SymptomsChecker/SymptomsChecker.css';

const SymptomsChecker = () => {
    return (
      <section className='symptoms-checking'>
        <h2>Disease and Illness Prediction</h2>
        <h3>Please Enter Symptoms</h3>
        <SearchBar />
        <i className='fa fa-search'></i>
        <section className='autocom-box'>
            <li><i className='fa fa-search'></i><a href="#">Symptoms Title 1</a></li>
            <li><i className='fa fa-search'></i><a href="#">Symptoms Title 2</a></li>
            <li><i className='fa fa-search'></i><a href="#">Symptoms Title 3</a></li>
            <li><i className='fa fa-search'></i><a href="#">Symptoms Title 4</a></li>
            <li><i className='fa fa-search'></i><a href="#">Symptoms Title 5 max</a></li>
        </section>
        <section className="user-symptoms-list">
            <p>Symptoms 1</p>
            <p>Symptoms 2</p>
            <p>Symptoms 3</p>
            <p>Symptoms 4</p>
            <p>Symptoms 5 max</p>
        </section>



      </section>
    )
  }