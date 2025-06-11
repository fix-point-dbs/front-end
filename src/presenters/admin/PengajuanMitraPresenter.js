import { ServiceModel } from "../../models/ServiceModel";
export class PengajuanMitraPresenter {
    constructor(view) {
        this.view = view;
        this.model = new ServiceModel;
    }

    async loadServices() {
        try {
            this.view.setIsLoading(true);
            const services = await this.model.getServices('?status=pending');
            this.view.setServices(services);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.setIsLoading(false);
        }
    }

    async updateStatus(id, status) {
        try {
            this.view.setIsLoading(true);
            const res = await this.model.updateService(id, status);
            console.log(res);
            this.loadServices();
        } catch (error) {
            console.log(error);
        }finally{
            this.view.setIsLoading(false);
        }
    }

   
    
}