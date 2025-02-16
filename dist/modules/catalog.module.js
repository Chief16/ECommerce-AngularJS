angular
    .module("CatalogModule", [])
    .controller("CatalogController", CatalogController)
    .service("CatalogService", CatalogService)
    .filter("capitalize", function () { return new CapitalizeFilter().transform; })
    .filter("search", function () { return new SearchFilter().transform; })
    .service("CartService", CatalogService);
