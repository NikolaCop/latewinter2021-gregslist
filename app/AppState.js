import Car from "./Models/Car.js"
import Houses from "./Models/Houses.js"
import Jobs from "./Models/Jobs.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


class AppState extends EventEmitter {

  /**@type {Car[]} */
  cars = []
  /**@type {Houses[]} */
  houses = []

/**@type {Jobs[]}  */
  jobs = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
