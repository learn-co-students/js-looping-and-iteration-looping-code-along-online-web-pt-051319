// Code your solutions in this file
function writeCards(stringNames, event){
    let thankYouCards = []
    for (let i = 0; i < stringNames.length; i++) {
        thankYouCards.push(`Thank you, ${stringNames[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

function countDown(number){
    while (number >= 0) {
        console.log(number)
        number--
    }
}