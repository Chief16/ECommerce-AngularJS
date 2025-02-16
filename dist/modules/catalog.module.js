angular
    .module("catalogModule", [])
    .controller("CatalogController", CatalogController)
    .service("CatalogService", CatalogService)
    .filter("capitalize", function () { return new CapitalizeFilter().transform; })
    .filter("search", function () { return new SearchFilter().transform; });
