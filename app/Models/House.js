import {generateId} from "../Utils/GenerateId.js"

export default class House{ 
constructor({rooms, size, garage, price, imgUrl}){
this.rooms = rooms
this.size = size
this.garage = garage
this.price = price
this.imgUrl = imgUrl
this.id = generateId()
}

get Template(){
  return /*html*/`<div class="card bg-light border-primary  col-2 m-2">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.houseController.deleteHouse('${this.id}')" aria-hidden="true"></i>
  <img class="card-img-top" src="${this.imgUrl}" alt="">
  <div class="card-body">
  
      <h4 class="card-title">$${this.price}</h4>
      <p class="card-text">${this.size}</p>
      <p> ${this.rooms} Bedrooms</p>
      
      <button class="btn btn-success" onclick="app.houseController.bid('${this.id}')">Bid</button>
  </div>
</div>`
}
}