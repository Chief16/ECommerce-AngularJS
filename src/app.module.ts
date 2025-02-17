import * as angular from "angular";
import { MainController } from "./controllers/main.controller";

angular.module("eCommerce", ['ngRoute', "ui.bootstrap", "SharedModule", "AuthModule", "CatalogModule", "UserModule", "CartModule", "OrderModule"])
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
        .when("/orders", {
            templateUrl: "src/views/orders.html",
            controller: "OrderController"
        })
        .otherwise({
            redirectTo: "/catalog"
        });
})
.controller("MainController", MainController);