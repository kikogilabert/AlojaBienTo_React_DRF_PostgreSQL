import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useIncidence } from '../../../hooks/useIncidence'

function ExampleModal({ show, handleClose, id_apartment }) {
    const [selectedOption, setSelectedOption] = useState('');
    const [description, setDescription] = useState('');
    const { useCreateIncidence } = useIncidence();
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = () => {
        const incidenceData = {
            apartment_incidence: {
                apartment_id: id_apartment,
                title: selectedOption,
                desc: description
            }
        };
        useCreateIncidence(incidenceData);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Report Incidence</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Incidence Type</Form.Label>
                        <Form.Control as="select" onChange={handleSelectChange}>
                            <option value="Baño">Baño</option>
                            <option value="Cocina">Cocina</option>
                            <option value="Sala de estar">Sala de estar</option>
                            <option value="Llaves">Llaves</option>
                            <option value="Calefacción">Calefacción</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={handleDescriptionChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Enviar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ExampleModal;
