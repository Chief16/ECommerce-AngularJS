var AuthService = /** @class */ (function () {
    function AuthService($http) {
        this.$http = $http;
        this.authUrl = 'http://localhost:3000/login';
    }
    AuthService.prototype.loginUser = function (username, password) {
        if (username === 'test@gmail.com' && password === 'admin') {
            this.setAuthenticated();
            return true;
        }
        return false;
    };
    AuthService.prototype.setAuthenticated = function () {
        sessionStorage.setItem('authenticated', "true");
    };
    AuthService.prototype.logoutUser = function () {
        sessionStorage.removeItem('authenticated');
    };
    AuthService.prototype.isUserLoggedIn = function () {
        return sessionStorage.getItem('authenticated') === "true";
    };
    AuthService.$inject = ['$http'];
    return AuthService;
}());
