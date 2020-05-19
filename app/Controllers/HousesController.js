import HousesService from "../Services/HousesService.js";
import store from "../store.js";

//Private
function _draw() {
  let template = "";
  let houses = store.State.houses;
  houses.forEach((house) => (template += house.Template));
  document.getElementById("houses").innerHTML = template;
}

//Public
export default class HousesController {
  constructor() {
    //console.log("HousesController is Alive!");
    store.subscribe("houses", _draw);
  }

  addHouse(event) {
    event.preventDefault();
    let formData = event.target;
    let newHouseObj = {
      description: formData.description.value,
      price: formData.price.value,
      year: formData.year.value,
      bedrooms: formData.bedrooms.value,
      bathrooms: formData.bathrooms.value,
      imgUrl: formData.imgUrl.value,
      levels: formData.levels.value,
    };
    HousesService.addHouse(newHouseObj);
    formData.reset();
  }

  bidNow(houseId) {
    HousesService.bidNow(houseId);
  }
  removeHouse(houseId) {
    HousesService.removeHouse(houseId);
  }
}
