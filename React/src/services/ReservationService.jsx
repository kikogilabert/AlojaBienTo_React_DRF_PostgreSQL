import api from "./api"

const ReservationService = {

    getAllReservations() {
        return api().get("/reservations");
    },

    CreateReservation(data) {
        return api().post(`reservation/${data.apartment_id}`, data);
    },

    getReservationsByUser() {
        return api().get("/reservation");
    },

    deleteReservation(id) {
        return api().delete(`reservations/${id}`);
    },

};

export default ReservationService;