//import Deck from "./deck.js"
const Deck = require('./deck.js')

const deck = new Deck()
deck.shuffle()
console.log(deck.cards)