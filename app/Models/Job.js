export default class Jobs {
  constructor(data) {
    this.id = data._id;
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
                <span class="d-flex justify-content-between p-2">
                <h5 class="card border-0">${this.company}</h5>
                <i class="fas fa-trash text-danger action" onclick="app.jobsController.removeJob('${this.id}')"></i>
                </span>
                <div class="card-body">
                  <h5 class="card-title">${this.jobTitle}</h5>
                  <p class="card-text">${this.description}</p>
                  <div class="d-flex justify-content-between m-0">
                      <span>
                        <button class="btn btn-primary"  onclick="app.jobsController.apply('${this.id}')">Apply</button></span>
                      <span class="small text-right">Hours/week: ${this.hours} <p> Rate/hr: $${this.rate}</p></span>
                  </div>
                  <div class="small text-muted">#${this.id}</div>
                </div>
              </div>
        </div>
        <!-- END JOB TEMPLATE -->
        `;
  }
}
