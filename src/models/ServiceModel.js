import api from "../lib/api";

export class ServiceModel {
    async getServices() {
        const res = await api.get('/services');
        return res.data;
    }

    async getServiceById(id){
        const res = await api.get(`/services/${id}`);
        return res.data;
    }
}