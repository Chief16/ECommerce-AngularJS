var CartController = /** @class */ (function () {
    function CartController(cartService, authService, $location) {
        this.cartService = cartService;
        this.authService = authService;
        this.$location = $location;
        this.cartItems = [];
        this.totalPrice = 0;
        this.totalItems = 0;
        this.placeOrderMessage = "Place Order";
        this.isUserLoggedIn = true;
        this.isCartEmpty = false;
        if (!this.authService.isUserLoggedIn()) {
            this.isUserLoggedIn = false;
            this.placeOrderMessage = "Login & Place Order";
        }
        this.getCartItems();
    }
    CartController.prototype.getCartItems = function () {
        this.cartItems = this.cartService.getItemsFromCart();
        this.totalPrice = this.cartService.getTotalCartValue();
        this.totalItems = this.cartService.getItemsCountFromCart();
        if (this.cartItems.length === 0) {
            this.isCartEmpty = true;
        }
    };
    CartController.prototype.removeFromCart = function (item) {
        this.cartService.removeFromCart(item);
        this.getCartItems();
        this.totalPrice = this.cartService.getTotalCartValue();
    };
    CartController.prototype.checkout = function () {
        if (!this.isUserLoggedIn) {
            this.$location.path("/login");
            return;
        }
        else {
            this.cartService.checkout();
            this.getCartItems();
        }
    };
    CartController.$inject = ["CartService", "AuthService", "$location"];
    return CartController;
}());

