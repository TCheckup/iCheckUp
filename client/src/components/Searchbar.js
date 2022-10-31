import React from 'react'

import '../styles/SearchBar/SearchBar.css';
<script src="https://kit.fontawesome.com/0579246b22.js" crossorigin="anonymous"></script>

const SearchBar = () => {
  return (
    <section className='search-bar'>
        <input placeholder='Search...'></input>
        <div className='icon'><i class="fa-solid fa-magnifying-glass"></i></div> 
    </section>
  )
}

export default SearchBar