import * as angular from "angular";
import { AuthController } from "../controllers/login.controller";
import { AuthService } from "../services/auth.service";
var authModule = angular.module("authModule", [])
    .controller("AuthController", AuthController)
    .service("AuthService", AuthService);
