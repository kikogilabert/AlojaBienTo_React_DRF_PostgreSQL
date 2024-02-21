import { useEffect, useState } from 'react';
import IncidentsService from '../services/IncidentsService';



export const useIncidents = () => {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        IncidentsService.getIncidents()
            .then(({ data, status }) => {
                if (status === 200) {
                    setIncidents(data);
                }
            })
            .catch(e => console.error(e));
    }, []);

    return {incidents, setIncidents};
}

export default useNotifications;
