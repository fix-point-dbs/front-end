import { ServiceModel } from "../../models/ServiceModel";
export class MitraAdminPresenter {
    constructor(view) {
        this.view = view;
        this.model = new ServiceModel;
    }

    async loadServices() {
        try {
            this.view.setIsLoading(true);
            const services = await this.model.getServices('');
            this.view.setServices(services);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.setIsLoading(false);
        }
    }

    async deleteService(id) {
        try {
            this.view.setIsLoading(true);
            const res = await this.model.deleteService(id);
            console.log(res);
            this.loadServices();
        } catch (error) {
            console.log(error);
        }finally{
            this.view.setIsLoading(false);
        }
    }
    
}