import {generateId} from "../Utils/GenerateId.js"
export default class Jobs{
constructor({description, pay, hours, experience, apply, imgUrl}){
this.description = description
this.pay = pay
this.hours = hours
this.experience = experience
this.apply = apply
this.imgUrl = imgUrl
this.id = generateId()
}

get Template(){
  return /*html*/`<div class="card bg-light border-primary m-2 col-2">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.jobsController.deleteJobs('${this.id}')" aria-hidden="true"></i>
  <img class="card-img-top" src="${this.imgUrl}" alt="">
  <div class="card-body">
  
      <h4 class="card-title">${this.description}</h4>
      <p class="card-text">${this.pay}</p>
      <p class="card-text">${this.hours}</p>
      <p class="card-text">Experience: ${this.experience}</p>
      <p class="card-text">Applicants: ${this.apply}</p>
     
      <button class="btn btn-success" onclick="app.jobsController.bid('${this.id}')">Apply</button>
  </div>
</div>`
}


}