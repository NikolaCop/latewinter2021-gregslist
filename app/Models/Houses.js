

export default class Houses{ 
constructor({bedrooms, bathrooms, imgUrl, levels, year, price, description, _id, id}){
this.bedrooms = bedrooms
this.bathrooms = bathrooms
this.imgUrl = imgUrl
this.levels = levels
this.year = year
this.price = price
this.id = _id || id
this.description = description
}

get Template(){
  return /*html*/`<div class="card bg-light border-primary  col-2 m-2">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.housesController.deleteHouses('${this.id}')" aria-hidden="true"></i>
  <img class="card-img-top" src="${this.imgUrl}" alt="">
  <div class="card-body">
  
      <h4 class="card-title">Price: $${this.price}</h4>
      <p class="card-text">Bathrooms: ${this.bathrooms}</p>
      <p> Bedrooms: ${this.bedrooms} </p>
      <p> ${this.description} </p>
      
      <button class="btn btn-success" onclick="app.housesController.bid('${this.id}')">Bid</button>
  </div>
</div>`
}
}