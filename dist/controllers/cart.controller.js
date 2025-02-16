var CartController = /** @class */ (function () {
    function CartController(cartService) {
        this.cartService = cartService;
        this.cartItems = [];
        this.total = 0;
        this.getCartItems();
    }
    CartController.prototype.getCartItems = function () {
        this.cartItems = this.cartService.getItemsFromCart();
        this.total = this.cartService.getTotalCartValue();
    };
    CartController.prototype.removeFromCart = function (item) {
        this.cartService.removeFromCart(item);
        this.getCartItems();
        this.total = this.cartService.getTotalCartValue();
    };
    CartController.prototype.checkout = function () {
        // this.cartService.checkout();
        // this.getCartItems();
    };
    CartController.$inject = ["CartService"];
    return CartController;
}());