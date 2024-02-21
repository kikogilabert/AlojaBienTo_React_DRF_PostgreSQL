import { React, useState } from 'react';
import { useCities } from '../../../hooks/useCities';
import { useNavigate } from "react-router-dom";
import CitiesModal from '../../../components/Admin/Cities/CitiesModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';

export function ListCities() {
  const { cities, useDeleteCity, useUpdateCity, oneCity, useOneCity } = useCities();

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
    // console.log(cityData);
    useUpdateCity(id, cityData);
  }

  //activate modal
  function updateCity(slug) {
    // console.log(slug);
    setId(slug);
    handleShow();
  }

  // get data of updating city
  useEffect(() => {
    if (id !== null) {
      useOneCity(id);
    }
  }, [id, useOneCity]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop:'10px' }}>
        <Table striped bordered hover responsive >
          <thead>
            <tr >
              <th scope="col">Name</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>
              <th scope="col">Image</th>
              <th scope="col">Delete</th>
              <th scope='col'>Update</th>
            </tr>
          </thead>
          <tbody>
            {cities.map((city, index) => (
              <tr key={index}>
                <td>{city.name}</td>
                <td>{city.state}</td>
                <td>{city.country}</td>
                <td>{city.image}</td>
                <td><button className="btn btn-danger" onClick={() => deleteCity(city.slug)}>DELETE</button></td>
                <td><button className="btn btn-primary" onClick={() => updateCity(city.slug)}>UPDATE</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <CitiesModal updatedCity={oneCity} onAddCity={emit_data} show={show} handleClose={handleClose} />

    </div>
  );
};
export default ListCities;
