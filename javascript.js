let gerechten3 = document.getElementById("gerechten");

let gerechten = ["lasagne", "macaroni", "soep", "salade", "omelet"];
showArray();
function showArray() {
	for (let i = 0; i < gerechten.length; i++) {
		console.log(gerechten[i]);
	}
}

gerechten2(0);
function gerechten2(number) {
	for (let i = 0; i < gerechten.length; i++) {
		console.log(gerechten[number]);
	}	
}

console.log(gerechten1("lasagne", "soep"));

let lasagne = gerechten1("lasagne", "soep");
console.log(lasagne);

function gerechten1(name) {
	return "macaroni" + name;
}

for (let i = 2; i <= 4; i++) {
	console.log(gerechten[i]);
}


gerechten1.innerHTML = gerechten;