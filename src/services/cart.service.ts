import { AlertService } from "../shared/services/alert.service";

export class CartService {
  static $inject = ["AlertService", "$location"];
  catalogsInCart: ICatalogInCart[] = [];

  constructor(private alertService: AlertService, private $location: ng.ILocationService) {
    this.catalogsInCart = sessionStorage.getItem("catalogsInCart") != "" ? JSON.parse(sessionStorage.getItem("catalogsInCart") as string) : [];
  }

  addToCart(catalog: any) {
    let cat: any =
      this.catalogsInCart.filter((c: any) => c.title === catalog.title)[0] ||
      null;
    if (cat) {
      cat.quantity++;
    } else {
      this.catalogsInCart.push({
        title: catalog.title,
        quantity: 1,
        price: catalog.price,
        image: catalog.image,
      });
    }
    sessionStorage.setItem(
      "catalogsInCart",
      JSON.stringify(this.catalogsInCart)
    );
    this.alertService.showSuccess("Item added to cart successfully!");
  }

  getItemsFromCart() {
    return this.catalogsInCart || [];
  }

  getItemsCountFromCart() {
    return this.catalogsInCart?.reduce((acc, item) => acc + item.quantity, 0) || 0;
  }

  getTotalCartValue() {
    return this.catalogsInCart?.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  removeFromCart(item: ICatalogInCart) {
    this.catalogsInCart = this.catalogsInCart?.filter(
      (c) => c.title !== item.title
    );
    sessionStorage.setItem(
      "catalogsInCart",
      JSON.parse(JSON.stringify(this.catalogsInCart))
    );
    this.alertService.showSuccess("Item removed from cart successfully!");
  }

  checkout() {
    sessionStorage.setItem("orders", JSON.stringify(this.catalogsInCart));
    this.catalogsInCart = [];
    sessionStorage.setItem("catalogsInCart", JSON.stringify(this.catalogsInCart));
    this.alertService.showSuccess("Order placed successfully! It will be delivered in 2-3 business days.", 5000);
    this.$location.path("/catalog");
  }
}
