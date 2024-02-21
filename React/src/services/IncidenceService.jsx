import api from "./api"

const IncidenceService = {

    getIncidents() {
        // return api().get(`apartment_incidence`);
    },

    CreateIncidence(data) {
        return api().post(`apartment_incidence`, data);
    },
    
};

export default IncidenceService;