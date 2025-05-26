import { BookingModel } from '../../models/BookingModel';
import { ServiceModel } from '../../models/ServiceModel';
export class BookingPresenter {
    constructor(view){
        this.view = view;
        this.modelBooking = new BookingModel;
        this.modelService = new ServiceModel;
    }

    async loadServices(){
        try {
            const services = await this.modelService.getServiceById(this.view.id);
            this.view.setServices(services);
        } catch (error) {
            console.log(error);
        }
    }

    async addBooking(booking){
        try {
            this.view.setIsLoading(true);
            const res = await this.modelBooking.createBooking(booking);
            console.log(res);
            this.view.onSuccess();
        } catch (error) {
            console.log(error);
        }finally{
            this.view.setIsLoading(false);
        }
    }
}