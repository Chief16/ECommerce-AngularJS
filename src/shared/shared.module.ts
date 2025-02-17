import * as angular from "angular";
import { AlertService } from "./services/alert.service";
import { AlertController } from "./controllers/alert.controller";

angular.module("SharedModule", [])
    .controller("AlertController", AlertController)
    .service("AlertService", AlertService);