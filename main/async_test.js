function awaiting2s(){
	return new Promise((resolve,reject) =>{
		setTimeout(()=>{
			console.log("2s has passed...");
			resolve("Done");
			reject("ERROR");
		}, 2000);
	});
}

async function main(){
	console.log("Timer start");
	try {
		await awaiting2s();
	} catch(err) {
		console.log(err);
	}
	console.log("Timer over");
}

main();
