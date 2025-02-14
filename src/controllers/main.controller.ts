import * as angular from "angular";
import { AuthService } from "../services/auth.service";

export class MainController {
    static $inject = ["$location", "AuthService"]; // Fix service name (match registered name)

    constructor(private $location: angular.ILocationService, private authService: AuthService) {
        if(this.authService.isUserLoggedIn()) {
            alert("Already logged in!");
            this.$location.path("/catalog");
        }
    } // Removed unused $scope

    isUserLoggedIn() {
        return this.authService.isUserLoggedIn();
    }

    showLoginBtn() {
        const userLoggedIn = this.isUserLoggedIn();
        return this.$location.path() !== "/login" && !userLoggedIn;
    }

    logout(){
        this.authService.logoutUser();
        this.$location.path("/login");
    }
}
