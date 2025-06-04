import api from "../lib/api";

export class ListServiceModel {
    async getListService() {
        const res = await api.get("/list-services");
        return res.data;
    }
}