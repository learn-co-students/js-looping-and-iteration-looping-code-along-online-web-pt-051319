// Code your solutions in this file
function writeCards(arrayName, eventName) {
  let thankYouCards = []
  for ( let i = 0; i < arrayName.length; i++ ) {
    thankYouCards.push(`Thank you, ${arrayName[i]}, for the wonderful ${eventName} gift!` );
  }
  return thankYouCards;
}

function countDown( startingNum ) {
  while ( startingNum > 0 ) {
    console.log( startingNum );
    startingNum -= 1;
  }
  console.log( startingNum );
}
