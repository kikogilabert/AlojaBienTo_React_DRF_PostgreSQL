import React from 'react'
import ListReservations from '../../../components/Admin/Reservations/ListReservations'

export default function reservations() {
    return (
        <div style={{ paddingTop: '80px', marginLeft: '20px', marginRight: '20px' }}>
            <h1>List Reservations</h1>
            <ListReservations />
        </div>
    )
}