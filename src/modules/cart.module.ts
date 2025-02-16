import * as angular from "angular";
import { CartService } from "../services/cart.service";
import { CartController } from "../controllers/cart.controller";

angular.module("CartModule", [])
  .service("CartService", CartService)
  .controller("CartController", CartController);