import api from "../lib/api";
import { getToken } from '../lib/auth';
export class BookingModel {
    async createBooking(data){
        const res = await api.post('/bookings',data,{
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        return res;
    }

    async getBookingById(id){
        const res = await api.get(`/bookings/${id}`,{
            headers: {
                'Authorization': `Bearer ${getToken()}`,
            }
        });
        return res.data;
    }

    async getBookings(query){
        const res = await api.get('/bookings' + query,{
            headers: {
                'Authorization': `Bearer ${getToken()}`,
            }
        });
        return res.data;
    }

    async updateStatusBooking(id, data){
        const res = await api.put(`/bookings/${id}/update-status`,data,{
            headers: {
                'Authorization': `Bearer ${getToken()}`,
            }
        });
        return res;
    }
}