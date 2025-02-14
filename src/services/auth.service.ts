import * as ng from 'angular';

export class AuthService {
  static $inject = ['$http'];

  authUrl = 'http://localhost:3000/login';

  constructor(private $http: ng.IHttpService){

  }

  loginUser(username: string, password: string) {
    if(username === 'test@gmail.com' && password === 'admin') {
      this.setAuthenticated();
      return true;
    }
    return false;
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


// loginUser(username: string, password: string): ng.IHttpPromise<any> {
//   return this.$http.post(this.authUrl, { username, password });
// }