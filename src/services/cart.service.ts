import { Catalog } from "../interfaces/catalog";
import { Cart } from "../interfaces/catalogInCart";

export class CartService {
  private $inject = ["$http"];
  private authUrl = "https://fakestoreapi.com/cart";

  catalogs: Catalog[] = [];
  catalogsInCart: Cart[] = [];

  constructor(private $http: ng.IHttpService) {}

  addToCart(catalog: any): Promise<Cart[]> {
    return this.$http
      .post(this.authUrl, catalog)
      .then(response => {
        this.catalogsInCart = JSON.parse(JSON.stringify(response.data));
        return this.catalogsInCart;
      })
      .catch(error => {
        console.log(error);
        return [];
      });
  }

  getItemsFromCart(): Promise<Cart[]> {
    return this.$http
      .get<Cart[]>(this.authUrl)
      .then(response => {
        this.catalogsInCart = JSON.parse(JSON.stringify(response.data));
        return this.catalogsInCart;
      })
      .catch(error => {
        console.log(error);
        return [];
      });
  }

  getItemsCountFromCart() {
    return this.catalogsInCart.length || 0;
  }
}
