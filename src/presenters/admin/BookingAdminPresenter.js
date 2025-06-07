import{BookingModel} from "../../models/BookingModel";
export class BookingAdminPresenter {
    constructor(view) {
        this.view = view;
        this.model = new BookingModel;
    }

    async loadBookings() {
        try {
            this.view.setIsLoading(true);
            const bookings = await this.model.getBookings('');
            this.view.setBookings(bookings);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.setIsLoading(false);
        }
    }
}