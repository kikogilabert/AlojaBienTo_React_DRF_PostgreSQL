import React, { useEffect, useState } from 'react';
import CardApartmentsCSS from './CardApartments.module.css';
import { useZones } from '../../../hooks/useZones';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardApartments({ apartment, onClick }) {
    const { zones } = useZones();
    const navigate = useNavigate();

    const handleClick = () => {
        onClick(apartment.slug);
    };
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};
