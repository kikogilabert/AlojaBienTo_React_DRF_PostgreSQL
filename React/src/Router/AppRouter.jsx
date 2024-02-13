// import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import Header from '../components/Header/Header';

//CLIENT-Cities
import City_Cli from '../pages/Client/City/city.jsx'
//ADMIN-Cities
import City from '../pages/Admin/City/city';

//CLIENT-Zones
import Zone_Cli from '../pages/Client/Zone/Zone'
//ADMIN-Zones
import Zone from '../pages/Admin/Zones/zone';

//LOGIN
import Login from '../pages/Login/login_register';
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
import { AuthContextProvider } from '../context/AuthContext.jsx';

export function AppRouter() {
  return (
  <AuthContextProvider>
  <Header/>
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
            {/* Login */}
            <Route path="/login" element={ <Login /> } />
          </Routes>
        </ApartmentContextProvider>
      </ZonesContextProvider>
    </CitiesContextProvider>
  </AuthContextProvider>
  );
}

export default AppRouter;