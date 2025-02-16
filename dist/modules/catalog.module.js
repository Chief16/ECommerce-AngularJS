angular
    .module("CatalogModule", [])
    .controller("CatalogController", CatalogController)
    .service("CatalogService", ["$http", "CartService", CatalogService])
    .service("CartService", CartService)
    .filter("capitalize", function () { return new CapitalizeFilter().transform; })
    .filter("search", function () { return new SearchFilter().transform; });
