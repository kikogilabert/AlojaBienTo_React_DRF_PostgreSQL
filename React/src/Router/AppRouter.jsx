// import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';

//CLIENT-Cities
import City_Cli from '../pages/Client/City/city.jsx'

//CLIENT-Zones
import Zone_Cli from '../pages/Client/Zone/Zone'

//ADMIN-Cities
import City from '../pages/Admin/City/City';
import AddCity from '../pages/Admin/City/AddCity';
import UpdateCity from '../pages/Admin/City/UpdateCity';

//Admin-Zones
import Zone from '../pages/Admin/Zones/zone';

//CONTEXT PROVIDERS
import { CitiesContextProvider } from '../context/CitiesContext';
import { ZonesContextProvider } from '../context/ZonesContext';

export function AppRouter() {
  return (
    <CitiesContextProvider>
      <ZonesContextProvider>
      <Routes>
        <Route index path="/" element={ <Navigate to="/home" /> } />
        <Route path="/home" element={ <Home /> } />
        {/* Client */}
        <Route path="/cities" element={ <City_Cli /> } />
        <Route path='/zones' element={ <Zone_Cli/>} />
        {/* Admin */}
        <Route path="/admin-cities" element={ <City /> } />
        <Route path="/admin-zones" element={ <Zone /> } />
      </Routes>
      </ZonesContextProvider>
    </CitiesContextProvider>
  );
}

export default AppRouter;