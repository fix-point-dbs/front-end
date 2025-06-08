import api from "../lib/api";
import { getToken } from '../lib/auth';
export class StatisticsModel {
    async getStatistics(query) {
        const res = await api.get('/statistics'+query,{
            headers: {
                'Authorization': `Bearer ${getToken()}`,
            }
        });
        return res.data;
    }

    async getMonthlyStatistics() {
        const res = await api.get('/statistics/monthly-bookings',{
            headers: {
                'Authorization': `Bearer ${getToken()}`,
            }
        });
        return res.data;
    }
}