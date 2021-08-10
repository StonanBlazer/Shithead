const SUITS = ["♥", "♦", "♠", "♣"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

module.exports = class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards

    let jokers = addJokers(2)
    for(let i=0; i<jokers.length; i++) {
      this.cards.push(jokers[i])
    }
  }

  get numberofCards() {
    return this.cards.length
  }

  shuffle() {
    for (let i = this.numberofCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random()* (i + 1))
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit
    this.value = value
  }
}

function freshDeck() {
  return SUITS.flatMap(suit => {
    return VALUES.map(value => {
      return new Card(suit, value)
    })
  })
}

function addJokers(no) {
  let jokers = []
  for(let i=0; i<no; i++) {
    jokers.push(new Card('NA', 'Joker'))
  }
  return jokers
}

//this is a test
