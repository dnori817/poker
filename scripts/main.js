// const card = {
//   name: "Ace of Spades"
//   label: 
//   rank: //
//   suit: /   image:

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

    // let card = (suit, rank) 
    // []
    const suits = ['H', 'S', 'C', 'D'];
    const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];


    // card = (suit, rank) => {
    //   this.suit = suit;
    //   this.rank = rank;
    //   this.name = rank + ' of ' + suit;

    // }

    for (let suit in suits) {
      for (let rank in ranks) {
        this.deck.push(`${ranks[rank]}${suits[suit]}`);
      }
    }



  }
}

const newDeck = new Deck();

const shuffDeck = shuffle(newDeck.deck)
console.log(shuffDeck)

let player1 = [];
let player2 =[];
let board = [];

usedCards = (used) => {
	for (let i = 0; i < used; i++) {
		dealt = shuffDeck.shift();
	}
}

deal = () => {
	for (let i = 0; i < 4; i++) {
		if (i % 2) {
      deal2 = player2.push(shuffDeck[i]);
      
		} else {
			deal1 = player1.push(shuffDeck[i]);
		}
	}
  
  document.getElementById("card1").style.backgroundImage = "url('./assets/images/" + player1[0] + ".png')"
  setTimeout(function() {
    document.getElementById("card2").style.backgroundImage = "url('./assets/images/" + player2[0] + ".png')"
  },500);
  setTimeout(function() {
    document.getElementById("card3").style.backgroundImage = "url('./assets/images/" + player1[1] + ".png')"
  },1000);
  setTimeout(function() {
    document.getElementById("card4").style.backgroundImage = "url('./assets/images/" + player2[1] + ".png')"
  },1500);  
  
  usedCards(4);

  console.log(player1);
  console.log(player2);
}





flop = () => {
	for (let i = 1; i < 4; i++) {
		board.push(shuffDeck[i]);
	}
  
  document.getElementById("flop1").style.backgroundImage = "url('./assets/images/" + board[0] + ".png')"

  setTimeout(function() {
    document.getElementById("flop2").style.backgroundImage = "url('./assets/images/" + board[1] + ".png')"
  },500);

  setTimeout(function() {
    document.getElementById("flop3").style.backgroundImage = "url('./assets/images/" + board[2] + ".png')"
  },1000);
  
  usedCards(4);
  console.log(board);
}


turn = () => {
	for (let i = 1; i < 2; i++) {
		board.push(shuffDeck[i]);
  }
  
  document.getElementById("turn").style.backgroundImage = "url('./assets/images/" + board[3] + ".png')"
  
  usedCards(2);
  console.log(board);

}

river = () => {
	for (let i = 1; i < 2; i++) {
		board.push(shuffDeck[i]);
  }

  document.getElementById("river").style.backgroundImage = "url('./assets/images/" + board[4] + ".png')"
  
  usedCards(2);
  console.log(board);

}



// deal = () => {
//   deal1 = shuffDeck.shift();
//   document.getElementById("card1").style.backgroundImage = "url('./assets/images/" + deal1 + ".png')"
// }


