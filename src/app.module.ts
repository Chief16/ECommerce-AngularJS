import * as angular from "angular";

angular.module("eCommerce", ['ngRoute', "authModule", "catalogModule"])
.config(($routeProvider: any) => {
    $routeProvider
        .when("/login", {
            templateUrl: "src/views/login.html",
            controller: "AuthController"
        })
        .when("/catalog", {
            templateUrl: "src/views/catalog.html",
            controller: "CatalogController"
        })
        .otherwise({
            redirectTo: "/catalog"
        });
});