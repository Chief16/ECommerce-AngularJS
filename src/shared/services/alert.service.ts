import { IAlert } from "../../interfaces/alert";

export class AlertService {
    private alerts: IAlert[] = [];

    constructor() {
    }

    addAlert(alert: IAlert) {
        this.alerts.push(alert);
        
        setTimeout(() => {
            this.removeAlert(alert);
        }, 3000);
    }

    getAlerts() {
        return this.alerts;
    }

    closeAlert(index: number) {
        this.alerts.splice(index, 1);
    }

    showSuccess(message: string) {
        this.addAlert({
            type: "success",
            message
        });
    }

    showError(message: string) {
        this.addAlert({
            type: "danger",
            message
        });
    }

    private removeAlert(alert: IAlert) {
        const index = this.alerts.indexOf(alert);
        if (index !== -1) {
            this.closeAlert(index);
        }
    }
}
