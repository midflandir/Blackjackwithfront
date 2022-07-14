let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J"];
//suit: heart, diamond, ace and clover

let selectedCards = []; //First and second card -randomly. And then add with a draw function
let totalgamecounter = 0;
let sum = 0;
let answer = "";
let Avalue = "10";

function startGame() {
  //TO DO: Add the first 2 cards randomly to the user
  //Math.random() - 0 - cards.length
  selectedCards = [];
  cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J"];
  document.getElementById("gamestats").innerText = " ";

  document.getElementById("drawcardbutton").style.display = "block";
  document.getElementById("ChangeAbutton").style.display = "block";

  const i_firstCard = Math.floor(Math.random() * cards.length);
  const firstCard = cards[i_firstCard];
  cards.splice(i_firstCard, 1);

  const i_secondCard = Math.floor(Math.random() * cards.length);
  const secondCard = cards[i_secondCard];
  cards.splice(i_secondCard, 1);

  selectedCards.push(firstCard);
  selectedCards.push(secondCard);

  gamestatus();
}

function gamestatus() {
  console.log("Your Cards: " + selectedCards);
  document.getElementById("yourcards").innerText =
    "Your Cards: " + selectedCards;

  let cardssum = sumCards(selectedCards);
  console.log("Sum: " + cardssum + " \n");
  document.getElementById("yoursum").innerText = "Sum: " + cardssum;

  if (cardssum == 21) {
    console.log("here one \n");
    console.log(
      "   Blackjack!!! \n  -----  You win!!!! \n"
    );

    document.getElementById("gamestats").innerText =
      "   Blackjack!!!  You win!!!!   ";
      let prize= prizecalculator();

    document.getElementById("gamesprize").innerText =
    "   Your prize is $" +  prize;

    document.getElementById("drawcardbutton").style.display = "none";
    document.getElementById("ChangeAbutton").style.display = "none";
  }
  /* if(cardssum < 21 && cardssum >= 13){
            console.log("Blackjack!!! \n  -----  You win the game -----  \n  \n");
            document.getElementById('gamestats').innerText
            = "Blackjack!!! \n  -----  You win the game ----- ";
            document.getElementById("drawcardbutton").style.display = "none";
            document.getElementById("ChangeAbutton").style.display = "none";
          }
*/
  if (cardssum > 21) {
    console.log("Sorry, you lose.");
    document.getElementById("gamestats").innerText = "Sorry, you lose.";
    document.getElementById("drawcardbutton").style.display = "none";
  }
}

function Avaluechange() {
  let auxa = Avalue;
  if (auxa == "10") {
    Avalue = "1";
  }
  if (auxa == "1") {
    Avalue = "10";
  }
  let cardssum = sumCards(selectedCards);
  if (cardssum < 21) {
    document.getElementById("gamestats").innerText = "";
    document.getElementById("drawcardbutton").style.display = "block";
  }
  gamestatus();
}

function sumCards(cards) {
  let sum = 0;

  for (let i = 0; i < cards.length; i++) {
    if (cards[i] === "A") {
      if (Avalue == "1") {
        sum += 1;
      }

      if (Avalue == "10") {
        sum += 10;
      }
    } else if (cards[i] === "J" || cards[i] === "Q" || cards[i] === "K") {
      sum += 10;
    } else {
      sum += parseInt(cards[i]);
    }
  }

  return sum;
}

function prizecalculator() {
  let prize = 1000;

  for (let i = 0; i < selectedCards.length; i++) {

    if (selectedCards[i] === "A" || selectedCards[i] === "J" || selectedCards[i] === "Q" || selectedCards[i] === "K") {
        prize += 500;
    } else {
        prize += 100;
    }
  }

  return prize;
}

function drawCard() {
  let i_newCard = Math.floor(Math.random() * cards.length);
  let newCard = cards[i_newCard];
  selectedCards.push(newCard);
  cards.splice(i_newCard, 1);

  console.log(cards);
  gamestatus();
}
