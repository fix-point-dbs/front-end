import { BookingModel } from "../../models/BookingModel";
export class OrderPresenter {
    constructor(view) {
        this.view = view;
        this.model = new BookingModel;
    }

    async loadOrders(){
        try {
            this.view.setIsLoading(true);
            const orders = await this.model.getBookings('?status=order&&user_service_id=' + this.view.id);
            this.view.setOrders(orders);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.setIsLoading(false);
        }
    }

    async updateStatus(booking_id, status){
        try {
            this.view.setIsLoading(true);
            const res = await this.model.updateStatusBooking(booking_id, status);
            console.log(res);
            this.loadOrders();
        } catch (error) {
            console.log(error);
        }finally{
            this.view.setIsLoading(false);
        }
    }
}