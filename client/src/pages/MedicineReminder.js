import React from 'react'

// components 
import SearchBar from '../components/SearchBar';

// css  
import '../styles/MedicineReminder/MedicineReminder.css';

const MedicineReminder = () => {
  return (
    <section>
        <SearchBar />
        <div className="calendar-container">
            <div className="calendar">

            </div>
            <p className="info-calendar"></p>
        </div>
        <div className='alarm'></div>
        <div className='note-list'>

        </div>
        <div className='reminder-btn'>
            <button className='btn-reminder'>Add Reminder</button>
        </div>
    </section>
  )
}

export default MedicineReminder