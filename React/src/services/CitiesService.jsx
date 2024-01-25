import api from './api';

const CitiesService = {

    getAllCities() {
        return api().get('/cities');
    },

    getOneCity(slug) {
        return api().get(`cities/${slug}`);
    },

    createCity(data) {
        return api().post('/cities/', data);
    },

    updateCity(slug, data) {
        return api().put(`cities/${slug}`, data);
    },

    
    deleteCity(slug) {
        return api().delete(`cities/${slug}`);
    },
};
export default CitiesService;