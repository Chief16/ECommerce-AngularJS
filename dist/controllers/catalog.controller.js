var CatalogController = /** @class */ (function () {
    function CatalogController(catalogService) {
        this.catalogService = catalogService;
        this.catalogs = [];
        this.getCatalogs();
    }
    CatalogController.prototype.getCatalogs = function () {
        this.catalogs = this.catalogService.getCatalogs();
    };
    CatalogController.prototype.addToCart = function (catalog) {
        this.catalogService.addToCart(catalog);
        this.catalogs.filter(function (c) { return c.name === catalog.name; })[0].quantityAvl--;
        alert("Added to cart!");
    };
    CatalogController.$inject = ["CatalogService"];
    return CatalogController;
}());