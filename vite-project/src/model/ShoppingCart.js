import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {

static #allCarts = []
#cartItems

constructor() {
this.id = getId() // we are getting this from another file
this.#cartItems = []
ShoppingCart.#allCarts.push(this)
}

createItem(name, price) {
    const newItems = new CartItem(name, price) // here we are using the new keyword to create a new isntance
    this.#cartItems.push(newItems) // we are pushing newItems into the cartItem array
    return newItems // returning the newItems instance
}

getItems() {
    return [...this.#cartItems]
}

removeItem(id) {
    this.#cartItems.splice(this.#cartItems.findIndex((items) => items.id === id), 1);
}
getTotal() {
    return this.#cartItems.reduce((total, item) => total + item.price, 0); // Sum up the prices of all items
  }

static listAll(){
    return [...ShoppingCart.#allCarts]
}

static findBy(id) {
    return ShoppingCart.#allCarts.find((e) => e.id === id)
}
}

export default ShoppingCart;