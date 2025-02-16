import { Catalog } from "../interfaces/catalog";
import * as ng from "angular";

export class CatalogService {
  private $inject = ["$http"];
  private authUrl = "https://fakestoreapi.com/products/";

  catalogs: Catalog[] = [];

  constructor(private $http: ng.IHttpService) {}

  getCatalogs(): Promise<Catalog[]> {
    return this.$http.get<Catalog[]>(this.authUrl)
      .then((response) => {
        response.data = this.addQuantityAvlToCatalogs(response.data);
        return this.convertPriceToINR(response.data);
      })
      .catch((error) => {
        console.error("Error fetching catalogs:", error);
        return [];
      })
  }

  getCatalogById(id: number): Promise<Catalog> {
    return this.$http.get<Catalog>(this.authUrl + id)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error fetching catalog by id:", error);
        return {} as Catalog;
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

  getCatalogsByCategory(category: string): Promise<Catalog[]> {
    return this.$http.get<Catalog[]>(this.authUrl + "/category/" + category)
      .then((response) => {
        return this.convertPriceToINR(response.data);
      })
      .catch((error) => {
        console.error("Error fetching catalogs by category:", error);
        return [];
      });
  }

  convertPriceToINR(data: Catalog[]): Catalog[] {
    return data.map(c => { return { ...c, price : c.price * 86.45 } });
  }

  addQuantityAvlToCatalogs(catalogs: Catalog[]) {
    const randomValue = Math.floor(Math.random() * (20 - 5 + 1)) + 5; // generated random value between 5 and 20
    return catalogs.map(c => { return { ...c, quantityAvl: randomValue, itemsInCart: 0 } });
  }
}
