var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var CatalogService = /** @class */ (function () {
    function CatalogService($http, cartService) {
        this.$http = $http;
        this.cartService = cartService;
        this.$inject = ["$http", "CartService"];
        this.authUrl = "https://fakestoreapi.com/products/";
        this.catalogs = [];
    }
    CatalogService.prototype.getCatalogs = function () {
        var _this = this;
        return this.$http.get(this.authUrl)
            .then(function (response) {
            return _this.manageCatalogs(response.data);
        })
            .catch(function (error) {
            console.error("Error fetching catalogs:", error);
            return [];
        });
    };
    CatalogService.prototype.getCatalogById = function (id) {
        return this.$http.get(this.authUrl + id)
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            console.error("Error fetching catalog by id:", error);
            return {};
        });
    };
    CatalogService.prototype.getCatalogCategories = function () {
        return this.$http.get(this.authUrl + "categories")
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            console.error("Error fetching catalog categories:", error);
            return [];
        });
    };
    CatalogService.prototype.getCatalogsByCategory = function (category) {
        var _this = this;
        return this.$http.get(this.authUrl + "/category/" + category)
            .then(function (response) {
            return _this.convertPriceToINR(response.data);
        })
            .catch(function (error) {
            console.error("Error fetching catalogs by category:", error);
            return [];
        });
    };
    CatalogService.prototype.manageCatalogs = function (data) {
        var catalogs = JSON.parse(JSON.stringify(data));
        catalogs = this.convertPriceToINR(catalogs);
        catalogs = this.addQuantityAvlToCatalogs(catalogs);
        catalogs = this.updateCatalogsAsPerCart(catalogs);
        return catalogs;
    };
    CatalogService.prototype.convertPriceToINR = function (data) {
        return data.map(function (c) { return __assign(__assign({}, c), { price: c.price * 86.45 }); });
    };
    CatalogService.prototype.addQuantityAvlToCatalogs = function (catalogs) {
        // generate random value between 0 and 15, add default 0 items in cart
        return catalogs.map(function (c) { return __assign(__assign({}, c), { quantityAvl: Math.floor(Math.random() * 15), itemsInCart: 0 }); });
    };
    CatalogService.prototype.updateCatalogsAsPerCart = function (catalogs) {
        var catalogsInCart = this.cartService.getItemsFromCart();
        catalogsInCart.forEach(function (item) {
            var catalog = catalogs.filter(function (c) { return c.title === item.title; })[0];
            catalog.quantityAvl -= item.quantity;
            catalog.itemsInCart = item.quantity;
            if (catalog.quantityAvl < 0) {
                catalog.quantityAvl = 0;
            }
        });
        return catalogs;
    };
    return CatalogService;
}());

