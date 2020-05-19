import House from "../Models/House.js";
import store from "../store.js";

let _api = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/houses",
  timeout: 15000,
});

class HousesService {
  addHouse(newHouseObj) {
    _api
      .post("", newHouseObj)
      .then((reply) => {
        console.log(reply);
        this.getHouses();
      })
      .catch((icky) => console.error(icky));
  }
  removeHouse(houseId) {
    _api
      .delete(houseId)
      .then((response) => {
        console.log(response.data);
        this.getHouses();
      })
      .catch((err) => console.error(err));
  }
  bidNow(houseId) {
    let foundHouse = store.State.houses.find((house) => (house.id = houseId));
    if (foundHouse) {
      foundHouse.price += 13.25;
      _api
        .put(houseId, foundHouse)
        .then((response) => {
          console.log(response);
          this.getHouses();
        })
        .catch((error) => console.error(error));
    }
  }
  constructor() {
    this.getHouses();
  }
  getHouses() {
    _api
      .get()
      .then((response) => {
        let newHouses = response.data.data.map(
          (houseData) => new House(houseData)
        );
        store.commit("houses", newHouses);
      })
      .catch((error) => console.error(error));
  }
}

const service = new HousesService();
export default service;
