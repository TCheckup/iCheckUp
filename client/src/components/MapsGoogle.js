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
    const center = {lat: 11.773664625778743, lng: 124.88598824898095};
n
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