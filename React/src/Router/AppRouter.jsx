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
//IMPORT 
//ADMIN-Apartments
import Apartemnt from '../pages/Admin/Apartment/apartment.jsx';

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
            {/* Client */}
            <Route path="/cities" element={ <City_Cli /> } />
            <Route path='/zones' element={ <Zone_Cli/>} />
            <Route path="/zones/:slug" element={<Zone_Cli/>}/>
            {/* Admin */}
            <Route element={<AdminGuard/>}>
              <Route path="/admin-cities" element={ <City /> } />
              <Route path="/admin-zones" element={ <Zone /> } />
              <Route path='/admin-apartments' element={ <Apartemnt /> } />
            </Route>
              {/* Login */}
            <Route path="/login" element={ <Login /> } />
            
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