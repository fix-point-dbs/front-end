import { BookingModel } from "../../models/BookingModel";
export class HistoryOrderPresenter {
    constructor(view) {
        this.view = view;
        this.model = new BookingModel;
    }
    async loadOrders(){
        try {
            this.view.setIsLoading(true);
            const orders = await this.model.getBookings('?user_service_id=' + this.view.id);
            this.view.setOrders(orders);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.setIsLoading(false);
        }
    }
}