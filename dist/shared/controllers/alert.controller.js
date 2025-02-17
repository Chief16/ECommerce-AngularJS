var AlertController = /** @class */ (function () {
    function AlertController($scope, alertService, $timeout) {
        this.$scope = $scope;
        this.alertService = alertService;
        this.$timeout = $timeout;
        this.alerts = this.getAlerts();
        this.$scope["alertCtrl"] = this;
        this.updateAlerts();
    }
    AlertController.prototype.updateAlerts = function () {
        var _this = this;
        this.getAlerts();
        this.$timeout(function () {
            _this.updateAlerts();
        }, 1000);
    };
    AlertController.prototype.getAlerts = function () {
        this.alerts = this.alertService.getAlerts();
        this.$scope["alertCtrl"] = this;
        return this.alerts;
    };
    AlertController.prototype.closeAlert = function (index) {
        console.log('closeAlert', index);
        this.alertService.closeAlert(index);
    };
    AlertController.prototype.getAvlAlerts = function () {
        return this.alertService.getAlerts();
    };
    AlertController.$inject = ["$scope", 'AlertService', "$timeout"];
    return AlertController;
}());

