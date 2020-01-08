function writeCards(arrayName, eventName) {
    let thankYouCards = []
    for (let i = 0; i < arrayName.length; i++){
        thankYouCards.push(`Thank you, ${arrayName[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouCards;
}

function countDown(number){
    while (number>0){
        console.log(number);
        number-=1;
    }
    console.log(number);
}
