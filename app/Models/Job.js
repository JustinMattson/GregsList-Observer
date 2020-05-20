export default class Jobs {
  constructor(data) {
    this.id = data.id;
    this.company = data.company;
    this.jobTitle = data.jobTitle;
    this.hours = data.hours;
    this.rate = data.rate;
    this.description = data.description;
  }

  get Template() {
    return /*html*/ `
        <!-- JOB TEMPLATE -->
        <div class="col-12 col-md-4">
            <div class="card mb-3">
                <h5 class="card-header">${this.company}</h5>
                <div class="card-body">
                  <h5 class="card-title">${this.jobTitle}</h5>
                  <p class="card-text">${this.description}</p>
                  <div class="d-flex justify-content-between m-0">
                      <span>
                        <button class="btn btn-primary" onclick="app.jobController.apply(${this.id})">Apply</button></span>
                      <span class="small text-right">Hours/week: ${this.hours} <p> Rate/hr: ${this.rate}</p></span>
                  </div>
                </div>
              </div>
        </div>
        <!-- END JOB TEMPLATE -->
        `;
  }
}
