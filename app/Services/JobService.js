import { ProxyState } from "../AppState.js";
import Jobs from "../Models/Jobs.js";
import { api } from "./AxiosService.js";

class JobsService{
constructor(){
console.log("jobs service");
this.getJobs();
}


async getJobs() {
    try {
      const res = await api.get('Jobs')
      ProxyState.jobs = res.data.map(rawJobsData => new Jobs(rawJobsData))
    } catch (error) {
      console.error(error)
    }
  }
async createJobs(rawJobs){
 try {
      const res = await api.post('jobs', rawJobs)
      ProxyState.jobs = [ ...ProxyState.jobs, new Jobs(res.data)]
    } catch (error) {
      console.error(error)
    }
}

async bid(id) {
let jobs = ProxyState.jobs.find(j=> j.id === id)
    jobs.apply += 1000
    try {
      const res = await api.put('jobs/' + id, jobs)
      console.log(res.data)
      ProxyState.jobs = ProxyState.jobs
    } catch (error) {
      
    }
}
async deleteJobs(id) {
 try {
 const res = await api.delete(`jobs/${id}`)
 this.getJobs()
  } catch (error) {
  console.error(error)
  }
}
}

export const jobsService = new JobsService()












