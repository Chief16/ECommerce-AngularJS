import * as ng from "angular";
import { AuthService } from "../services/auth.service";
import { CartService } from "../services/cart.service";

export class CartController {
  static $inject = ["CartService", "AuthService", "$location"];
  cartItems: any[] = [];
  totalPrice: number = 0;
  totalItems: number = 0;
  placeOrderMessage: string = "Place Order";
  isUserLoggedIn: boolean = true;
  isCartEmpty: boolean = false;

  constructor(private cartService: CartService, private authService: AuthService, private $location: ng.ILocationService) {
    if(!this.authService.isUserLoggedIn()){
      this.isUserLoggedIn = false;
      this.placeOrderMessage = "Login & Place Order";
    }
    this.getCartItems();
  }

  getCartItems() {
    this.cartItems = this.cartService.getItemsFromCart();
    this.totalPrice = this.cartService.getTotalCartValue();
    this.totalItems = this.cartService.getItemsCountFromCart();
    if(this.cartItems.length === 0){
      this.isCartEmpty = true;
    }
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.getCartItems();
    this.totalPrice = this.cartService.getTotalCartValue();
  }

  checkout() {
    if(!this.isUserLoggedIn){
      this.$location.path("/login");
      return
    } else {
      this.cartService.checkout();
      this.getCartItems();
    }
  }
}
