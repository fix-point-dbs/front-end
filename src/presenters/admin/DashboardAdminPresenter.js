import { StatisticsModel } from "../../models/StatisticsModel";
import { ServiceModel } from "../../models/ServiceModel";
export class DashboardAdminPresenter {
    constructor(view) {
        this.view = view;
        this.statisticsModel = new StatisticsModel();
        this.serviceModel = new ServiceModel();
    }

    async loadDashboard() {
        try {
            this.view.setIsLoading(true);
            const statistics = await this.statisticsModel.getStatistics("?type=all");
            this.view.setStatistics(statistics);
            const services = await this.serviceModel.getServices('?status=pending');
            this.view.setServices(services);
            const grap = await this.statisticsModel.getMonthlyStatistics();
            this.view.setGrap(grap);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.setIsLoading(false);
        }
    }
}