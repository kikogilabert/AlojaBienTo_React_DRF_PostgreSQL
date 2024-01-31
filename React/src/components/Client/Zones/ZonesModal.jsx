import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ZonesModal({ onAddZone, show, handleClose, updatedZone}) {
  const [zone_name, setZone_Name] = useState(updatedZone ? updatedZone.name : '');
  const [zone_type, setZone_type] = useState(updatedZone ? updatedZone.zone_type : '');
  const [image, setImage] = useState(updatedZone ? updatedZone.zone_image : '');
  const [city_id, setCity_id] = useState(updatedZone ? updatedZone.city : '');
  const [slug, setSlug] = useState(updatedZone ? updatedZone.slug : '');

  const [isUpdate, setIsUpdate] = useState(false);

  const resetData = () => {
      setZone_Name(''),
      setZone_type(''),
      setImage(''),
      setCity_id('')
  }

  useEffect(() => {
      if(updatedZone) {
          setZone_Name(updatedZone.name);
          setZone_type(updatedZone.zone_type);
          setCity_id(updatedZone.city);
          setImage(updatedZone.zone_image);
          setIsUpdate(true);
      } else{
        resetData();
        setIsUpdate(false);
      }
      }, [updatedZone]);

  const handleSubmit = (e) => {
        if(isUpdate === true){
            console.log("isUpdate");
            onAddZone({ zone_name, zone_type, city_id, image }, updatedZone.id);
        }else{
            onAddZone({ zone_name, zone_type, city_id, image});
            resetData();
        }
  };

  const handleZone_nameChange = (e) => {
    setZone_Name(e.target.value);
  };

  const handleZone_typeChange = (e) => {
    setZone_type(e.target.value);
    console.log(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleCity_idChange = (e) => {
    setCity_id(e.target.value);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ZONES</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Zone Name</Form.Label>
              <Form.Control
                type="text" value={zone_name} onChange={handleZone_nameChange}
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Zone Type</Form.Label>
            <Form.Select value={zone_type} onChange={handleZone_typeChange}>
              <option value="" disabled>Select a zone type</option>
              <option value="Rural">Rural</option>
              <option value="Costa">Costa</option>
              <option value="Centro Ciudad">Centro Ciudad</option>
              <option value="Afueras Ciudad">Afueras Ciudad</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text" value={image} onChange={handleImageChange}
                placeholder="https://example.com/image.png"
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>City ID(Pronto Select)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zone Name"
                value={city_id} onChange={handleCity_idChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => { handleSubmit(); handleClose(); }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ZonesModal;