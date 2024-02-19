import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useApartments } from '../../../../hooks/useApartments';
import { useZones } from '../../../../hooks/useZones';
import { useContext } from 'react';
import AuthContext from '../../../../context/AuthContext';
import { useCities } from '../../../../hooks/useCities';
import Carousel from 'react-bootstrap/Carousel';
import apartmentdetails from './Apartment_details.module.css'
import "react-datepicker/dist/react-datepicker.css";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import DatePickerModal from '../../../../components/Client/Apartments/datepicker_modal';
import { useReservation } from "../../../../hooks/useReservation";

export default function Apartment_details() {
    const { user, isAuth } = useContext(AuthContext);
    const { isCorrect, useReservationApartment } = useReservation();
    const navigate = useNavigate();
    const { slug } = useParams();
    const { useOneApartment, oneApartment } = useApartments();
    const { useOneZoneByApartment, oneZoneByApartment } = useZones();
    const { useOneCityByZone, oneCityByZone } = useCities();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        useOneApartment(slug);
    }, []);

    useEffect(() => {
        useOneZoneByApartment( oneApartment.zone )
    }, [oneApartment]);

    useEffect(() => {
        useOneCityByZone( oneZoneByApartment.city )
    }, [oneZoneByApartment]);

    const ManageReservation = () => {
        if(isAuth){
            handleShow();
        }
        else{
            console.log("No estas logueado");
            // toast("Wow so easy!");
            // <ToastContainer />
            setTimeout(() => {
            navigate('/login');
            }, 2000);
        }
    }

    const emit_data = (dates) => {
        useReservationApartment({ f_ini: dates.formattedStart, f_end: dates.formattedEnd ,apartment_id: oneApartment.id});        
    }

    return (
        <>
            <br/><br/><br /><br/><br/>
            <div className={apartmentdetails.ajustar}>
                <div className="row">
                    <div className={`col-md-6 ${apartmentdetails.carouselContainer}`}>
                        <Carousel>
                            {oneApartment.apartment_images && oneApartment.apartment_images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className={`d-block w-100 ${apartmentdetails.carouselImage}`}
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
                                <button className="btn btn-primary" onClick={ManageReservation}>Reservar</button>
                                <DatePickerModal show={show} handleClose={handleClose} onAddRevervation={emit_data}/>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}