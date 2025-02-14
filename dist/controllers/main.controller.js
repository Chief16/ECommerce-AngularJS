var MainController = /** @class */ (function () {
    function MainController($location, authService, catalogService) {
        this.$location = $location;
        this.authService = authService;
        this.catalogService = catalogService;
        if (this.authService.isUserLoggedIn()) {
            // alert("Already logged in!");
            this.$location.path("/catalog");
        }
    } // Removed unused $scope
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
        return this.catalogService.getItemsCountFromCart() || 0;
    };
    MainController.prototype.login = function () {
        this.$location.path("/login");
    };
    MainController.$inject = ["$location", "AuthService", "CatalogService"]; // Fix service name (match registered name)
    return MainController;
}());
