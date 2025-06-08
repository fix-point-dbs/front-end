import { BookingModel } from "../../models/BookingModel";
import { StatisticsModel } from "../../models/StatisticsModel";
export class DashboardMitraPresenter {
    constructor(view) {
        this.view = view;
        this.model = new BookingModel;
        this.statisticsModel = new StatisticsModel;
    }

    async loadDashboard() {
        try {
            const statistics = await this.statisticsModel.getMonthlyStatistics("?service_id=" + this.view.id);
            this.view.setStatistics(statistics);
            const bookings = await this.model.getBookings('?status=pending&service_id=' + this.view.id);
            this.view.setBookings(bookings);
            const rejected = await this.model.getBookings('?status=rejected&service_id=' + this.view.id);
            const approved = await this.model.getBookings('?status=approved&service_id=' + this.view.id);
            const done = await this.model.getBookings('?status=done&service_id=' + this.view.id);
            const result = {
                "approved": approved.data.length,
                "rejected": rejected.data.length,
                "done": done.data.length,
                "pending": bookings.data.length
            };
            this.view.setResult(result);
        } catch (error) {
            console.log(error);
        } 
    }
}