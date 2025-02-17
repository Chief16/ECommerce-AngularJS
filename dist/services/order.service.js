var OrderService = /** @class */ (function () {
    function OrderService() {
    }
    OrderService.prototype.getOrders = function () {
        return sessionStorage.getItem("orders") ? JSON.parse(sessionStorage.getItem("orders")) : [];
    };
    return OrderService;
}());

