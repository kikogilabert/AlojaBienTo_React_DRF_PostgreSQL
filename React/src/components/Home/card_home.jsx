import React from 'react'
import HomeCSS from '../../pages/home.module.css';

export default function CardHome({onClick, city, AllCities }) {
    const handleCityClick = () => {
        onClick(city.slug);
    };
    
    return (     
            <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">{city.name}</div>
                <div className={HomeCSS.ajustes}>
                    <img  onClick={handleCityClick} className={HomeCSS.fotoajustes} src={city.image} alt="House"  width="100%"/>
                </div>
            </div>
            </div>
    );
}