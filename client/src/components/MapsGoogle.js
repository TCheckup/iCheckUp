import React from 'react'; 
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'; 
import keys from '../helpers/key';

// css  
import '../styles/MapGoogle/MapGoogle.css';

const MapGoogle = () => {

  const { isLoaded } = useLoadScript({ 
    googleMapsApiKey: keys.googleMapsAPIKey, 
  })

  if(!isLoaded) return <div>Loading...</div>

  return (
    <Map />
  )
}

function Map(){
    const center = {lat: 11.771909554228976, lng: 124.88567332010416};

    return (
        <>
            <GoogleMap
                zoom={17} 
                center={center} 
                mapContainerClassName="maps-container"       
            >
               
            <Marker position={center}/>
            </GoogleMap>
        </>
    )
        
}

export default MapGoogle