import * as angular from "angular";
import { AuthService } from "../services/auth.service";
import { CartService } from "../services/cart.service";

export class MainController {
    static $inject = ["$location", "AuthService", "CartService"];
    navItems: string[] = ["Catalog"];

    constructor(private $location: angular.ILocationService, private authService: AuthService, private cartService: CartService) {
        if(this.authService.isUserLoggedIn()) {
            this.$location.path("/catalog");
        }
    }

    isUserLoggedIn() {
        return this.authService.isUserLoggedIn();
    }

    showLoginBtn() {
        const userLoggedIn = this.isUserLoggedIn();
        if(userLoggedIn && this.navItems.indexOf("Orders") === -1) {
            this.navItems.push("Orders");
        }
        return this.$location.path() !== "/login" && !userLoggedIn;
    }

    logout(){
        this.authService.logoutUser();
        this.$location.path("/login");
    }

    cartItemsCount() {
        return this.cartService.getItemsCountFromCart() || 0;
    }

    login() {
        this.$location.path("/login");
    }

    goToCart(){
        this.$location.path("/cart");
    }

    routeTo(route: string) {
        this.$location.path("/" + route.toLowerCase());
    }
}
