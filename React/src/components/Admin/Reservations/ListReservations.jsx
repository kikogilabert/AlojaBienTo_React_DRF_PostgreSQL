import React from 'react';
import { useReservation } from '../../../hooks/useReservation';

function ListReservations() {
    const {reservations, useDeleteReservation } = useReservation();

    const deleteReservation = (id) => {
        useDeleteReservation(id);
    }


    return (
        <div>
            <h1>List of Reservations</h1>
            <br />
            <div style={{ marginLeft: '20px', display: 'flex', justifyContent: 'center' }}>
                <table className="table" style={{ border: '1px black solid' }}>
                    <thead>
                        <tr >
                            <th scope="col">ID</th>
                            <th scope="col">Fecha Inicio</th>
                            <th scope="col">Fecha Fin</th>
                            <th scope="col">Apartamento</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((reservation, index) => (
                            <tr key={index}>
                                <td>{reservation.id}</td>
                                <td>{reservation.f_ini}</td>
                                <td>{reservation.f_end}</td>
                                <td>{reservation.apartment_id}</td>
                                <td>{reservation.user_id}</td>
                                <td><button className="btn btn-danger" onClick={() => deleteReservation(reservation.id)}>DELETE</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListReservations;
