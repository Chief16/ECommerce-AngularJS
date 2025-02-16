import * as angular from "angular";
import { MainController } from "./controllers/main.controller";

angular.module("eCommerce", ['ngRoute', "authModule", "catalogModule", "UserModule"])
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
})
.controller("MainController", MainController);