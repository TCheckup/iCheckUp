import React from 'react'
// components 
import SearchBar from '../components/SearchBar';

// css 
import '../styles/RemediesBookmarks/RemediesBookmarks.css';

const RemediesBookmarks = () => {
  return (
    <section>
        <SearchBar /> 
        <div className='searchbar-bookmark'>

        </div>
        <div className='bookmark-result'>

        </div>
    </section>
  )
}

export default RemediesBookmarks