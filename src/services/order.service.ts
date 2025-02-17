export class OrderService {
    constructor() {

    }

    getOrders() {
        return sessionStorage.getItem("orders") ? JSON.parse(sessionStorage.getItem("orders") as string) : [];
    }
}