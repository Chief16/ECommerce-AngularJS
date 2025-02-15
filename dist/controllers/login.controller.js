var AuthController = /** @class */ (function () {
    function AuthController($location, authService) {
        this.$location = $location;
        this.authService = authService;
        this.user = {
            username: "",
            password: ""
        };
        this.showError = false;
        if (this.authService.isUserLoggedIn()) {
            // alert("Already logged in!");
            this.$location.path("/catalog");
        }
    } // Removed unused $scope
    AuthController.prototype.login = function () {
        var isAuthenticated = this.authService.loginUser(this.user.username, this.user.password);
        if (isAuthenticated) {
            this.authService.setAuthenticated();
            this.$location.path("/catalog");
        }
        else {
            alert("Login failed!");
        }
        // this.authService.loginUser(this.user.username, this.user.password)
        // .then((res) => {
        //     this.authService.setAuthenticated();
        //     this.$location.path("/catalog");
        // })
        // .catch((e) => {
        //     console.error(e);
        //     alert("Login failed!");
        // });
    };
    AuthController.$inject = ["$location", "AuthService"]; // Fix service name (match registered name)
    return AuthController;
}());
