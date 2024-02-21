import React from 'react'
import ListIncidents from '../../../components/Admin/Incidents/ListIncidents'

export default function incidence() {
    return (
        <div style={{ paddingTop: '110px', marginLeft: '20px', marginRight: '20px' }}>
            <h1>List Incidence</h1>
            <ListIncidents />
        </div>
    )
}