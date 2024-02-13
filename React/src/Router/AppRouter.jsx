// import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';

//CLIENT-Cities
import City_Cli from '../pages/Client/City/city.jsx'
//ADMIN-Cities
import City from '../pages/Admin/City/city';

//CLIENT-Zones
import Zone_Cli from '../pages/Client/Zone/Zone'
//ADMIN-Zones
import Zone from '../pages/Admin/Zones/zone';

//CLIENT-Apartments
import Apartment_Cli from '../pages/Client/Apartment/apartment.jsx'
//ADMIN-Apartments
import Apartemnt from '../pages/Admin/Apartment/apartment.jsx';

//DETAILS_APARTMENT
import Apartment_details from '../pages/Client/Apartment/Details/apartment_details.jsx'

//CONTEXT PROVIDERS
import { CitiesContextProvider } from '../context/CitiesContext';
import { ZonesContextProvider } from '../context/ZonesContext';
import { ApartmentContextProvider } from '../context/ApartmentContext';

export function AppRouter() {
  return (
    <CitiesContextProvider>
      <ZonesContextProvider>
        <ApartmentContextProvider>
          <Routes>
            <Route index path="/" element={ <Navigate to="/home" /> } />
            <Route path="/home" element={ <Home /> } />
            {/* Client */}
            <Route path="/cities" element={ <City_Cli /> } />
            <Route path='/zones' element={ <Zone_Cli/>} />
            <Route path="/zones/:slug" element={<Zone_Cli/>}/>
            <Route path="/apartments/:slug" element={<Apartment_Cli/>}/>
            <Route path="/apartments/" element={<Apartment_Cli/>}/>
            <Route path="/apartment_details/:slug" element={<Apartment_details/>}/>
            {/* Admin */}
            <Route path="/admin-cities" element={ <City /> } />
            <Route path="/admin-zones" element={ <Zone /> } />
            <Route path='/admin-apartments' element={ <Apartemnt /> } />
          </Routes>
        </ApartmentContextProvider>
      </ZonesContextProvider>
    </CitiesContextProvider>
  );
}

export default AppRouter;