import { ServiceModel } from "../models/ServiceModel";
export class DetailServicePresenter{

    constructor(view){
        this.view = view;
        this.model = new ServiceModel;
    }

    async loadService(){
        try {
            this.view.setIsLoading(true);
            const service = await this.model.getServiceById(this.view.id);
            this.view.setService(service);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.setIsLoading(false);
        }
    }
}