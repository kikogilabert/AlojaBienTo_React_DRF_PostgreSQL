import React from 'react';
// import { useIncidents } from '../../../hooks/useIncidents';
import Table from 'react-bootstrap/Table';

function ListIncidents() {
    // const {incidents, useDeleteIncidents } = useIncidents();

    // const deleteReservation = (id) => {
    //     useDeleteReservation(id);
    // }


    return (
        <div>
            <br />
            <h1>Component Incidence</h1>
            <div style={{ display: 'flex', marginTop:'10px' }}>
            <Table striped bordered hover responsive>
                    {/* <thead>
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
                    </tbody> */}
                </Table>
            </div>
        </div>
    );
}

export default ListIncidents;
