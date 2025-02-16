import { CartService } from "../services/cart.service";

export class CartController {
  static $inject = ["CartService"];
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {
    this.getCartItems();
  }

  getCartItems() {
    this.cartItems = this.cartService.getItemsFromCart();
    this.total = this.cartService.getTotalCartValue();
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.getCartItems();
    this.total = this.cartService.getTotalCartValue();
  }

  checkout() {
    // this.cartService.checkout();
    // this.getCartItems();
  }
}
