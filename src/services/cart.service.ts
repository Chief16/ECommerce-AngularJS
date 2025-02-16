export class CartService {
  catalogsInCart: CatalogInCart[] = [];

  constructor() {
    this.catalogsInCart = JSON.parse(sessionStorage.getItem("catalogsInCart") as string)|| [];
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

  removeFromCart(item: CatalogInCart) {
    this.catalogsInCart = this.catalogsInCart?.filter(
      (c) => c.title !== item.title
    );
    sessionStorage.setItem(
      "catalogsInCart",
      JSON.parse(JSON.stringify(this.catalogsInCart))
    );
  }
}
