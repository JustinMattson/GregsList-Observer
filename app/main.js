import HousesController from "./Controllers/HousesController.js";
import CarsController from "./Controllers/CarsController.js";
import JobsController from "./Controllers/JobsController.js";

class App {
  jobsController = new JobsController();
  housesController = new HousesController();
  carsController = new CarsController();
}

window["app"] = new App();
