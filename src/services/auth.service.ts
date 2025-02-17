import * as ng from "angular";
import { AlertService } from "../shared/services/alert.service";

export class AuthService {
  static $inject = ["$http", "AlertService"];

  private API_URL = "https://fakestoreapi.com/auth/login";

  constructor(private $http: ng.IHttpService, private alertService: AlertService) {}

  loginUser(username: string, password: string): ng.IHttpPromise<any> {
    return this.$http.post(this.API_URL, { username, password });
  }

  setAuthenticated() {
    this.alertService.showSuccess("Login successful!");
    sessionStorage.setItem("authenticated", "true");
  }

  logoutUser() {
    this.alertService.showSuccess("Logged out successfully!");
    sessionStorage.removeItem("authenticated");
  }

  isUserLoggedIn() {
    return sessionStorage.getItem("authenticated") === "true";
  }
}

// loginUser(username: string, password: string): ng.IHttpPromise<any> {
//   return this.$http.post(this.authUrl, { username, password });
// }
