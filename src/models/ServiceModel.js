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

    async createService(data){
        const res = await api.post('/services',data,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer f80ca753-eb98-4d6b-b365-e7f3a2895805`
            }
        });
        return res.data;
    }
}