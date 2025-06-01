import api from "../lib/api";

export class BookingModel {
    async createBooking(data){
        const res = await api.post('/bookings',data,{
            headers: {
                'Authorization': `Bearer`,
                'Content-Type': 'multipart/form-data'
            }
        });
        return res;
    }

    async getBookingById(id){
        const res = await api.get(`/bookings/${id}`,{
            headers: {
                'Authorization': `Bearer`,
            }
        });
        return res.data;
    }

    async getBookings(query){
        const res = await api.get('/bookings' + query,{
            headers: {
                'Authorization': `Bearer`,
            }
        });
        return res.data;
    }

    async updateStatusBooking(id, data){
        const res = await api.put(`/bookings/${id}/update-status`,data,{
            headers: {
                'Authorization': `Bearer`
            }
        });
        return res;
    }
}