import React from 'react'
import HomeCSS from '../../pages/home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


export default function CardHomeApartments({ onClick, apartment }) {
    
    const handleCityClick = () => {
        onClick(apartment.slug);
    };
    
    return (  
        <div className="w3-col l3 m6 w3-margin-bottom">
            <img className={HomeCSS.fotocasa} src={apartment.apartment_images[0]} alt="House"  width="100%"/>
            <h3>{apartment.location}</h3>
            <p className="w3-opacity">{apartment.price}€</p>
            <ul className={HomeCSS.lists}>
                <li><FontAwesomeIcon icon={faDoorOpen} /> {apartment.rooms} habitaciones</li>
                <li><FontAwesomeIcon icon={faBath} /> {apartment.bathrooms} baños</li>
                <li><FontAwesomeIcon icon={faHouse} /> {apartment.size} m²</li>
            </ul>
            <p><button onClick={handleCityClick} className="w3-button w3-light-grey w3-block">Details</button></p>
        </div>   
                
    );
}


