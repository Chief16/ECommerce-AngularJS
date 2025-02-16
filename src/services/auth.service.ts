import * as ng from "angular";

export class AuthService {
  static $inject = ["$http"];

  private API_URL = "https://fakestoreapi.com/auth/login";

  constructor(private $http: ng.IHttpService) {}

  loginUser(username: string, password: string): ng.IHttpPromise<any> {
    return this.$http.post(this.API_URL, { username, password });
  }

  setAuthenticated() {
    sessionStorage.setItem("authenticated", "true");
  }

  logoutUser() {
    sessionStorage.removeItem("authenticated");
  }

  isUserLoggedIn() {
    return sessionStorage.getItem("authenticated") === "true";
  }
}

// loginUser(username: string, password: string): ng.IHttpPromise<any> {
//   return this.$http.post(this.authUrl, { username, password });
// }
