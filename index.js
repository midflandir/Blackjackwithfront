let cards =["A","2","3","4","5","6","7","8","9","10","K","Q","J"];
//suit: heart, diamond, ace and clover


let selectedCards=[]; //First and second card -randomly. And then add with a draw function
let totalgamecounter  = 0;
let sum =0;
let answer ="";
let Avalue = "10";

function startGame(){
  //TO DO: Add the first 2 cards randomly to the user
  //Math.random() - 0 - cards.length
  selectedCards=[];
  cards =["A","2","3","4","5","6","7","8","9","10","K","Q","J"];

  const i_firstCard=Math.floor(Math.random() * cards.length);
  const firstCard=cards[i_firstCard];
  cards.splice(i_firstCard, 1);


  const i_secondCard=Math.floor(Math.random() * cards.length);
  const secondCard=cards[i_secondCard];
  cards.splice(i_secondCard, 1);


  selectedCards.push(firstCard);
  selectedCards.push(secondCard);

  gamestatus();

}

function gamestatus(){
    console.log("Your Cards: " + selectedCards);
    document.getElementById('yourcards').innerText = "Your Cards: " + selectedCards;

    let cardssum  = sumCards(selectedCards)
    console.log("Sum: " + cardssum + " \n");
    document.getElementById('yoursum').innerText = "Sum: " + cardssum;
}


function Avaluechange(){
    let auxa = Avalue;
    if (auxa ==  "10"){
        Avalue = "1"
}
if (auxa ==  "1"){
    Avalue = "10"
}

    gamestatus();
}


function sumCards(cards){

  let sum = 0;

  for(let i = 0; i < cards.length; i++){
    if(cards[i] === "A") {


if (Avalue ==  "1"){
        sum += 1;
            console.log("here one \n")
}

if (Avalue ==  "10"){
        sum += 10;
            console.log("here ten \n")
}

    } else if (cards[i] === "J" || cards[i] === "Q" || cards[i] === "K"){
      sum += 10;
    } else {
      sum += parseInt(cards[i]);
    }
  }

  return sum;


}


