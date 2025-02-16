var CartService = /** @class */ (function () {
    function CartService($http) {
        this.$http = $http;
        this.$inject = ["$http"];
        this.authUrl = "https://fakestoreapi.com/cart";
        this.catalogs = [];
        this.catalogsInCart = [];
    }
    CartService.prototype.addToCart = function (catalog) {
        var _this = this;
        return this.$http
            .post(this.authUrl, catalog)
            .then(function (response) {
            _this.catalogsInCart = JSON.parse(JSON.stringify(response.data));
            return _this.catalogsInCart;
        })
            .catch(function (error) {
            console.log(error);
            return [];
        });
    };
    CartService.prototype.getItemsFromCart = function () {
        var _this = this;
        return this.$http
            .get(this.authUrl)
            .then(function (response) {
            _this.catalogsInCart = JSON.parse(JSON.stringify(response.data));
            return _this.catalogsInCart;
        })
            .catch(function (error) {
            console.log(error);
            return [];
        });
    };
    CartService.prototype.getItemsCountFromCart = function () {
        return this.catalogsInCart.length || 0;
    };
    return CartService;
}());