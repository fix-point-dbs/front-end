import api from "../lib/api";

export class BookingModel {
    async createBooking(data){
        const res = await api.post('/bookings',data,{
            headers: {
                'Authorization': `Bearer f80ca753-eb98-4d6b-b365-e7f3a2895805`,
                'Content-Type': 'multipart/form-data'
            }
        });
        return res;
    }

    async getBookingById(id){
        const res = await api.get(`/bookings/${id}`,{
            headers: {
                'Authorization': `Bearer f80ca753-eb98-4d6b-b365-e7f3a2895805`,
            }
        });
        return res.data;
    }

    async getBookings(query){
        const res = await api.get('/bookings' + query,{
            headers: {
                'Authorization': `Bearer f80ca753-eb98-4d6b-b365-e7f3a2895805`,
            }
        });
        return res.data;
    }

    async updateStatusBooking(id, data){
        const res = await api.put(`/bookings/${id}/update-status`,data,{
            headers: {
                'Authorization': `Bearer f80ca753-eb98-4d6b-b365-e7f3a2895805`
            }
        });
        return res;
    }
}