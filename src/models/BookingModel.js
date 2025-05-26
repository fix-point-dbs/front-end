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
}