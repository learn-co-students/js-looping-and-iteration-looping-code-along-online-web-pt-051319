function writeCards(names){
	let thanks = names.map(name => `Thank you, ${name}, for the wonderful surprise gift!` );
	return thanks;
};

function countDown(number){
	for(let i = 0, j = number; j >= i; j-- ){
		console.log(j);
	}
};