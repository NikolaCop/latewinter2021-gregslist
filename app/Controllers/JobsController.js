import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobService.js"

function _draw(){
    let jobs = ProxyState.jobs
    let template = ""
    jobs.forEach(jobs=> template += jobs.Template)
   
    document.getElementById('jobs').innerHTML = template
    console.log(ProxyState.jobs)
  }

export default class JobsController{
  constructor(){
    console.log("jobs controller working")
    console.log(ProxyState.jobs)
    _draw()
    ProxyState.on("jobs", _draw)
  }
createJobs(event){
    event.preventDefault();
    console.log('creating jobs')
    let form = event.target
    console.log(form)
    let rawJobs = {
      jobTitle: form.jobTitle.value,
      company: form.company.value,
      rate: form.rate.value,
      hours: form.hours.value,
      description: form.description.value
    }
    console.log(rawJobs)
    jobsService.createJobs(rawJobs)
  }

  bid(id){
    console.log('bidding ' + id)
    jobsService.bid(id)
  }

  deleteJobs(id){
    console.log(id)
    jobsService.deleteJobs(id)
  }

}