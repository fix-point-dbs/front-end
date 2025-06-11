import { BookingModel } from '../../models/BookingModel';
import { ReviewModel } from '../../models/ReviewModel';
import { showErrorToast } from '../../utils/Toast';
export class ConfirmationBookingPresenter {
    constructor( view ) {
        this.view = view;
        this.model = new BookingModel;
        this.modelReview = new ReviewModel;
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

    async addReview(review){
        try {
            this.view.setIsLoading(true);
            await this.modelReview.createReview(review);
            this.view.onSuccess();
        } catch (error) {
            console.log(error);
            showErrorToast("Review gagal ditambahkan")
        }finally{
            this.view.setIsLoading(false);
        }
    }
}