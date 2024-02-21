import { React, useState, useEffect } from 'react';
import { useZones } from '../../../hooks/useZones';
import { useNavigate, useParams } from "react-router-dom";
import ZonesModal from './ZonesModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/esm/Table';


export function ListZones() {
  const { zones, useDeleteZone, setZones, oneZone, useOneZone, useUpdateZone } = useZones();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id, setId] = useState(null);
  const navigate = useNavigate();



  //DELETE ZONE
  function deleteZone(slug) {
    console.log(slug);
    useDeleteZone(slug);

  }

  //UPDATE ZONE
  function updateZone(slug) {
    setId(slug);
    handleShow();
    // console.log(slug);
  }

  useEffect(() => {
    if (id !== null) {
      useOneZone(id);
    }
  }, [id, useOneZone]);

  const emit_data = (cityData) => {
    console.log(cityData);
    useUpdateZone(id, cityData);
  }

  return (
    <div>
      <div>
        <Table striped bordered hover responsive>
          <thead>
            <tr >
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Image</th>
              <th scope="col">City</th>
              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {zones.map((zone, index) => (
              <tr key={index}>
                <td>{zone.name}</td>
                <td>{zone.zone_type}</td>
                <td>{zone.zone_image}</td>
                <td>{zone.city}</td>
                <td><button className="btn btn-danger" onClick={() => deleteZone(zone.slug)}>DELETE</button> </td>
                <td><button className="btn btn-primary" onClick={() => updateZone(zone.slug)}>UPDATE</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <ZonesModal show={show} handleClose={handleClose} updatedZone={oneZone} onAddZone={emit_data} />
    </div>

  );
};


export default ListZones;
