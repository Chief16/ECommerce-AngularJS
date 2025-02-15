import * as angular from "angular";
import { AuthService } from "../services/auth.service";
import { CatalogService } from "../services/catalog.service";

export class MainController {
    static $inject = ["$location", "AuthService", "CatalogService"]; // Fix service name (match registered name)

    constructor(private $location: angular.ILocationService, private authService: AuthService, private catalogService: CatalogService) { // Fix service name (match registered name)
        if(this.authService.isUserLoggedIn()) {
            // alert("Already logged in!");
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

    cartItemsCount() {
        return this.catalogService.getItemsCountFromCart() || 0;
    }

    login() {
        this.$location.path("/login");
    }
}
