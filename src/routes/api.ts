import TestController from "../controllers/TestController";
import { Application } from "express";

export default function initApi(app: Application) {
  app.get("/test", TestController.test);
}
