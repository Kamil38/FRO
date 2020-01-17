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
	console.log(gerechten[number]);	
}

console.log(gerechten1("lasagne", "soep"));

let lasagne = gerechten1("lasagne", "soep");
console.log(lasagne);

function gerechten1(name,arg2) {
	return "macaroni" + name + arg2;
}

function gerechten4() {
	for (let i = 2; i <= 4; i++) {
		console.log(gerechten[i]);
	}
}


order('ol');
function order(tag){

let ol = document.createElement(tag);
document.getElementById('list').appendChild(ol);
 
gerechten.forEach(function(name){
	let li = document.createElement('li');
	ol.appendChild(li);
	li.innerHTML += name;
});

}
gerechten1.innerHTML = gerechten;