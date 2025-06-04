import { BookingModel } from "../../models/BookingModel";
export class BookingUserPresenter {
    constructor(view) {
        this.view = view;
        this.model = new BookingModel;
    }

    async loadBooking() {
        try {
            const response = await this.model.getBookings('?user_id=' + this.view.id);
            this.view.setBookings(response);
        } catch (error) {
            console.log(error);
        }
    }
}