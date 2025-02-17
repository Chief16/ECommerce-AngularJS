var AlertService = /** @class */ (function () {
    function AlertService() {
        this.alerts = [];
    }
    AlertService.prototype.addAlert = function (alert, time) {
        var _this = this;
        if (time === void 0) { time = 3000; }
        this.alerts.push(alert);
        setTimeout(function () {
            _this.removeAlert(alert);
        }, time);
    };
    AlertService.prototype.getAlerts = function () {
        return this.alerts;
    };
    AlertService.prototype.closeAlert = function (index) {
        this.alerts.splice(index, 1);
    };
    AlertService.prototype.showSuccess = function (message, time) {
        if (time === void 0) { time = 3000; }
        this.addAlert({
            type: "success",
            message: message
        }, time);
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

