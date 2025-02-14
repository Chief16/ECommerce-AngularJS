import * as ng from 'angular';

export class AuthService {
  static $inject = ['$http'];

  authUrl = 'http://localhost:3000/login';

  constructor(private $http: ng.IHttpService){

  }

  loginUser(username: string, password: string): ng.IHttpPromise<any> {
    return this.$http.post(this.authUrl, { username, password });
  }

  setAuthenticated() {
    sessionStorage.setItem('authenticated', "true");
  }

  logoutUser() {
    sessionStorage.removeItem('authenticated');
  }

  isUserLoggedIn() {
    return sessionStorage.getItem('authenticated') === "true";
  }
}