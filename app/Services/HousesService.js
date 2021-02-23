import { ProxyState } from "../AppState.js";
import Houses from "../Models/Houses.js";
import { api } from "./AxiosService.js";

class HousesService{

constructor(){
    console.log("houses service");
    this.getHouses();
}

 async getHouses() {
    try {
      const res = await api.get('houses')
      ProxyState.houses = res.data.map(rawHousesData => new Houses(rawHousesData))
    } catch (error) {
      console.error(error)
    }
  }
async createHouses(rawHouses){
 try {
      const res = await api.post('houses', rawHouses)
      ProxyState.houses = [ ...ProxyState.houses, new Houses(res.data)]
    } catch (error) {
      console.error(error)
    }
}
async bid(id) {
let houses = ProxyState.houses.find(h=> h.id === id)
    houses.price += 1000
    try {
      const res = await api.put('houses/' + id, houses)
      console.log(res.data)
      ProxyState.houses = ProxyState.houses
    } catch (error) {
      
    }
}
  

  async deleteHouses(id) {
 try {
 const res = await api.delete(`houses/${id}`)
 this.getHouses()
  } catch (error) {
  console.error(error)
  }
}
}
export const housesService = new HousesService()




