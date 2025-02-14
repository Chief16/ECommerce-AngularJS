angular.module("eCommerce", ['ngRoute', "authModule", "catalogModule"])
    .config(function ($routeProvider) {
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
})
    .controller("MainController", MainController);
