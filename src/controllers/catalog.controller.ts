import { Catalog, CatalogService } from "../services/catalog.service";

export class CatalogController {
    static $inject = ["CatalogService"];

    catalogs: Catalog[] = [];

    constructor(private catalogService: CatalogService) {
        this.getCatalogs();
    }

    getCatalogs(){
        this.catalogs = this.catalogService.getCatalogs();
    }

    addToCart(catalog: any){
        this.catalogService.addToCart(catalog);
        this.catalogs.filter((c: any) => c.name === catalog.name)[0].quantityAvl--;
        alert("Added to cart!");
    }
}