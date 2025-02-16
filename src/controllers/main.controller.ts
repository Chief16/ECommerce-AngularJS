import * as angular from "angular";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";

export class MainController {
    static $inject = ["$location", "AuthService", "CatalogService", "UserService"]; // Fix service name (match registered name)

    constructor(private $location: angular.ILocationService, private authService: AuthService, private userService: UserService) {
        if(this.authService.isUserLoggedIn()) {
            this.$location.path("/catalog");
        }
    }

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

    cartItemsCount() {
        // return this.catalogService.getItemsCountFromCart() || 0;
    }

    login() {
        this.$location.path("/login");
    }
}
