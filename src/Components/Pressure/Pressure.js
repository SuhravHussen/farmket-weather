import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FarmketWeather from '../Farmket weather/FarmketWeather';

const Pressure = ({data}) => {
    
    const [url, seturl] = useState('')
    useEffect(()=>{
        seturl(`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=pressure&lat=${data.lat}&lon=${data.long}&zoom=8`)
    },[])
    return (
       <div className="main-body">
     
         <iframe className="map" src={url} ></iframe>

        <FarmketWeather/>
        </div>
    );
};

export default Pressure;