import React, { lazy, Suspense} from 'react'; 
import io from 'socket.io-client'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components pages 
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// main pages
const Homepage = lazy(() => import('./pages/Homepage')); 
const DownloadApp = lazy(() => import('./pages/DownloadApp')); 
const HowItWorks = lazy(() => import('./pages/HowItWorks')); 
const LoginPage = lazy(() => import('./pages/LoginPage')); 
const MedicalBook = lazy(() => import('./pages/MedicalBook')); 
const RemediesFirstAid = lazy(() => import('./pages/RemediesFirstAid')); 
const Pill_Identifier = lazy(() => import('./pages/Pill_Identifier')); 
const SymptomsTracker = lazy(() => import('./pages/SymptomsTracker')); 
const SignUp = lazy(() => import('./pages/SignUp')); 



const socket = io("http://localhost:4000", { transports: ["websocket"]});

function App() {

  return (
    <>
      {/* Routes */}
      <BrowserRouter>
        <Navbar />
        <Suspense>
          <Routes fallback={<div>Loading...</div>}>
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
        </Suspense>
        <Footer />
      </BrowserRouter>    
    </>
  );
}

export default App;
