import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function CitiesModal({ onAddZone, show, handleClose, updatedCity}) {
  const [name, setCity] = useState(updatedCity ? updatedCity.name : '');
  const [state, setState] = useState(updatedCity ? updatedCity.state : '');
  const [country, setCountry] = useState(updatedCity ? updatedCity.country : '');
  const [image, setImage] = useState(updatedCity ? updatedCity.image : '');
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
      if(updatedCity) {
          setCity(updatedCity.name);
          setState(updatedCity.state );
          setCountry(updatedCity.country);
          setImage(updatedCity.image);
          setIsUpdate(true);
      }
  }, [updatedCity]);

  const resetData = () => {
    setCity(''),
    setState(''),
    setCountry(''),
    setImage('')
  }

  useEffect(() => {
      if(updatedCity) {
        setCity(updatedCity.name);
        setState(updatedCity.state );
        setCountry(updatedCity.country);
        setImage(updatedCity.image);
        setIsUpdate(true);
    } else{
        resetData();
        setIsUpdate(false);
      }
      }, [updatedCity]);

  const handleSubmit = (e) => {
        // console.log(name, state, country, image);    
    if(isUpdate === true){
            console.log("isUpdate");
            onAddZone({ name, state, country, image }, updatedCity.id);
        }else{
            onAddZone({ name, state, country, image });
            resetData();
        }
  };

  const handleCityNameChange = (e) => {
    setCity(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
    console.log(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cities</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>City Name</Form.Label>
              <Form.Control
                type="text" value={name} onChange={handleCityNameChange}
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>State</Form.Label>
            <Form.Select value={state} onChange={handleStateChange}>
              <option value="" disabled>Seleccione una comunidad</option>
              {comunidadesAutonomas.map((comunidad) => (
                // eslint-disable-next-line react/jsx-key
                <option value={comunidad.value}>{comunidad.label}</option>
              ))}
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text" placeholder="Country"
                value={country} onChange={handleCountryChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text" value={image} onChange={handleImageChange}
                placeholder="https://example.com/image.png"
                
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

const comunidadesAutonomas = [
  { label: 'Andalucia', value: 'Andalucia' },
  { label: 'Aragón', value: 'Aragon' },
  { label: 'Asturias', value: 'Asturias' },
  { label: 'Islas Baleares', value: 'Islas Baleares' },
  { label: 'Pais Vasco', value: 'Pais Vasco' },
  { label: 'Islas Canarias', value: 'Islas Canarias' },
  { label: 'Cantabria', value: 'Cantabria' },
  { label: 'Castilla y Leon', value: 'Castilla y Leon' },
  { label: 'Castilla La Mancha', value: 'Castilla La Mancha' },
  { label: 'Cataluña', value: 'Cataluña' },
  { label: 'Extremadura', value: 'Extremadura' },
  { label: 'Galicia', value: 'Galicia' },
  { label: 'La Rioja', value: 'La Rioja' },
  { label: 'Madrid', value: 'Madrid' },
  { label: 'Murcia', value: 'Murcia' },
  { label: 'Navarra', value: 'Navarra' },
  { label: 'Comunidad Valenciana', value: 'Comunidad Valenciana' },
];
export default CitiesModal;