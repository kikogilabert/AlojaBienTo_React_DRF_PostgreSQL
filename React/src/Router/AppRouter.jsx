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

//CLIENT-Apartments
import Apartment_Cli from '../pages/Client/Apartment/apartment.jsx'
//ADMIN-Apartments
import Apartment from '../pages/Admin/Apartment/apartment.jsx';

//ADMIN-Reservations
import Reservations from '../pages/Admin/Reservation/reservation.jsx';
//LOGIN
import Login from '../pages/Login/login_register';

//ADMIN-Incidences  
import Incidence from '../pages/Admin/Incidence/incident.jsx';

//DETAILS_APARTMENT
import Apartment_details from '../pages/Client/Apartment/Details/apartment_details.jsx'

//Guards
import AuthGuard from '../services/guards/AuthGuard';
import AdminGuard from '../services/guards/AdminGuard';

//CONTEXT PROVIDERS
import { CitiesContextProvider } from '../context/CitiesContext';
import { ZonesContextProvider } from '../context/ZonesContext';
import { ApartmentContextProvider } from '../context/ApartmentContext';
import { AuthContextProvider } from '../context/AuthContext.jsx';
import Profile from '../pages/Client/Profile/profile.jsx';

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

              {/* Login */}
              <Route path="/login" element={ <Login /> } />

            {/* Client */}
            <Route path="/cities" element={ <City_Cli /> } />
            <Route path='/zones' element={ <Zone_Cli/>} />
            <Route path="/zones/:slug" element={<Zone_Cli/>}/>
            <Route path="/apartments/:slug" element={<Apartment_Cli/>}/>
            <Route path="/apartments/" element={<Apartment_Cli/>}/>
            <Route path="/apartment_details/:slug" element={<Apartment_details/>}/>

            {/* Admin */}
            <Route element={<AdminGuard/>}>
              <Route path="/admin-cities" element={ <City /> } />
              <Route path="/admin-zones" element={ <Zone /> } />
              <Route path='/admin-apartments' element={ <Apartment /> } />
              <Route path='/admin-reservations' element={ <Reservations /> } />
              <Route path='/admin-incidents' element={ <Incidence /> } />

            </Route>
            
            {/* Profile */}
            <Route element={<AuthGuard/>}>
              <Route path="/profile/:id" element={ <Profile /> } />
            </Route>
          </Routes>
        </ApartmentContextProvider>
      </ZonesContextProvider>
    </CitiesContextProvider>
  </AuthContextProvider>
  );
}

export default AppRouter;