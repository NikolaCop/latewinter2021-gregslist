import Car from "./Models/Car.js"
import Value from "./Models/Value.js"
import House from "./Models/House.js"
import Jobs from "./Models/Jobs.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  //NOTE adding a type to your collections with jsdocs gives additional intellisense when referencing that collection.
  /**@type {Car[]} */
  cars = [new Car({make: "Porsche", model: "911", price: 36.00, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNNV1PToiitbfHcbrkYLP58Bc5AmFJa3hEwQ&usqp=CAU', year: 2008, description: "It's ok", miles: 112054}), new Car({make: "Volkswagen", model: "GTI", price: 13.27, imgUrl: 'https://classicregister.com/sites/default/files/styles/col-7/public/Atlas%20Grey%20MK1%20Golf%20GTI%20Campaign%20editoin%20UK%20front.jpg?itok=DqyEGk6t', year: 1976, description: "It always has a check engine light on", miles: 140254}),]

  /**@type {House[]} */
  house = [new House({rooms: 5, size: "6,129 sqft", garage: false, price: 7750000, imgUrl: 'https://photos.zillowstatic.com/fp/73b8b91fa029027981d51f0bddbbfb06-cc_ft_960.jpg',}), new House ({rooms: 2, size: "4,025 sqft", garage: true, price: 2970000, imgUrl:'https://photos.zillowstatic.com/fp/cc5aecec2205b5728699f1eda134be4f-cc_ft_576.jpg',})]

/**@type {Jobs[]}  */
jobs = [new Jobs({description: "Landscaping", pay: "$65.00/hr", hours:"Part-Time", apply:48, experience:"At least 38 Years of Lawn Care Experience and hold PhD in Landscapology", imgUrl:'https://bloximages.chicago2.vip.townnews.com/macombdaily.com/content/tncms/assets/v3/editorial/b/e2/be2afb62-3a98-11e9-8faa-ab62ba1e85fc/5c7699d09c738.image.jpg?resize=400%2C400'}), new Jobs({description: "Astronaut", pay: "$235.00/hr", hours:"Full-Time", apply:0, experience:"None - we will hire anybody", imgUrl:'https://events.kcrw.com/wp-content/uploads/2020/10/10.14-event-image.jpg'})]
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
