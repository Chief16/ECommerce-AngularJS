var AuthController = /** @class */ (function () {
    function AuthController($location, authService) {
        this.$location = $location;
        this.authService = authService;
        this.user = {
            username: "",
            password: ""
        };
        if (this.authService.isUserLoggedIn()) {
            // alert("Already logged in!");
            this.$location.path("/catalog");
        }
    } // Removed unused $scope
    AuthController.prototype.login = function () {
        var _this = this;
        this.authService.loginUser(this.user.username, this.user.password)
            .then(function (res) {
            _this.authService.setAuthenticated();
            _this.$location.path("/catalog");
        })
            .catch(function (e) {
            console.error(e);
            alert("Login failed!");
        });
    };
    AuthController.$inject = ["$location", "AuthService"]; // Fix service name (match registered name)
    return AuthController;
}());
