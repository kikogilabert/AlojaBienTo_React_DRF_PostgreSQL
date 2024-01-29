import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';

//CITIES
import City from '../pages/Admin/City/city';
import AddCity from '../pages/Admin/City/AddCity';
import UpdateCity from '../pages/Admin/City/UpdateCity';

//ZONES
import Zone from '../pages/Admin/Zones/zone';
// import AddZone from '../pages/Admin/Zones/AddZone';
// import UpdateZone from '../pages/Admin/Zones/UpdateZone';

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
        <Route path="/cities" element={ <City /> } />
        <Route path="/cities-create" element={ <AddCity /> } />
        <Route path="/cities-update/:id" element={ <UpdateCity /> } />

        <Route path="/zones" element={ <Zone /> } />
        {/* <Route path="/zones-create" element={ <AddCity /> } />
        <Route path="/zones-update/:id" element={ <UpdateCity /> } /> */}
      </Routes>
      </ZonesContextProvider>
    </CitiesContextProvider>
  );
};

export default AppRouter;