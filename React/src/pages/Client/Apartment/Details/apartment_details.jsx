import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useApartments } from '../../../../hooks/useApartments';
import { useZones } from '../../../../hooks/useZones';
import { useCities } from '../../../../hooks/useCities';
import Carousel from 'react-bootstrap/Carousel';
import apartmentdetails from './Apartment_details.module.css'

export default function Apartment_details() {
    const { slug } = useParams();
    const { useOneApartment, oneApartment } = useApartments();
    const { useOneZoneByApartment, oneZoneByApartment } = useZones();
    const { useOneCityByZone, oneCityByZone } = useCities();

    useEffect(() => {
        useOneApartment(slug);
    }, []);

    useEffect(() => {
        useOneZoneByApartment( oneApartment.zone )
    }, [oneApartment]);

    useEffect(() => {
        useOneCityByZone( oneZoneByApartment.city )
    }, [oneZoneByApartment]);

    const handleReserve = () => {
        console.log(oneApartment);
    }; 

    console.log(oneCityByZone);


    return (
        <>
            <br /><br /><br /><br /><br />
            <div className={apartmentdetails.ajustar}>
                <div className="row">
                    <div className={`col-md-6 ${apartmentdetails.carouselContainer}`}>
                        <Carousel>
                            {oneApartment.apartment_images && oneApartment.apartment_images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className={`d-block w-100 ${apartmentdetails.carouselImage}`} // Aplica los estilos a la imagen
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                    <div className="col-md-6">
                        <div className={apartmentdetails.apartmentInfo}>
                            <h2>Información del Apartamento</h2>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>Localización :</th>
                                        <td>{oneApartment.location}</td>
                                    </tr>
                                    <tr>
                                        <th>Precio :</th>
                                        <td>{oneApartment.price}</td>
                                    </tr>
                                    <tr>
                                        <th>M² :</th>
                                        <td>{oneApartment.size}</td>
                                    </tr>
                                    <tr>
                                        <th>Provincia :</th>
                                        <td>{oneCityByZone.state}</td>
                                    </tr>
                                    <tr>
                                        <th>Zona :</th>
                                        <td>{oneZoneByApartment.name} ( {oneCityByZone.name} )</td>
                                    </tr>
                                    <tr>
                                        <th>Número de baños :</th>
                                        <td>{ oneApartment.bathrooms }</td>
                                    </tr>
                                    <tr>
                                        <th>Número de habitaciones :</th>
                                        <td>{oneApartment.rooms}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className={apartmentdetails.buttonContainer}>
                                <button onClick={handleReserve}>Reservar</button>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}