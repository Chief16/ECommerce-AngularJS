import * as angular from "angular";
import { AuthService } from "../services/auth.service";

export class AuthController {
    static $inject = ["$location", "AuthService"]; // Fix service name (match registered name)

    user = {
        username: "",
        password: ""
    };

    constructor(private $location: angular.ILocationService, private authService: AuthService) {
        if(this.authService.isUserLoggedIn()) {
            alert("Already logged in!");
            this.$location.path("/catalog");
        }
    } // Removed unused $scope

    login() {
        this.authService.loginUser(this.user.username, this.user.password);
        alert("Logged in!");
        this.$location.path("/catalog");
    }
}
