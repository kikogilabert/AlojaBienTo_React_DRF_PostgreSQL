import api from "./api"

const IncidenceService = {

    getIncidents() {
        return api().get(`apartment_incidents`);
    },

    CreateIncidence(data) {
        return api().post(`apartment_incidence`, data);
    },
    
    DeleteIncidence(id) {
        return api().delete(`apartment_incident/${id}`);
    },

    UpdateIncidence(state, id) {
        return api().put(`apartment_incident/${id}`, state);
    }
};

export default IncidenceService;