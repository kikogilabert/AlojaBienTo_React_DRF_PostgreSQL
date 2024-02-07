import React from 'react'
// import ListCities from '../components/Client/Cities/ListCities'
import HomeCSS from  './Home.module.css';
import CardHomeCities from '../components/Home/card_home_cities';
import { useContext } from "react";
import CitiesContext from "../context/CitiesContext";
import ApartmentContext from "../context/ApartmentContext";
import { useNavigate } from 'react-router-dom';
import CardHomeApartments from '../components/Home/card_home_apartments';



export default function Home() {
    const navigate = useNavigate();
    const { cities, setCities } = useContext(CitiesContext);
    const { apartments, setApartments } = useContext(ApartmentContext);

    const handleCityClick = (slug) => {
        navigate('/zones/' + slug)
    };
    const handleApartmentsClick = (slug) => {
      navigate('/apartments/' + slug)
  };
    return (
            <div>
        
              {/* <!-- Header --> */}
              <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: '1500px' }} id="home">
                <img className="w3-image" src="https://www.w3schools.com/w3images/architect.jpg" alt="Architecture" width="1500" height="800" />
                <div className="w3-display-middle w3-margin-top w3-center">
                  <h1 className="w3-xxlarge w3-text-white">
                    <span className="w3-padding w3-black w3-opacity-min"><b>ABT</b></span> <span className="w3-hide-small w3-text-light-grey">AlojaBienTo</span>
                  </h1>
                </div>
              </header>
        
              {/* <!-- Page content --> */}
              <div className="w3-content w3-padding" style={{ maxWidth: '1564px' }}>
        
                {/* <!-- Project Section --> */}
{/* ------------------------------------------------------------------------------------------------------------------- */}
                <div className="w3-row-padding">
                <div className="w3-container w3-padding-32" id="projects">
                    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Nuestras Mejores Ciudades</h3>
                </div>
                <div className="w3-row-padding">
                {cities.map((city, index) => (
                    <CardHomeCities key={city.id} city={city} onClick={handleCityClick} />
                ))}
                </div>
                </div>
        {/* -------------------------------------------------------------------------------------------- */}

                {/* <!-- About Section --> */}
                <div className="w3-container w3-padding-32" id="about">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </div>
                    <div className="w3-row-padding w3-grayscale">
                      {apartments.map((apartment, index) => (
                        <CardHomeApartments key={apartment.id} apartment={apartment} onClick={handleApartmentsClick} />
                      ))}
                    </div>
                </div>
        
                {/* <!-- Contact Section --> */}
                 <div className="w3-container w3-padding-32" id="contact">
                  {/* ... (Contact form) ... */}
                </div>
        
                {/* <!-- Image of location/map --> */}
                <div className="w3-container">
                  <img src="/w3images/map.jpg" className="w3-image" width="100%"/>
                </div>            
            </div>
          );
}