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
        if(catalog.quantityAvl === 0){
            alert("Out of stock!");
            return;
        }
        this.catalogService.addToCart(catalog);
        this.catalogs.filter((c: any) => c.name === catalog.name)[0].quantityAvl--;
        this.catalogs.filter((c: any) => c.name === catalog.name)[0].inCart++;
        // alert("Added to cart!");
    }
}