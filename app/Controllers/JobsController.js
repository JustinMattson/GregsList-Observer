import JobsService from "../Services/JobsService.js";
import _store from "../store.js";

function _drawJobs() {
  //console.log("request to draw from controller");
  let template = "";
  let jobs = _store.State.jobs;
  jobs.forEach((job) => (template += job.Template));
  document.getElementById("jobs").innerHTML = template;
}
export default class JobsController {
  constructor() {
    console.log("jobs controller alive");
    _store.subscribe("jobs", _drawJobs);
  }

  // TODO addJob does not work
  addJob(event) {
    event.preventDefault();
    let formData = event.target;
    let newJobObj = {
      company: formData.company.value,
      jobTitle: formData.jobTitle.value,
      hours: formData.hours.value,
      rate: formData.rate.value,
      description: formData.description.value,
    };
    JobsService.addJob(newJobObj);
    formData.reset();
  }

  // TODO apply does not work
  apply(id) {
    console.log("apply controller > service");
    //JobsService.apply(id);
  }
}
