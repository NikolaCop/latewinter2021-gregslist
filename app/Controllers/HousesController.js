import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"


  function _draw(){
    let houses = ProxyState.houses
    let template = ""
    houses.forEach(houses=> template += houses.Template)

    document.getElementById('houses').innerHTML = template
    console.log(ProxyState.houses)    
  }


export default class HousesController{

constructor(){
console.log("Houses Controller Working")
console.log(ProxyState.houses)
_draw()
ProxyState.on("houses",_draw)
}
   
createHouses(event){
    event.preventDefault();
    console.log('creating houses')
    let form = event.target
    console.log(form)
    let rawHouses = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      imgUrl: form.imgUrl.value,
      levels: form.levels.value,
      year: form.year.value,
      price: parseFloat(form.price.value),
      description: form.description.value
    }
    console.log(rawHouses)
    housesService.createHouses(rawHouses)
  }

  bid(id){
    console.log('bidding ' + id)
    housesService.bid(id)
  }

  deleteHouses(id){
    console.log(id)
    housesService.deleteHouses(id)
  }



} 

