import api from "../lib/api";
export class StatisticsModel {
    async getStatistics(query) {
        const res = await api.get('/statistics'+query);
        return res.data;
    }

    async getMonthlyStatistics() {
        const res = await api.get('/statistics/monthly-bookings');
        return res.data;
    }
}