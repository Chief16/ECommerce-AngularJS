export interface Catalog {
    id: number;
    name: string;
    description: string;
    quantityAvl: number;
    price: number;
}

interface CatalogInCart {
    name: string;
    quantity: number;
    price: number;
}

export class CatalogService {
    catalogs: Catalog[] = [
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
    catalogsInCart: CatalogInCart[] = [];

    constructor() {
    }

    getCatalogs(){
        return this.catalogs;
    }

    addToCart(catalog: any){
        let cat: any = this.catalogsInCart.filter((c: any) => c.name === catalog.name)[0] || null;
        if(cat){
            cat.quantity++;
        } else {
            this.catalogsInCart.push({
                name: catalog.name,
                quantity: 1,
                price: 100
            });
        }
    }
}