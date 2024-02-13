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

    const handleCityClick = (slug_city) => {
        navigate('/zones/' + slug_city)
    };

    const handleApartmentsClick = (slug_apartment) => {
      navigate('/apartment_details/' + slug_apartment)
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

                {/* <!-- About Section --> */}
                <div className="w3-container w3-padding-32" id="about">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Variedad de Lugares</h3>
                <p>
                Somos una empresa especializada en ofrecer una amplia gama de apartamentos en diferentes ubicaciones de España. 
                Desde las bulliciosas calles de Barcelona hasta los encantadores pueblos costeros de Andalucía, nuestra variedad de 
                apartamentos brinda opciones para satisfacer todas las necesidades y preferencias. 
                Con un enfoque en la comodidad, la calidad y la accesibilidad, nos esforzamos por proporcionar a nuestros clientes 
                experiencias únicas y memorables en cada estancia. Ya sea que estés planeando unas vacaciones familiares, 
                un viaje de negocios o una escapada romántica, estamos aquí para ayudarte a encontrar el alojamiento 
                perfecto para tu próxima aventura en España.
                </p>
                </div>
                    <div className="w3-row-padding">
                      {apartments.map((apartment, index) => (
                        <CardHomeApartments key={apartment.id} apartment={apartment} onClick={handleApartmentsClick} />
                      ))}
                    </div>
                </div>          
            </div>
          );
}