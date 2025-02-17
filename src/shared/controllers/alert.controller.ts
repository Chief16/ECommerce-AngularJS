import angular from "angular";
import { IAlert } from "../../interfaces/alert";
import { AlertService } from "../services/alert.service";

export interface ICustomScope extends angular.IScope {
    alertCtrl: AlertController;
}

export class AlertController {
    static $inject = ["$scope", 'AlertService', "$timeout"];
    
    alerts: IAlert[] = this.getAlerts();

    constructor(
        private $scope: ICustomScope,
        private alertService: AlertService,
        private $timeout: angular.ITimeoutService
    ) {
        this.$scope["alertCtrl"] = this;
        this.updateAlerts();
    }

    updateAlerts() {
        this.getAlerts();
        this.$timeout(() => {
            this.updateAlerts();
        }, 1000);
    }

    getAlerts() {
        this.alerts = this.alertService.getAlerts();
        this.$scope["alertCtrl"] = this;
        return this.alerts;
    }

    closeAlert(index: number) {
        console.log('closeAlert', index);
        this.alertService.closeAlert(index);
    }

    getAvlAlerts() {
        return this.alertService.getAlerts();
    }
}
