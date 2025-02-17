var CartService = /** @class */ (function () {
    function CartService(alertService) {
        this.alertService = alertService;
        this.catalogsInCart = [];
        this.catalogsInCart = JSON.parse(sessionStorage.getItem("catalogsInCart")) || [];
    }
    CartService.prototype.addToCart = function (catalog) {
        var cat = this.catalogsInCart.filter(function (c) { return c.title === catalog.title; })[0] ||
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
        sessionStorage.setItem("orders", JSON.stringify(this.catalogsInCart));
        this.catalogsInCart = [];
        sessionStorage.setItem("catalogsInCart", JSON.stringify(this.catalogsInCart));
        this.alertService.showSuccess("Order placed successfully!");
    };
    CartService.$inject = ["AlertService"];
    return CartService;
}());

