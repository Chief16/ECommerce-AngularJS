import * as angular from 'angular';
import { CatalogController } from '../controllers/catalog.controller';
import { CatalogService } from '../services/catalog.service';

angular.module('catalogModule', [])
    .controller('CatalogController', CatalogController)
    .service('CatalogService', CatalogService);