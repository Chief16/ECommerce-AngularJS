var AuthService = /** @class */ (function () {
    function AuthService($http, alertService) {
        this.$http = $http;
        this.alertService = alertService;
        this.API_URL = "https://fakestoreapi.com/auth/login";
    }
    AuthService.prototype.loginUser = function (username, password) {
        return this.$http.post(this.API_URL, { username: username, password: password });
    };
    AuthService.prototype.setAuthenticated = function () {
        this.alertService.showSuccess("Login successful!");
        sessionStorage.setItem("authenticated", "true");
    };
    AuthService.prototype.logoutUser = function () {
        this.alertService.showSuccess("Logged out successfully!");
        sessionStorage.removeItem("authenticated");
    };
    AuthService.prototype.isUserLoggedIn = function () {
        return sessionStorage.getItem("authenticated") === "true";
    };
    AuthService.$inject = ["$http", "AlertService"];
    return AuthService;
}());

// loginUser(username: string, password: string): ng.IHttpPromise<any> {
//   return this.$http.post(this.authUrl, { username, password });
// }
