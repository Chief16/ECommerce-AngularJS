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
        if (catalog.quantityAvl === 0) {
            alert("Out of stock!");
            return;
        }
        this.catalogService.addToCart(catalog);
        this.catalogs.filter(function (c) { return c.name === catalog.name; })[0].quantityAvl--;
        this.catalogs.filter(function (c) { return c.name === catalog.name; })[0].inCart++;
        // alert("Added to cart!");
    };
    CatalogController.$inject = ["CatalogService"];
    return CatalogController;
}());
// import { Catalog } from "../interfaces/catalog";
// import { CatalogService } from "../services/catalog.service";
// export class CatalogController {
//     static $inject = ["CatalogService"];
//     catalogs: Catalog[] = [];
//     constructor(private catalogService: CatalogService) {
//         this.getCatalogs();
//     }
//     getCatalogs() {
//         this.catalogService.getCatalogs().then((data) => {
//             this.catalogs = data;
//         }).catch((error) => {
//             console.error("Error fetching catalogs:", error);
//         });
//     }
//     addToCart(catalog: any){
//         if(catalog.quantityAvl === 0){
//             alert("Out of stock!");
//             return;
//         }
//         this.catalogService.addToCart(catalog)
//         .then((data) => {
//             this.catalogs.filter((c: any) => c.name === catalog.name)[0].quantityAvl--;
//             this.catalogs.filter((c: any) => c.name === catalog.name)[0].inCart++;
//         })
//         .catch((error) => {
//             console.error("Error adding to cart:", error);
//         });
//     }
// }
