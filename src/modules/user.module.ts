import * as angular from "angular";
import { UserService } from "../services/user.service";

angular
  .module("UserModule", [])
  .service("UserService", UserService);
