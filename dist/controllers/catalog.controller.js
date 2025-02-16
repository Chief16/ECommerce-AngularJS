var CatalogController = /** @class */ (function () {
    function CatalogController(catalogService) {
        this.catalogService = catalogService;
        this.catalogs = [];
        this.categories = [];
        this.searchText = "";
        this.selectedCategory = "";
        this.getCatalogs();
        this.getCategories();
    }
    CatalogController.prototype.getCatalogs = function () {
        var _this = this;
        this.catalogService.getCatalogs().then(function (data) {
            _this.catalogs = data;
        }).catch(function (error) {
            console.error("Error fetching catalogs:", error);
        });
    };
    CatalogController.prototype.getCategories = function () {
        var _this = this;
        this.catalogService.getCatalogCategories().then(function (data) {
            _this.categories = data;
            _this.selectedCategory = "All";
        }).catch(function (error) {
            console.error("Error fetching catalog categories:", error);
        });
    };
    CatalogController.prototype.getCatalogsByCategory = function () {
        var _this = this;
        if (this.selectedCategory === "All") {
            this.getCatalogs();
            return;
        }
        this.catalogService.getCatalogsByCategory(this.selectedCategory).then(function (data) {
            _this.catalogs = data;
        }).catch(function (error) {
            console.error("Error fetching catalog categories:", error);
        });
    };
    CatalogController.prototype.addToCart = function (catalog) {
        if (catalog.quantityAvl === 0) {
            alert("Out of stock!");
            return;
        }
    };
    CatalogController.$inject = ["CatalogService"];
    return CatalogController;
}());