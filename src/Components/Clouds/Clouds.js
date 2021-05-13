import React from 'react';
import { useState , useEffect } from 'react';
import FarmketWeather from '../Farmket weather/FarmketWeather';

const Clouds = ({data}) => {
    const [url, seturl] = useState('')
    useEffect(()=>{
        seturl(`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=clouds&lat=${data.lat}&lon=${data.long}&zoom=8`)
    },[])
    return (
        <div className="main-body">
   <FarmketWeather/>
         <iframe className="map" src={url} ></iframe>
    
       
        </div>
    );
};

export default Clouds;