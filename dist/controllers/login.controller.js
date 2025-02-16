var AuthController = /** @class */ (function () {
    function AuthController($location, authService) {
        this.$location = $location;
        this.authService = authService;
        this.user = { username: "johnd", password: "m38rmF$" };
        this.showError = false;
        if (this.authService.isUserLoggedIn()) {
            this.$location.path("/catalog");
        }
    }
    AuthController.prototype.login = function () {
        var _this = this;
        this.authService
            .loginUser(this.user.username, this.user.password)
            .then(function (res) {
            _this.authService.setAuthenticated();
            _this.$location.path("/catalog");
        })
            .catch(function (e) {
            console.error(e);
            alert("Login failed!");
        });
    };
    AuthController.prototype.skipLogin = function () {
        this.$location.path("/catalog");
    };
    AuthController.$inject = ["$location", "AuthService"]; // Fix service name (match registered name)
    return AuthController;
}());