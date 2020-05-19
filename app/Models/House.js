export default class House {
  constructor(data) {
    //console.log("CarModel is Alive!");
    this.id = data._id;
    this.description = data.description || "No description provided.";
    this.year = data.year;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.levels = data.levels;
    this.price = data.price;
    this.imgUrl = data.imgUrl;
  }

  get Template() {
    return /*html*/ `
          <!-- HOUSE TEMPLATE -->
        <div class="col-4">
        <div class="card my-3 shadow">
          <div class="pl-2 d-flex justify-content-between">
            <h4>${this.description}</h4>
            <i
              class="fa fa-trash text-danger p-2"
              aria-hidden="true"
              onclick="app.housesController.removeHouse('${this.id}')"
            ></i>
          </div>
          <div class="pl-2 d-flex justify-content-between">
            <h5>Price: $${this.price}</h5>
            <i
              class="fas fa-money-check-alt text-success p-2"
              onclick="app.housesController.bidNow('${this.id}')"
            ></i>
          </div>
          <img
            class="card-img-top p-2"
            src="${this.imgUrl}"
            alt=""
            style="height: 200px;"
          />
          <div class="card-body p-2">
            <p class="card-text text-center mb-0">
              ${this.year} | ${this.bedrooms} Bed | ${this.bathrooms} Bath |
              ${this.levels} Level(s)
            </p>
            <small class="card-text text-muted">
            #${this.id}
          </small>
          </div>
        </div>
      </div>
      <!-- END HOUSE TEMPLATE -->
    `;
  }
}
