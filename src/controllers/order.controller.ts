import { OrderService } from "../services/order.service";

export class OrderController {
    static $inject = ["OrderService"];
    orders = [];
    isOrdersEmpty = false;

    constructor(private orderService: OrderService) {
        this.getOrders();
    }

    getOrders() {
        this.orders = this.orderService.getOrders();
        if(this.orders.length === 0) {
            this.isOrdersEmpty = true;
        }
    }
}