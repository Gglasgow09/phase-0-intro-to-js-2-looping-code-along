const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";

function writeCards(names, event) {
  let individualCards = []
  for (let i = 0; i < names.length; i++) {
    individualCards.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
   
  }

  return individualCards;
}

function countDown() {
  let numberCountdown = 11
  while(numberCountdown --) {
    console.log(numberCountdown)
  }
}

