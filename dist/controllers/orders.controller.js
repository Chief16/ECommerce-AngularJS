var OrderController = /** @class */ (function () {
    function OrderController(orderService) {
        this.orderService = orderService;
        this.orders = [];
        this.isOrdersEmpty = false;
        this.getOrders();
    }
    OrderController.prototype.getOrders = function () {
        this.orders = this.orderService.getOrders();
        if (this.orders.length === 0) {
            this.isOrdersEmpty = true;
        }
    };
    OrderController.$inject = ["OrderService"];
    return OrderController;
}());

