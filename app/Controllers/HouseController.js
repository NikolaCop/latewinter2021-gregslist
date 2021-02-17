import { ProxyState } from "../AppState.js"
import { houseService } from "../Services/HouseService.js"


  function _draw(){
    let house = ProxyState.house
    let template = ""
    house.forEach(house=> template += house.Template)

    document.getElementById('house').innerHTML = template
    console.log(ProxyState.house)
  }


export default class HouseController{

constructor(){
console.log("House Controller Working")
console.log(ProxyState.house)
_draw()
ProxyState.on("house",_draw)
}

createHouse(event){
    event.preventDefault();
    console.log('creating house')
    let form = event.target
    console.log(form)
    let rawHouse = {
      rooms: form.rooms.value,
      size: form.size.value,
      garage: form.garage.value,
      price: parseFloat(form.price.value),
      imgUrl: form.imgUrl.value,
    }
    console.log(rawHouse)
    houseService.createHouse(rawHouse)
  }

  bid(id){
    console.log('bidding ' + id)
    houseService.bid(id)
  }

  deleteHouse(id){
    console.log(id)
    houseService.deleteHouse(id)
  }



} 

