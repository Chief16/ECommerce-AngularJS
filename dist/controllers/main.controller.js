var MainController = /** @class */ (function () {
    function MainController($location, authService, cartService) {
        this.$location = $location;
        this.authService = authService;
        this.cartService = cartService;
        this.navItems = ["Catalog", "Orders"];
        if (this.authService.isUserLoggedIn()) {
            this.$location.path("/catalog");
        }
    }
    MainController.prototype.isUserLoggedIn = function () {
        return this.authService.isUserLoggedIn();
    };
    MainController.prototype.showLoginBtn = function () {
        var userLoggedIn = this.isUserLoggedIn();
        return this.$location.path() !== "/login" && !userLoggedIn;
    };
    MainController.prototype.logout = function () {
        this.authService.logoutUser();
        this.$location.path("/login");
    };
    MainController.prototype.cartItemsCount = function () {
        return this.cartService.getItemsCountFromCart() || 0;
    };
    MainController.prototype.login = function () {
        this.$location.path("/login");
    };
    MainController.prototype.goToCart = function () {
        this.$location.path("/cart");
    };
    MainController.prototype.routeTo = function (route) {
        this.$location.path(route);
    };
    MainController.$inject = ["$location", "AuthService", "CartService"];
    return MainController;
}());

