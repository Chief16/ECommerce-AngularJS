import * as angular from "angular";

angular.module("eCommerce", ['ngRoute', "authModule"])
.config(($routeProvider: any) => {
    $routeProvider
        .when("/login", {
            templateUrl: "src/views/login.html",
            controller: "AuthController"
        })
        .otherwise({
            redirectTo: "/login"
        });
});