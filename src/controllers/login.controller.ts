import * as angular from "angular";
import { AuthService } from "../services/auth.service";

export class AuthController {
    static $inject = ["$location", "AuthService"]; // Fix service name (match registered name)

    user = {
        username: "",
        password: ""
    };
    showError = false;

    constructor(private $location: angular.ILocationService, private authService: AuthService) {
        if(this.authService.isUserLoggedIn()) {
            // alert("Already logged in!");
            this.$location.path("/catalog");
        }
    } // Removed unused $scope

    login() {
        let isAuthenticated = this.authService.loginUser(this.user.username, this.user.password);

        if(isAuthenticated) {
            this.authService.setAuthenticated();
            this.$location.path("/catalog");
        } else {
            alert("Login failed!");
        }

        // this.authService.loginUser(this.user.username, this.user.password)
        // .then((res) => {
        //     this.authService.setAuthenticated();
        //     this.$location.path("/catalog");
        // })
        // .catch((e) => {
        //     console.error(e);
        //     alert("Login failed!");
        // });
    }
}
