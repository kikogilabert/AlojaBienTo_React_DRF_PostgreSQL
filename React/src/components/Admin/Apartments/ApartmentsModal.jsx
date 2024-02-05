import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ApartmentsModal({ onAddApartment, show, handleClose, updatedApartment}) {
    const [location, setLocation] = useState(updatedApartment ? updatedApartment.location : '');
    const [price, setPrice] = useState(updatedApartment ? updatedApartment.price : '');
    const [rooms, setRooms] = useState(updatedApartment ? updatedApartment.rooms : '');
    const [bathrooms, setBathrooms] = useState(updatedApartment ? updatedApartment.bathrooms : '');
    const [size, setSize] = useState(updatedApartment ? updatedApartment.size : '');
    const [apartment_images, setApartment_images] = useState(updatedApartment ? updatedApartment.apartment_images : ['']);
    const [zone, setZone] = useState(updatedApartment ? updatedApartment.zone : '');
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        if(updatedApartment) {
            setLocation(updatedApartment.location);
            setPrice(updatedApartment.price);
            setRooms(updatedApartment.rooms);
            setBathrooms(updatedApartment.bathrooms);
            setSize(updatedApartment.size);
            setApartment_images(updatedApartment.apartment_images);
            setZone(updatedApartment.zone);
            setIsUpdate(true);
        }
    }, [updatedApartment]);

const resetData = () => {
    setLocation(''),
    setPrice(''),
    setRooms(''),
    setBathrooms(''),
    setSize(''),
    setApartment_images(['']),
    setZone('')
}

useEffect(() => {
    if(updatedApartment) {
        setLocation(updatedApartment.location);
        setPrice(updatedApartment.price);
        setRooms(updatedApartment.rooms);
        setBathrooms(updatedApartment.bathrooms);
        setSize(updatedApartment.size);
        setApartment_images(updatedApartment.apartment_images);
        setZone(updatedApartment.zone);
        setIsUpdate(true);
    } else {
        resetData();
        setIsUpdate(false);
    }
}, [updatedApartment]);

const handleSubmit = (e) => {
    // console.log(location,price,rooms,bathrooms,size,apartment_images,zone);    
    if(isUpdate === true){
        // console.log(location,price,rooms,bathrooms,size,apartment_images,zone);    
        console.log("isUpdate");
        onAddApartment({ location, price, rooms, bathrooms, size, apartment_images, zone }, updatedApartment.slug);
    }else{
        onAddApartment({ location, price, rooms, bathrooms, size, apartment_images, zone });
        resetData();
    }
};

const handleApartmentLocationChange = (e) => {
    setLocation(e.target.value);
};

const handleApartmentRoomsChange = (e) => {
    setRooms(e.target.value);
};

const handleApartmentPriceChange = (e) => {
    setPrice(e.target.value);
};

const handleApartmentBathroomsChange = (e) => {
    setBathrooms(e.target.value);
};

const handleApartmentSizehange = (e) => {
    setSize(e.target.value);
};

const handleApartment_ImagesChange = (e) => {
    setApartment_images(e.target.value);
};

const handleApartmentZoneIDChange = (e) => {
    setZone(e.target.value);
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
                <Form.Label>Apartment Location</Form.Label>
                <Form.Control
                    type="text" value={location} onChange={handleApartmentLocationChange}
                    placeholder="Barrio de ..."
                    autoFocus
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Rooms</Form.Label>
                <Form.Control
                    type="text" placeholder="5"
                    value={rooms} onChange={handleApartmentRoomsChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="text" placeholder="350"
                    value={price} onChange={handleApartmentPriceChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Bathrooms</Form.Label>
                <Form.Control
                    type="text" value={bathrooms} onChange={handleApartmentBathroomsChange}
                    placeholder="2"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Size</Form.Label>
                <Form.Control
                    type="text" placeholder="200"
                    value={size} onChange={handleApartmentSizehange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Apartment Images</Form.Label>
                <Form.Control
                    type="text" placeholder="https://example.com/image1.png, https://example.com/image2.png, https://example.com/image3.png"
                    value={apartment_images} onChange={handleApartment_ImagesChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Zona</Form.Label>
                <Form.Control
                    type="text" placeholder="ID of the Zone"
                    value={zone} onChange={handleApartmentZoneIDChange}
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

export default ApartmentsModal;