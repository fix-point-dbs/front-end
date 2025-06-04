import {ListServiceModel} from "../../models/ListServiceModel";
import { MapModel } from "../../models/MapModel";
import { ServiceModel } from "../../models/ServiceModel";
import { showErrorToast } from "../../utils/Toast";
export class RegistrationMitraPresenter {
    constructor(view) {
        this.view = view;
        this.listServiceModel = new ListServiceModel();
        this.mapModel = new MapModel();
        this.model = new ServiceModel();
    }

    async loadListService() {
        try {
            const services = await this.listServiceModel.getListService();
            this.view.setListService(services);
        } catch (error) {
            console.log(error);
        }
    }

    async loadMap(lat, lng) {
        try {
            const map = await this.mapModel.reverseGeocode(lat, lng);
            this.view.setFormData((prev) => ({ ...prev, address: map.data.display_name, postal_code: map.data.address?.postcode }));;
        } catch (error) {
            console.log(error);
            showErrorToast("Gagal mengambil alamat");
        }
    }

    async addMitra(mitra){
        try {
            const res = await this.model.createService(mitra);
            console.log(res);
            this.view.onSuccess(res.data.id);
        } catch (error) {
            console.log(error);
            showErrorToast("Gagal menambahkan mitra");
        }
    }

    async reviewMitra(){
        try {
            const res = await this.model.getServiceById(this.view.id);
            this.view.setStatus(res.data.status);
        } catch (error) {
            console.log(error);
        }
    }
}