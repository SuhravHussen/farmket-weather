
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavButtons from './Components/Navbar/NavButtons';
import Precipation from './Components/Percipation/Precipation';
import Pressure from './Components/Pressure/Pressure';
import Temperature from './Components/Temperature/Temperature';
import Clouds from './Components/Clouds/Clouds';
import Wind from './Components/Wind/Wind';
import { createContext, useState } from 'react';
import { useEffect } from 'react';


export const userContext = createContext({})

function App() {
  const [latLong , setLatLong] = useState({

  })
 console.log(latLong);
 
useEffect(()=>{
  navigator.geolocation.getCurrentPosition(function(position) {
    setLatLong({
      lat: position.coords.latitude,
      long: position.coords.longitude
    })
   });
},[])

  return (
       <>
{latLong.lat &&
<userContext.Provider value={[latLong , setLatLong]}>
    <Router>
       {/* <NavButtons/> */}
          <Switch>
            <Route exact path="/">
             <Precipation data={latLong}/>
            </Route>

            <Route  path="/Precipitation">
             <Precipation data={latLong}/>
            </Route>

            <Route  path="/Pressure">
             <Pressure data={latLong}/>
            </Route>

            <Route  path="/Temperature">
            <Temperature data={latLong}/>
            </Route>
            
            <Route  path="/Clouds">
            <Clouds data={latLong}/>
            </Route>

            <Route path="/Wind">
             <Wind data={latLong}></Wind>
            </Route>



          </Switch>
    </Router>
</userContext.Provider>
  }
  </>
  );
}

export default App;
