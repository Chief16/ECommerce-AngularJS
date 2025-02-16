var AuthService = /** @class */ (function () {
    function AuthService($http) {
        this.$http = $http;
        this.API_URL = "https://fakestoreapi.com/auth/login";
    }
    AuthService.prototype.loginUser = function (username, password) {
        return this.$http.post(this.API_URL, { username: username, password: password });
    };
    AuthService.prototype.setAuthenticated = function () {
        sessionStorage.setItem("authenticated", "true");
    };
    AuthService.prototype.logoutUser = function () {
        sessionStorage.removeItem("authenticated");
    };
    AuthService.prototype.isUserLoggedIn = function () {
        return sessionStorage.getItem("authenticated") === "true";
    };
    AuthService.$inject = ["$http"];
    return AuthService;
}());