import { ProxyState } from "../AppState.js";
import Jobs from "../Models/Jobs.js";

class JobsService{
constructor(){
console.log("jobs service");
}

createJobs(rawJobs) {
    let temp = ProxyState.jobs
    temp.push(new Jobs(rawJobs))
    ProxyState.jobs = temp
}

bid(id) {
    let temp = ProxyState.jobs
    let jobs = temp.find(j=> j.id === id)
    jobs.apply += 1
    ProxyState.jobs = temp
  }

  deleteJobs(id) {
    let temp = ProxyState.jobs
    let jobsIndex = temp.findIndex(jobs =>  jobs.id == id)
    temp.splice(jobsIndex, 1)
    ProxyState.jobs = temp
  }
}

export const jobsService = new JobsService()












