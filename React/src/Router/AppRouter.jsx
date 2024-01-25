import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import City from '../pages/Client/City/city';
import AddCity from '../pages/Client/City/AddCity';
import { CitiesContextProvider } from '../context/CitiesContext';
import UpdateCity from '../pages/Client/City/UpdateCity';

export function AppRouter() {
  return (
    <CitiesContextProvider>
      <Routes>
        <Route index path="/" element={ <Navigate to="/home" /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/cities" element={ <City /> } />
        <Route path="/cities-create" element={ <AddCity /> } />
        <Route path="/cities-update/:id" element={ <UpdateCity /> } />
      </Routes>
    </CitiesContextProvider>
  );
};

export default AppRouter;