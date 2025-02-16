var CartService = /** @class */ (function () {
    function CartService() {
        this.catalogs = [];
        this.catalogsInCart = [];
        this.catalogsInCart = JSON.parse(JSON.stringify(localStorage.getItem("catalogsInCart"))) || [];
    }
    CartService.prototype.addToCart = function (catalog) {
        var cat = this.catalogsInCart.filter(function (c) { return c.name === catalog.name; })[0] ||
            null;
        if (cat) {
            cat.quantity++;
        }
        else {
            this.catalogsInCart.push({
                name: catalog.name,
                quantity: 1,
                price: catalog.price,
            });
        }
        sessionStorage.setItem("catalogsInCart", JSON.parse(JSON.stringify(this.catalogsInCart)));
    };
    CartService.prototype.getItemsFromCart = function () {
        return this.catalogsInCart;
    };
    CartService.prototype.getItemsCountFromCart = function () {
        return this.catalogsInCart.reduce(function (acc, item) { return acc + item.quantity; }, 0) || 0;
    };
    CartService.prototype.getTotalCartValue = function () {
        return this.catalogsInCart.reduce(function (acc, item) { return acc + item.price * item.quantity; }, 0);
    };
    CartService.prototype.removeFromCart = function (item) {
        this.catalogsInCart = this.catalogsInCart.filter(function (c) { return c.name !== item.name; });
        sessionStorage.setItem("catalogsInCart", JSON.parse(JSON.stringify(this.catalogsInCart)));
    };
    return CartService;
}());