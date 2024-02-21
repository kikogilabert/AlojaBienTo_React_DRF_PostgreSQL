import React from 'react';
import { useIncidence } from '../../../hooks/useIncidence';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function ListIncidents() {
    const { incidents, useDeleteIncidents, useUpdateIncidence } = useIncidence();
    // console.log(incidents);

    const deleteIncidence = (id) => {
        useDeleteIncidents(id);
    }

    const changeState = (state, id) => {
        const data = {
            status: state
        }
        useUpdateIncidence(data, id);
    }

    return (
        <div>
            <br />
            <div style={{ display: 'flex', marginTop: '10px' }}>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr >
                            <th scope="col">ID</th>
                            <th scope="col">Asunto</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Apartamento</th>
                            <th scope="col">Eliminar</th>
                            <th scope="col">Cambiar Estado</th>
                        </tr>
                    </thead>
                    <tbody style={{ paddingBottom: '10px' }}>
                        {incidents.map((incident, index) => (
                            <tr key={index}>
                                <td>{incident.id}</td>
                                <td>{incident.title}</td>
                                <td>{incident.desc}</td>
                                <td>{incident.status}</td>
                                <td>{incident.user_id}</td>
                                <td>{incident.apartment_id}</td>
                                <td><button className="btn btn-danger" onClick={() => deleteIncidence(incident.id)}>DELETE</button></td>
                                {/* resolved state */}
                                {incident.status === 'resolved' && <DropdownButton
                                    as={ButtonGroup}
                                    disabled
                                    key={'Secondary'}
                                    id='dropdown-variants-Secondary'
                                    title={'Resolved'}
                                >
                                </DropdownButton>}
                                {/* not resolved */}
                                {incident.status !== 'resolved' && <DropdownButton
                                    as={ButtonGroup}
                                    key={'Secondary'}
                                    id='dropdown-variants-Secondary'
                                    title={'Change Status'}
                                >
                                    <Dropdown.Item onClick={() => changeState('resolved', incident.id)}
                                        disabled={incident.status === 'resolved'}
                                    >
                                        Resolved
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => changeState('in_progress', incident.id)}
                                        disabled={incident.status === 'in_progress'}
                                    >
                                        In Proccess</Dropdown.Item>
                                </DropdownButton>}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default ListIncidents;
