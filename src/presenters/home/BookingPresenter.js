import { BookingModel } from '../../models/BookingModel';
import { ServiceModel } from '../../models/ServiceModel';
import { showErrorToast } from '../../utils/Toast';
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
            showErrorToast("Gagal memuat layanan");
        }
    }

    async addBooking(booking){
        try {
            this.view.setIsLoading(true);
            const res = await this.modelBooking.createBooking(booking);
            this.view.onSuccess(res.data.data.id);
        } catch (error) {
            console.log(error);
            showErrorToast("Gagal menambahkan pemesanan");
        }finally{
            this.view.setIsLoading(false);
        }
    }
}