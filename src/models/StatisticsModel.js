import api from "../lib/api";
import { getToken } from '../utils/LocalStorage';
export class StatisticsModel {
    async getStatistics(query) {
        const res = await api.get('/statistics'+query,{
            headers: {
                'Authorization': `Bearer ${getToken()}`,
            }
        });
        return res.data;
    }

    async getMonthlyStatistics(query) {
        const res = await api.get('/statistics/monthly-bookings'+query,{
            headers: {
                'Authorization': `Bearer ${getToken()}`,
            }
        });
        return res.data;
    }
}