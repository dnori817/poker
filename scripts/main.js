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

    // 11=J
    // 12=Q
    // 13=K
    // 14=A
    const suits = ['H', 'S', 'C', 'D'];
    const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', '11J', '12Q', '13K', '14A'];
    


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
console.log(newDeck);

const shuffDeck = shuffle(newDeck.deck)
console.log(shuffDeck)
  
let player1 = [];
let player2 = [];
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
  },50);
  setTimeout(function() {
    document.getElementById("card3").style.backgroundImage = "url('./assets/images/" + player1[1] + ".png')"
  },100);
  setTimeout(function() {
    document.getElementById("card4").style.backgroundImage = "url('./assets/images/" + player2[1] + ".png')"
  },150);  
  
  usedCards(4);

  document.getElementById("dealbtn").style.visibility = "hidden";


  console.log("Player 1: " + player1);
  console.log("Player 2: " + player2);
}





flop = () => {
	for (let i = 1; i < 4; i++) {
		board.push(shuffDeck[i]);
	}
  

  setTimeout(function() {
    document.getElementById("flop1").style.backgroundImage = "url('./assets/images/" + board[0] + ".png')"
  },300);
  setTimeout(function() {
    document.getElementById("flop2").style.backgroundImage = "url('./assets/images/" + board[1] + ".png')"
  },350);

  setTimeout(function() {
    document.getElementById("flop3").style.backgroundImage = "url('./assets/images/" + board[2] + ".png')"
  },400);
  
  usedCards(4);
  console.log(board);
}


turn = () => {
	for (let i = 1; i < 2; i++) {
		board.push(shuffDeck[i]);
  }


  setTimeout(function() {
    document.getElementById("turn").style.backgroundImage = "url('./assets/images/" + board[3] + ".png')"
  },500);
  
  
  usedCards(2);
  console.log(board);

}
 
river = () => {
	for (let i = 1; i < 2; i++) {
		board.push(shuffDeck[i]);
  }


  setTimeout(function() {
    document.getElementById("river").style.backgroundImage = "url('./assets/images/" + board[4] + ".png')"
  },650);

  
  usedCards(2);
  console.log(board);
  makeHand();
  console.log(hand);
  setTimeout(function() {
    checkFlush();
    checkStraight();
    checkPair();
  },700);
}

makeHand = () => {
  hand = player1.concat(board).sort();

  console.log("Player 1: " + hand);
  hand2 = player2.concat(board).sort();
  console.log("Player 2: " + hand2);
}

pairCount = 0
let isFour = false
let isThree = false
let isPair = false
let is2pair = false
let isFull = false
checkPair = () => {
	let valCard
  let valHand = [];
  for (let i = 0; i < hand.length; i++) {
    valCard = parseInt(hand[i], 10);
    valHand.push(valCard)
  }
  console.log(valHand)

	for (let i = 0; i < valHand.length; i++) {
  	if (valHand[i] === valHand[i+3]) {
			isFour = true
		} else if (valHand[i] === valHand[i+2]) {
			isThree = true
		} else if (valHand[i] === valHand[i+1]) {
			isPair = true
			pairCount += 1
		}
	}

	if (isThree == true && isPair == true) {
		alert('Full House!')
	} else if (isFour == true) {
		alert('Four of a Kind!')
	} else if (isThree == true) {
		alert('Three of a Kind!')		
	} else if (pairCount >= 2) {
		alert('Two Pair!')
	} else if (pairCount == 1) {
		alert('Pair!')
	}
}



let isFlush

checkFlush = () => {

  let flushHand = [];


  for (let i = 0; i < hand.length; i++) {
    let card = hand[i];
    flushHand.push(card.charAt(card.length-1));
  }


  flushHand.sort();
  console.log(flushHand)

  if (flushHand[0] === flushHand[4] || flushHand[1] === flushHand[5] || flushHand[2] === flushHand[6]) {
    alert("Flush!")
    isFlush = true
  }
}

// findVal = () => {
//   let valCard
//   let valHand = [];
//   for (let i = 0; i < hand.length; i++) {
//     valCard = parseInt(hand[i], 10);
//     valHand.push(valCard)
//   }
//   console.log(valHand)
// }

let isStraight
checkStraight = () => {
  let valCard
  let valHand = [];
  for (let i = 0; i < hand.length; i++) {
    valCard = parseInt(hand[i], 10);
    valHand.push(valCard)
  }
  console.log(valHand)

  let valHand2 = []

  for (let i = 0; i < valHand.length; i++) {
    if (valHand[i] != valHand[i+1]) {
      valHand2.push(valHand[i])
    }
  }
  console.log(valHand2)
    
  
    
  let strtHand = [];

  for (let i = 0; i < valHand2.length; i++) {
    let diff = valHand2[i+1] - valHand2[i];
    let diff2 = valHand2[i] - valHand2[i-1];
        
    if (diff === 1 || diff2 === 1)	{
      strtHand.push(valHand2[i])
    }
  }
  
  let highCard

  if (valHand[6] === 14 && valHand2[0] === 2 && valHand2[1] === 3 && valHand2[2]  === 4 && valHand2[3] === 5 && valHand2[4] != 6) {
    isStraight = true
    highCard = 5 
  } else if (strtHand[6] - strtHand[2] === 4) {
    isStraight = true
    highCard = strtHand[6]
  } else if (strtHand[5] - strtHand[1] === 4) {
    isStraight = true
    highCard = strtHand[5]
  } else if (strtHand[4] - strtHand[0] === 4) {
    isStraight = true
    highCard = strtHand[4]
  } 
  
  // if (isStraight == true && strtHand[strtHand.length-1] === 13) {
  // 	alert('King straight!')
  // } 
  
  if (isStraight == true && highCard === 14 ) {
    alert('Ace High Staight!')
  } else if (isStraight == true && highCard === 13) {
    alert('King High Straight!') 
  } else if (isStraight == true && highCard === 12) {
    alert('Queen High Straight!')
  } else if (isStraight == true && highCard === 11) {
    alert('Jack High Straight!')
  } else if (isStraight == true) {
    alert(highCard + ' High Straight!')
  // } else {
  //   alert('No Straight For You!')
  }
  
  console.log(strtHand)
}


// deal = () => {
//   deal1 = shuffDeck.shift();
//   document.getElementById("card1").style.backgroundImage = "url('./assets/images/" + deal1 + ".png')"
// }


