// Code your solutions in this file

function writeCards(recipients, event) {
    const cards = [];

    for (let i = 0; i < recipients.length; i++) {
        cards.push(`Thank you, ${recipients[i]}, for the wonderful ${event} gift!`);
      }

    return cards;
};

function countDown(startingNumber) {
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber--;
      }

      console.log(startingNumber);
};