import * as angular from  "angular";
import { OrderController } from "../controllers/order.controller";
import { OrderService } from "../services/order.service";

angular.module("OrderModule", [])
    .service("OrderService", OrderService)
    .controller("OrderController", OrderController);