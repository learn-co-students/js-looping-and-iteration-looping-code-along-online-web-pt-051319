// Code your solutions in this file


function writeCards(arrayName, eventName) {
    let thankYouCards = []
    for ( let i = 0; i < arrayName.length; i++ ) {
        thankYouCards.push( `Thank you, ${arrayName[i]}, for the wonderful ${eventName} gift!` );
    }
    return thankYouCards;
}


function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
        console.log( startingNumber );
        startingNumber -= 1;
    }
    console.log( startingNumber );
}