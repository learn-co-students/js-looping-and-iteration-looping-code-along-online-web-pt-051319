// Code your solutions in this file
name = [];
let result = [];
let message = "";

function writeCards(name, message) {
    result = [];
    for (let i = 0; i < name.length; i++) {
        result.push(`Thank you, ${name[i]}, for the wonderful ${message} gift!`);
    }
    return result;
}

writeCards(name, message);



function countDown(number) {
    while (number + 1 > 0) {

        console.log(number);
        number--;
    }

}