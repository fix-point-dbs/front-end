import { ServiceModel } from "../../models/ServiceModel";
export class ServicePresenter {
    constructor(view) {
        this.view = view;
        this.model = new ServiceModel;
    }

    async loadServices() {
        try {
            const services = await this.model.getServices('?status=approved');
            this.view.setServices(services);
        } catch (error) {
            console.log(error);
        }
    }
}