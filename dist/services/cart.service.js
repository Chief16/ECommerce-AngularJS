var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var CartService = /** @class */ (function () {
    function CartService(alertService, $location) {
        this.alertService = alertService;
        this.$location = $location;
        this.catalogsInCart = [];
        this.catalogsInCart = (sessionStorage.getItem("catalogsInCart") && sessionStorage.getItem("catalogsInCart") != "") ? JSON.parse(sessionStorage.getItem("catalogsInCart")) : [];
    }
    CartService.prototype.addToCart = function (catalog) {
        var _a;
        var cat = ((_a = this.catalogsInCart) === null || _a === void 0 ? void 0 : _a.filter(function (c) { return c.title === catalog.title; })[0]) ||
            null;
        if (cat) {
            cat.quantity++;
        }
        else {
            this.catalogsInCart.push({
                title: catalog.title,
                quantity: 1,
                price: catalog.price,
                image: catalog.image,
            });
        }
        sessionStorage.setItem("catalogsInCart", JSON.stringify(this.catalogsInCart));
        this.alertService.showSuccess("Item added to cart successfully!");
    };
    CartService.prototype.getItemsFromCart = function () {
        return this.catalogsInCart || [];
    };
    CartService.prototype.getItemsCountFromCart = function () {
        var _a;
        return ((_a = this.catalogsInCart) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, item) { return acc + item.quantity; }, 0)) || 0;
    };
    CartService.prototype.getTotalCartValue = function () {
        var _a;
        return (_a = this.catalogsInCart) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, item) { return acc + item.price * item.quantity; }, 0);
    };
    CartService.prototype.removeFromCart = function (item) {
        var _a;
        this.catalogsInCart = (_a = this.catalogsInCart) === null || _a === void 0 ? void 0 : _a.filter(function (c) { return c.title !== item.title; });
        sessionStorage.setItem("catalogsInCart", JSON.parse(JSON.stringify(this.catalogsInCart)));
        this.alertService.showSuccess("Item removed from cart successfully!");
    };
    CartService.prototype.checkout = function () {
        var orderData = sessionStorage.getItem("orders") ? JSON.parse(sessionStorage.getItem("orders")) : [];
        var newOrder = {
            id: orderData.length + 1,
            orderDate: new Date().toISOString(),
            orderItems: this.catalogsInCart,
            total: this.getTotalCartValue(),
        };
        sessionStorage.setItem("orders", JSON.stringify(__spreadArray(__spreadArray([], orderData, true), [newOrder], false)));
        this.catalogsInCart = [];
        sessionStorage.setItem("catalogsInCart", JSON.stringify(this.catalogsInCart));
        this.alertService.showSuccess("Order placed successfully! It will be delivered in 2-3 business days.", 5000);
        this.$location.path("/orders");
    };
    CartService.$inject = ["AlertService", "$location"];
    return CartService;
}());

