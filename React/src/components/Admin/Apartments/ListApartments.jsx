import {React, useState } from 'react';
import { useApartments } from '../../../hooks/useApartments';
import { useNavigate } from "react-router-dom";
import ApartmentsModal from '../../../components/Admin/Apartments/ApartmentsModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';

export function ListApartments() {
  const {apartments, useDeleteApartment, useUpdateApartment, oneApartment , useOneApartment } = useApartments();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id, setId] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  //delete apartment
  function deleteApartment(slug) {
    // console.log(id);
    useDeleteApartment(slug);
  }

  //send new data to backend
  const emit_data = (cityData) => {
    // console.log(cityData);
    useUpdateApartment(id, cityData);
  }

  //activate modal
  function updateApartment(slug) {
    // console.log(slug);
    setId(slug);
    handleShow();
  }

  // get data of updating apartment
  useEffect(() => {
    if(id !== null){
      useOneApartment(id);
    }
  }, [id, useOneApartment]);

  return (
    <div>
      <div style={{ marginTop: '10px',  display: 'flex', justifyContent: 'center' }}>
      <Table striped bordered hover responsive >
          <thead>
            <tr >
              <th scope="col">Location</th>
              <th scope="col">Price</th>
              <th scope="col">Rooms</th>
              <th scope="col">Bathrooms</th>
              <th scope="col">Size</th>
              <th scope="col">Images</th>
              <th scope="col">Zone</th>
              <th scope='col'>Delete</th>
              <th scope='col'>Update</th>
            </tr>
          </thead>
          <tbody>
          {apartments.map((apartment, index) => (
            <tr  key={index}>
              <td>{apartment.location}</td>
              <td>{apartment.price}</td>
              <td>{apartment.rooms}</td>
              <td>{apartment.bathrooms}</td>
              <td>{apartment.size}</td>
              <td>{apartment.apartment_images}</td>
              <td>{apartment.zone}</td>
              <td><button className="btn btn-danger" onClick={() => deleteApartment(apartment.slug)}>DELETE</button> </td>
              <td><button className="btn btn-primary" onClick={() => updateApartment(apartment.slug) }>UPDATE</button></td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
      <ApartmentsModal updatedApartment={oneApartment} onAddApartment={emit_data} show={show} handleClose={handleClose}/>
    </div>
  );
};
export default ListApartments;