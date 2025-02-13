var CatalogService = /** @class */ (function () {
    function CatalogService() {
        this.catalogs = [
            {
                id: 1,
                name: "Electronics",
                description: "Gadgets and stuff",
                quantityAvl: 10,
                price: 100
            },
            {
                id: 2,
                name: "Books",
                description: "Reading materials",
                quantityAvl: 15,
                price: 100
            },
            {
                id: 3,
                name: "Clothes",
                description: "Fashionable stuff",
                quantityAvl: 12,
                price: 100
            }
        ];
        this.catalogsInCart = [];
    }
    CatalogService.prototype.getCatalogs = function () {
        return this.catalogs;
    };
    CatalogService.prototype.addToCart = function (catalog) {
        var cat = this.catalogsInCart.filter(function (c) { return c.name === catalog.name; })[0] || null;
        if (cat) {
            cat.quantity++;
        }
        else {
            this.catalogsInCart.push({
                name: catalog.name,
                quantity: 1,
                price: 100
            });
        }
    };
    return CatalogService;
}());