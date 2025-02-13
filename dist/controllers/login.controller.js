var AuthController = /** @class */ (function () {
    function AuthController($scope, authService) {
        this.$scope = $scope;
        this.authService = authService;
        this.user = {
            username: "",
            password: ""
        };
    }
    AuthController.prototype.login = function () {
        this.authService.loginUser(this.user.username, this.user.password);
        // $location.path("/home");
    };
    AuthController.$inject = ["$scope", "$location"];
    return AuthController;
}());
export { AuthController };
