var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.loginUser = function (username, password) {
        sessionStorage.setItem('authenticated', "true");
    };
    AuthService.prototype.logoutUser = function () {
        sessionStorage.removeItem('authenticated');
    };
    AuthService.prototype.isUserLoggedIn = function () {
        return sessionStorage.getItem('authenticated') === "true";
    };
    return AuthService;
}());
