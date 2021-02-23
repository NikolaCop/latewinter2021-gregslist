
export default class Jobs{
constructor({jobTitle, company, rate, hours, description, _id, id}){
this.jobTitle = jobTitle
this.company = company
this.rate = rate
this.hours = hours
this.description = description
this.id = _id || id
}

get Template(){
  return /*html*/`<div class="card bg-light border-primary m-2 col-2">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.jobsController.deleteJobs('${this.id}')" aria-hidden="true"></i>
  <img class="card-img-top" src="${this.company}" alt="">
  <div class="card-body">
  
      <h4 class="card-title">${this.jobTitle}</h4>
      <p class="card-text">${this.description}</p>
      <p class="card-text">Hours: ${this.hours}</p>
      <p class="card-text">Rate: ${this.rate}</p>
     
      <button class="btn btn-success" onclick="app.jobsController.bid('${this.id}')">Apply</button>
  </div>
</div>`
}


}