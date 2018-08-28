// const card = {
//   name: "Ace of Spades"
//   label: 
//   rank: //
//   suit: 
//   image:

// }

// const suits = []
// 
// A
// 2 [2]
// 3 [3]
// 4 [4]
// 5 [5]
// 6 [6]
// 7 [7]
// 8 [8]
// 9 [9]
// 10 [10]
// Jack [11]
// Queen [12]
// King [13]
// Ace [1 || 14]

// 

// Fisher-Yates shuffle algorithm
shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class Deck {
  constructor() {
    this.deck = []; 

    const suits = ['H', 'S', 'C', 'D'];
    const ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10,'J', 'Q', 'K'];


    for (let suit in suits) {
      for (let rank in ranks) {
        this.deck.push(`${ranks[rank]}${suits[suit]}`);
      }
    }

  }
}

const hand = new Deck();

const shuff = shuffle(hand.deck)
console.log(shuff)



flop = () => {
  
}