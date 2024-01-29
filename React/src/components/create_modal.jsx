import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function CreateModal({ onAddZone, show, handleClose, updatedZone}) {
  const [zone_name, setZone_Name] = useState(updatedZone ? updatedZone.zone_name : '');
  const [zone_type, setZone_type] = useState(updatedZone ? updatedZone.zone_type : '');
  const [image, setImage] = useState(updatedZone ? updatedZone.image : '');
  const [city_id, setCity_id] = useState(updatedZone ? updatedZone.city_id : '');
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
      if(updatedZone) {
          setZone_Name(updatedZone.zone_name);
          setZone_type(updatedZone.zone_type);
          setCity_id(updatedZone.city_id);
          setImage(updatedZone.image);
          setIsUpdate(true);
      }
      }, [updatedZone]);

  const handleSubmit = (e) => {
    // const form = e.currentTarget;
    // console.log(form);
    // console.log('hola');
    // e.preventDefault();
        if(isUpdate === true){
            console.log("isUpdate");  
          // onAddCity({ zone_name, zone_type, city_id, image }, updatedCity.id);
            // setIsUpdate(false);
        }else{
            console.log("isCreate");
            onAddZone({ zone_name, zone_type, city_id, image  });

        }
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    // setValidated(true);
  };

  const handleZone_nameChange = (e) => {
    setZone_Name(e.target.value);
    // console.log(e.target.value);  
  };

  const handleZone_typeChange = (e) => {
    setZone_type(e.target.value);
    // console.log(e.target.value);  

  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
    // console.log(e.target.value);  

  };

  const handleCity_idChange = (e) => {
    setCity_id(e.target.value);
    // console.log(e.target.value);  

  };



  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
              <Form.Label>Zone Type(Pronto Select)</Form.Label>
              <Form.Control
                type="text" value={zone_type} onChange={handleZone_typeChange}
                placeholder="Zone Specification"
                
              />
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
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;