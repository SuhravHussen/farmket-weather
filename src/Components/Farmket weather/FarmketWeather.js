import React, { useContext, useState } from 'react';
import { userContext } from '../../App';
import './farmket.css'
const FarmketWeather = () => {
  
const [latLong] = useContext(userContext)


    function tempp(temp) 
{
  let newTemp =  temp /10
  return newTemp.toFixed(1)
} 

    const [searchInfo , setsearchInfo] = useState({
        lat : latLong.lat,
        long : latLong.long
    })
    const [weatherInfo , setWeatherinfo]= useState({})

     const handleSubmit =(e)=>{
         e.preventDefault()
         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${searchInfo.lat}6&lon=${searchInfo.long}&appid=f598b07ca7a617f404442b81c82de045`)
         .then(res=>res.json())
         .then(data=>{
           console.log(data);
           
             setWeatherinfo({
                 city: data.name,
                 temp: tempp(data.main.temp),
                 cloud: data.weather[0].description,
                 humidity: data.main.humidity,
                 icon:`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                 
             })
         })
         .catch(err=>alert('wrong latitude and longitude'))
     }
     const handleBlur = (e)=>{
       if(e.target.name=='lat'){
           setsearchInfo({
               ...searchInfo, 
               lat: e.target.value
           })
       }

       if(e.target.name=='long'){
        setsearchInfo({
            ...searchInfo, 
            long: e.target.value
        })
    }
    if(e.target.name=='city'){
        setsearchInfo({
            ...searchInfo, 
            city: e.target.value
        })
    }
        
     }

     
   
     

    return (
        <div className="farmket-container">
         {  weatherInfo.temp &&   <div className="weather-info">
                  <img src={weatherInfo.icon} alt="" />
                  
                  <h4>City Name:{weatherInfo.city}</h4>
                  <h4>Temp: {weatherInfo.temp}</h4>
                  <h4>Cloud: {weatherInfo.cloud}</h4>
                  <h4>Humidity: {weatherInfo.humidity}</h4>
                  
              </div>}

            <h1>Get Weather Update</h1>
            <div className="inputs">
              
                <input name="lat" onBlur={handleBlur} type="number" defaultValue={latLong.lat}/>
                <input name="long" onBlur={handleBlur} type="number" defaultValue={latLong.long} />
                <button name="lat-btn" onClick={handleSubmit} type="submit">Search With latitude and longitude</button>
          
            </div>
        </div>
    );
};

export default FarmketWeather;