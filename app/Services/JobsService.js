import Job from "../Models/Job.js";
import store from "../store.js";

let _api = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/jobs",
  timeout: 15000,
});

class JobsService {
  addJob(newJobObj) {
    _api
      .post("", newJobObj)
      .then((message) => {
        console.log(message);
        this.getJobs();
      })
      .catch((gross) => console.error(gross));
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
