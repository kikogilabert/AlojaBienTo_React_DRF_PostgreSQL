import {React, useState } from 'react';
import { useCities } from '../../../hooks/useCities';
import { useNavigate } from "react-router-dom";


export function ListCities() {
  const {cities, useDeleteCity, useUpdateCity, useOneCity} = useCities();
  const navigate = useNavigate();

  
  function deleteCity(id) {
    // console.log(id);
    useDeleteCity(id);

  }

  function updateCity(id) {
    // console.log(id);
    navigate(`/cities-update/${id}`);
  }


  return (
    <div>
            <h1>List of Cities</h1>
      <div style={{ marginLeft: '20px',  display: 'flex', justifyContent: 'center' }}>
        <table className="table" style={{ border: '1px black solid' }}>
          <thead>
            <tr >
              <th scope="col">Name</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {cities.map((city, index) => (
        <tr  key={index}>
          <td>{city.name}</td>
          <td>{city.state}</td>
          <td>{city.country}</td>
          <td><button className="btn btn-danger" onClick={() => deleteCity(city.id)}>DELETE</button> |
              <button className="btn btn-danger" onClick={() => updateCity(city.id)}>UPDATE</button></td>
        </tr>
      ))}
          </tbody>
        </table>
      </div>
    </div>
   
  );
};


export default ListCities;
