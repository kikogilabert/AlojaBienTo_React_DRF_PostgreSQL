import api from './api';

const CitiesService = {

    getAllCities() {
        return api().get('/cities');
    },

    getOneCity(id) {
        return api().get(`cities/${id}`);
    },

    createCity(data) {
        return api().post('/cities/', data);
    },

    updateCity(id, data) {
        return api().put(`cities/${id}`, data);
    },

    
    deleteCity(id) {
        return api().delete(`cities/${id}`);
    },
};
export default CitiesService;