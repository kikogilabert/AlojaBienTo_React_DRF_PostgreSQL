import {React, useState } from 'react';
import { useCities } from '../../../hooks/useCities';
import { useNavigate } from "react-router-dom";
import CitiesModal from '../../../components/Client/Cities/CitiesModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';


export function ListCities() {
  const {cities, useDeleteCity, useUpdateCity, oneCity , useOneCity} = useCities();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id, setId] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  //delete city
  function deleteCity(slug) {
    // console.log(id);
    useDeleteCity(slug);

  }

  //send new data to backend
  const emit_data = (cityData) => {
    console.log(cityData);
    useUpdateCity(id, cityData);
  }

  //activate modal
  function updateCity(slug) {
    console.log(slug);
    setId(slug);
    handleShow();
  }

  // get data of updating city
  useEffect(() => {
    if(id !== null){
      useOneCity(id);
    }
  }, [id, useOneCity]);

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
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {cities.map((city, index) => (
        <tr  key={index}>
          <td>{city.name}</td>
          <td>{city.state}</td>
          <td>{city.country}</td>
          <td>{city.image}</td>
          
          <td><button className="btn btn-danger" onClick={() => deleteCity(city.slug)}>DELETE</button> |
              <button className="btn btn-danger" onClick={() => updateCity(city.slug)}>UPDATE</button></td>
        </tr>
      ))}
          </tbody>
        </table>
      </div>
      <CitiesModal updatedCity={oneCity} onAddCity={emit_data} show={show} handleClose={handleClose}/>
      
    </div>
   
  );
};
export default ListCities;
