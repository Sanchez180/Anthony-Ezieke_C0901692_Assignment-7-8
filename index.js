var result1 = 0;
var result2 = 0;

function DiceRoll() {

    const resultTxt = document.getElementById('resultTxt');

    if(result1 >= 12 || result2 >= 12)
    {
        result1= 0
        result2 = 0
        resultTxt.innerHTML = "";
    }

    console.log(result1)
    const diceImages = [
      './Images/Dice folder/dice1 (1)/dice1 (1).png',
      './Images/Dice folder/dice2/dice2.png',
      './Images/Dice folder/dice3/dice3.png',
      './Images/Dice folder/dice4/dice4.png',
      './Images/Dice folder/dice5/dice5.png',
      './Images/Dice folder/dice6/dice6.png'
    ];

    const random1 = Math.floor(Math.random() * diceImages.length);
    const random2 = Math.floor(Math.random() * diceImages.length);

    result1 += random1 + 1;
    result2 += random2 + 1;
    console.log(result1)

    const score1 = document.getElementById('score1');
    const score2 = document.getElementById('score2');
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    


    dice1.classList.add('firstDiceRoll');
    dice2.classList.add('secondDiceRoll');


    setTimeout(() => {
      dice1.src = diceImages[random1];
      dice2.src = diceImages[random2];
    }, 1000);


    setTimeout(() => {
      dice1.classList.remove('firstDiceRoll');
      dice2.classList.remove('secondDiceRoll');
      score1.innerHTML = random1 + 1;
      score2.innerHTML = random2 + 1;
      if (result1 >= 12) {
        resultTxt.innerHTML = "player 1 wins the game";
        }else if(result2 >= 12){
            resultTxt.innerHTML = "player 2 wins the game";
        }  
    }, 1000);      
  }