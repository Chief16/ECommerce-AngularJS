var OrderController = /** @class */ (function () {
    function OrderController(orderService, $location, authService, alertService) {
        this.orderService = orderService;
        this.$location = $location;
        this.authService = authService;
        this.alertService = alertService;
        this.orders = [];
        this.isOrdersEmpty = false;
        if (!this.authService.isUserLoggedIn()) {
            // this.alertService.showError("You need to login to view orders.", 5000);
            this.$location.path("/catalog");
            return;
        }
        this.getOrders();
    }
    OrderController.prototype.getOrders = function () {
        this.orders = this.orderService.getOrders();
        if (this.orders.length === 0) {
            this.isOrdersEmpty = true;
        }
    };
    OrderController.$inject = ["OrderService", "$location", "AuthService", "AlertService"];
    return OrderController;
}());

