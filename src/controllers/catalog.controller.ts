import { Catalog } from "../interfaces/catalog";
import { CartService } from "../services/cart.service";
import { CatalogService } from "../services/catalog.service";

export class CatalogController {
    static $inject = ["CatalogService", "CartService"];
    catalogs: Catalog[] = [];
    categories: string[] = [];
    searchText: string = "";
    selectedCategory: string = "";
    
    constructor(private catalogService: CatalogService, private cartService: CartService) {
        this.getCatalogs();
        this.getCategories();
    }
    
    getCatalogs() {
        this.catalogService.getCatalogs().then((data) => {
            this.catalogs = data;
        }).catch((error) => {
            console.error("Error fetching catalogs:", error);
        });
    }
    
    getCategories() {
        this.catalogService.getCatalogCategories().then((data) => {
            this.categories = data;
            this.selectedCategory = "All";
        }).catch((error) => {
            console.error("Error fetching catalog categories:", error);
        });
    }

    getCatalogsByCategory(){
        if(this.selectedCategory === "All") {
            this.getCatalogs();
            return;
        }
        this.catalogService.getCatalogsByCategory(this.selectedCategory).then((data) => {
            this.catalogs = data;
        }).catch((error) => {
            console.error("Error fetching catalog categories:", error);
        });
    }

    addToCart(catalog: any){
        if(catalog.quantityAvl === 0){
            alert("Out of stock!");
            return;
        }
        this.cartService.addToCart(catalog);
        this.catalogs.filter((c: any) => c.title === catalog.title)[0].quantityAvl--;
        this.catalogs.filter((c: any) => c.title === catalog.title)[0].itemsInCart++;
    }
}