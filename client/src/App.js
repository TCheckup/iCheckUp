import React from 'react'; 
import io from 'socket.io-client'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components pages 
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// main pages
import Homepage from './pages/Homepage';
import DownloadApp from './pages/DownloadApp';
import HowItWorks from './pages/HowItWorks';
import LoginPage from './pages/LoginPage';
import MedicalBook from './pages/MedicalBook';
import MedicineReminder from './pages/MedicineReminder';
import Pill_Identifier from './pages/Pill_Identifier';
import RemediesBookmarks from './pages/RemediesBookmarks';
import RemediesFirstAid from './pages/RemediesFirstAid';
import SignUp from './pages/SignUp';
import SymptomsChecker from './pages/SymptomsChecker';
import SymptomsTracker from './pages/SymptomsTracker';

const socket = io("http://localhost:4000", { transports: ["websocket"]});

function App() {

  return (
    <>
      {/* Routes */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Nav bar routes */}
          <Route path='/' element={<Homepage/>} />
          <Route path='/how-to-works' element={<HowItWorks/>} />
          <Route path='/download-app' element={<DownloadApp/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/sign-up' element={<SignUp socket={socket}/>} />

          {/* homepage routes */}
          <Route path='/medical-book' element={<MedicalBook/>} />
          <Route path='/remedies-and-first-aids' element={<RemediesFirstAid />} />
          <Route path='/pill-identifier' element={<Pill_Identifier />} />
          <Route path='/symptoms-tracker' element={<SymptomsTracker />} />

        </Routes>
        <Footer />
      </BrowserRouter>    
    </>
  );
}

export default App;
