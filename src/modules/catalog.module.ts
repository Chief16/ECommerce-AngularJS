import * as angular from "angular";
import { CatalogController } from "../controllers/catalog.controller";
import { CatalogService } from "../services/catalog.service";
import { CapitalizeFilter } from "../filters/capitalize.filter";
import { SearchFilter } from "../filters/search.filter";
import { CartService } from "../services/cart.service";

angular
  .module("CatalogModule", [])
  .controller("CatalogController", CatalogController)
  .service("CatalogService", ["$http", "CartService", CatalogService])
  .service("CartService", CartService)
  .filter("capitalize", () => new CapitalizeFilter().transform)
  .filter("search", () => new SearchFilter().transform)
