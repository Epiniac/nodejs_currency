// console.log("hello world !");
const axios = require('axios');
const process = require('process');

async function main(){
	const res = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
	const args = process.argv;
	const currency = Object.keys(res.data.bpi);
	for (let i = 2; i < args.length; i++) {
		const arg = args[i].toUpperCase();
		if(currency.includes(arg)){
			console.log("The bitcoin value of " + arg + " at " + res.data.time.updated + " is " + res.data.bpi[arg].rate +" "+ res.data.bpi[arg].symbol);

		}else{
			console.log("Error: Unknown currency");
			console.log("The only currency available are: " + currency);
		}
  	}
}
main();
