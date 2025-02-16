import * as angular from "angular";
import { CatalogController } from "../controllers/catalog.controller";
import { CatalogService } from "../services/catalog.service";
import { CapitalizeFilter } from "../filters/capitalize.filter";
import { SearchFilter } from "../filters/search.filter";

angular
  .module("catalogModule", [])
  .controller("CatalogController", CatalogController)
  .service("CatalogService", CatalogService)
  .filter("capitalize", () => new CapitalizeFilter().transform)
  .filter("search", () => new SearchFilter().transform);
