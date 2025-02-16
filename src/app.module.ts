import * as angular from "angular";
import { MainController } from "./controllers/main.controller";

angular.module("eCommerce", ['ngRoute', "AuthModule", "CatalogModule", "UserModule", "CartModule"])
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
        .when("/cart", {
            templateUrl: "src/views/cart.html",
            controller: "CartController"
        })
        .otherwise({
            redirectTo: "/catalog"
        });
})
.controller("MainController", MainController);