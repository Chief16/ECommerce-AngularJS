import * as angular from "angular";
import { AuthService } from "../services/auth.service";

export class AuthController {
  static $inject = ["$location", "AuthService"]; // Fix service name (match registered name)
  user = { username: "johnd", password: "m38rmF$" };
  showError = false;

  constructor(private $location: angular.ILocationService, private authService: AuthService) {
    if (this.authService.isUserLoggedIn()) {
      this.$location.path("/catalog");
    }
  }

  login() {
    this.authService
      .loginUser(this.user.username, this.user.password)
      .then(res => {
        this.authService.setAuthenticated();
        window.history.back();
        // this.$location.path("/catalog");
      })
      .catch(e => {
        console.error(e);
        alert("Login failed!");
      });
  }

  skipLogin() {
    this.$location.path("/catalog");
  }
}
