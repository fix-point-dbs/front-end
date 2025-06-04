import api from "../lib/api";

export class MapModel {
    async reverseGeocode(lat, lng) {
        const res = await api.get(`/reverse-geocode?lat=${lat}&lon=${lng}`);
        return res.data;
    }
}