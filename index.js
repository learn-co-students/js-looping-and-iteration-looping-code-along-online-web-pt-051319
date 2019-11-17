// Code your solutions in this file
  const cards = []
function writeCards(array, eventName) {
  for(let i = 0; i < array.length; i++){
   cards.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
  }
  return cards 
}

function countDown(num){
  while (num > -1) {
    console.log(num);
    num--;
  }
}