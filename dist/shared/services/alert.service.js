var AlertService = /** @class */ (function () {
    function AlertService() {
        this.alerts = [];
    }
    AlertService.prototype.addAlert = function (alert) {
        var _this = this;
        this.alerts.push(alert);
        setTimeout(function () {
            _this.removeAlert(alert);
        }, 3000);
    };
    AlertService.prototype.getAlerts = function () {
        return this.alerts;
    };
    AlertService.prototype.closeAlert = function (index) {
        this.alerts.splice(index, 1);
    };
    AlertService.prototype.showSuccess = function (message) {
        this.addAlert({
            type: "success",
            message: message
        });
    };
    AlertService.prototype.showError = function (message) {
        this.addAlert({
            type: "danger",
            message: message
        });
    };
    AlertService.prototype.removeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        if (index !== -1) {
            this.closeAlert(index);
        }
    };
    return AlertService;
}());

