import api from "../lib/api";

export class BookingModel {
    async createBooking(data){
        const res = await api.post('/bookings',data,{
            headers: {
                'Authorization': `Bearer e17e001a-0b21-41ef-8349-b29f83a5d6f2`,
                'Content-Type': 'multipart/form-data'
            }
        });
        return res;
    }
}