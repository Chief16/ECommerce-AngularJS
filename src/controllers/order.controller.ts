import { AuthService } from "../services/auth.service";
import { OrderService } from "../services/order.service";
import { AlertService } from "../shared/services/alert.service";

export class OrderController {
    static $inject = ["OrderService", "$location", "AuthService", "AlertService"];
    orders = [];
    isOrdersEmpty = false;

    constructor(private orderService: OrderService, private $location: ng.ILocationService, private authService: AuthService, private alertService: AlertService) {
        if(!this.authService.isUserLoggedIn()) {
            // this.alertService.showError("You need to login to view orders.", 5000);
            this.$location.path("/catalog");
            return;
        }
        this.getOrders();
    }

    getOrders() {
        this.orders = this.orderService.getOrders();
        if(this.orders.length === 0) {
            this.isOrdersEmpty = true;
        }
    }
}