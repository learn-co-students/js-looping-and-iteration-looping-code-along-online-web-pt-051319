const cards = []
function writeCards(personName, eventName) {
    for (let i = 0; i < personName.length; i++) {
        cards.push(`Thank you, ${personName[i]}, for the wonderful ${eventName} gift!`);
    }
return cards
}


function countDown(i) {
while (i >= 0) {
  console.log(i); 
  i--
}
}
