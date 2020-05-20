import Job from "../Models/Job.js";
import store from "../store.js";

// @ts-ignore
let _api = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/jobs",
  timeout: 15000,
});

class JobsService {
  apply(id) {
    alert(`Job #${id} is no longer available.`);
    console.log("Position is no longer available.");
  }
  addJob(newJobObj) {
    _api
      .post("", newJobObj)
      .then((message) => {
        console.log(message);
        this.getJobs();
      })
      .catch((gross) => console.error(gross));
  }
  removeJob(id) {
    _api
      .delete(id)
      .then((response) => {
        console.log(response.data);
        this.getJobs();
      })
      .catch((err) => console.error(err));
  }
  constructor() {
    //console.log("hello from Jservice");
    this.getJobs();
  }

  getJobs() {
    _api
      .get()
      .then((res) => {
        let newJobs = res.data.data.map((jobData) => new Job(jobData));
        store.commit("jobs", newJobs);
      })
      .catch((err) => console.error(err));
  }
}

const service = new JobsService();
export default service;
