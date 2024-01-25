import React from 'react';
import { useCities } from '../../../hooks/useCities';
import CityForm from '../../../components/city_form';


export function AddCity() {
  const {cities, addCity} = useCities();
  
  const emit_data = (cityData) => {
    // console.log(cityData);
    addCity(cityData);
  };
  return (
    <div>
      <h1>CREAMOS UNA CITY</h1>
        <CityForm onAddCity={emit_data}/>
    </div>
  );
};


export default AddCity;
