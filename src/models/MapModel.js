import api from "../lib/api";

export class MapModel {
    async getAddress(lat, lng) {
        const res = await api.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
        return res.data;
    }
}