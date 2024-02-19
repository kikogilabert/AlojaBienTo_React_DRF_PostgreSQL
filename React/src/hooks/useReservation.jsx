import { useEffect, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { toast } from 'react-toastify';
import ReservationService from "../services/ReservationService";

export function useReservation() {
    // const navigate = useNavigate();
    const [reservations, setReservations] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const path = pathname.split('/')[1];
        if (path === 'admin-reservations') {
            ReservationService.getAllReservations()
                .then(({ data, status }) => {
                    if (status === 200) {
                        setReservations(data);
                    }
                })
                .catch(e => console.error(e));
        }
    }, []);


    //GET RESERVATION BY USER
    const useReservationByUser = (id) => {
        ReservationService.getReservationsByUser(id)
            .then(({ data, status }) => {
                if (status === 200) {
                    setReservations(data);
                }
            })
            .catch(e => console.error(e));
    };


    const useReservationApartment = (reservation) => {
        // console.log(reservation);
        ReservationService.CreateReservation(reservation)
            .then(({ data, status }) => {
                // console.log(data);
                // console.log(status);
                if (status == 200) {
                    // toast.success("Scooter rented, thank you!")
                }
            })
            .catch(() => {
                // toast.warning("You can't rent more than 1 scooter")
            });
    }

    const useDeleteReservation = (id) => {
        ReservationService.deleteReservation(id)
            .then(({ data, status }) => {
                if (status === 200) {
                    // console.log(data);
                    setReservations(reservations.filter(reservation => reservation.id !== id));
                    // toast.success(data.data);
                }
            })
            .catch(e => console.error(e));
    }
    

    return { isCorrect, setIsCorrect, reservations, useReservationByUser, setReservations, useReservationApartment, useDeleteReservation }
}