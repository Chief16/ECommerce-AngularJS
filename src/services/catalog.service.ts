import { ICatalog } from "../interfaces/catalog";
import * as ng from "angular";
import { CartService } from "./cart.service";

export class CatalogService {
  private $inject = ["$http", "CartService"];
  private authUrl = "https://fakestoreapi.com/products/";

  catalogs: ICatalog[] = [];

  constructor(private $http: ng.IHttpService, private cartService: CartService) {}

  getCatalogs(): Promise<ICatalog[]> {
    return this.$http.get<ICatalog[]>(this.authUrl)
      .then((response) => {
        return this.manageCatalogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching catalogs:", error);
        return [];
      })
  }

  getCatalogById(id: number): Promise<ICatalog> {
    return this.$http.get<ICatalog>(this.authUrl + id)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error fetching catalog by id:", error);
        return {} as ICatalog;
      });
  }

  getCatalogCategories(): Promise<string[]> {
    return this.$http.get<string[]>(this.authUrl + "categories")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error fetching catalog categories:", error);
        return [];
      });
  }

  getCatalogsByCategory(category: string): Promise<ICatalog[]> {
    return this.$http.get<ICatalog[]>(this.authUrl + "/category/" + category)
      .then((response) => {
        return this.convertPriceToINR(response.data);
      })
      .catch((error) => {
        console.error("Error fetching catalogs by category:", error);
        return [];
      });
  }

  manageCatalogs(data: ICatalog[]): ICatalog[]{
    let catalogs = JSON.parse(JSON.stringify(data));
    catalogs = this.convertPriceToINR(catalogs);
    catalogs = this.addQuantityAvlToCatalogs(catalogs);
    catalogs = this.updateCatalogsAsPerCart(catalogs);
    return catalogs;
  }

  convertPriceToINR(data: ICatalog[]): ICatalog[] {
    return data.map(c => { return { ...c, price : c.price * 86.45 } });
  }

  addQuantityAvlToCatalogs(catalogs: ICatalog[]) {
    // generate random value between 0 and 15, add default 0 items in cart
    return catalogs.map(c => { return { ...c, quantityAvl: Math.floor(Math.random() * 15), itemsInCart: 0 } });
  }

  updateCatalogsAsPerCart(catalogs: ICatalog[]) {
    let catalogsInCart = this.cartService.getItemsFromCart();
    catalogsInCart.forEach((item) => {
      let catalog = catalogs.filter((c) => c.title === item.title)[0];
      catalog.quantityAvl -= item.quantity;
      catalog.itemsInCart = item.quantity;
      if(catalog.quantityAvl < 0) {
        catalog.quantityAvl = 0;
      }
    });
    return catalogs;
  }
}
