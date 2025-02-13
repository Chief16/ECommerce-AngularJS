var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.loginUser = function (username, password) {
        localStorage.setItem('authenticated', "true");
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.removeItem('authenticated');
    };
    AuthService.prototype.isUserLoggedIn = function () {
        return localStorage.getItem('authenticated') === "true";
    };
    return AuthService;
}());
export { AuthService };
