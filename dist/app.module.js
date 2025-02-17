

angular.module("eCommerce", ['ngRoute', "ui.bootstrap", "SharedModule", "AuthModule", "CatalogModule", "UserModule", "CartModule"])
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
        .when("/cart", {
        templateUrl: "src/views/cart.html",
        controller: "CartController"
    })
        .otherwise({
        redirectTo: "/catalog"
    });
})
    .controller("MainController", MainController);
