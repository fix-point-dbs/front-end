import { BookingModel } from '../../models/BookingModel';
export class ConfirmationBookingPresenter {
    constructor( view ) {
        this.view = view;
        this.model = new BookingModel;
    }

    async loadBooking() {
        try {
            this.view.setIsLoading(true);
            const booking = await this.model.getBookingById(this.view.id);
            this.view.setBooking(booking);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.setIsLoading(false);
        }
    }
}