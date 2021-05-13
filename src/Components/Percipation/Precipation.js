import React from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import { useState } from 'react';
import { useEffect } from 'react';
import FarmketWeather from '../Farmket weather/FarmketWeather';
const Precipation = ({data}) => {
   
    const [url, seturl] = useState('')
    useEffect(()=>{
        seturl(`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=radar&lat=${data.lat}&lon=${data.long}&zoom=8`)
    },[])
    return (<div className="main-body">
<FarmketWeather/>
         <iframe className="map" src={url} ></iframe>
        
        </div>
    );
};

export default Precipation;