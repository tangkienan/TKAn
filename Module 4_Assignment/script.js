var names = ["An","Bao","Linh","Yen","John","Michael","Jack","Octavia","Vale","Jacob","Javert","Hassan","Quinn","Dan","Theodora","Jonas","Jonathan","Joseph","joestar"];

for (var i = 0; i < names.length; i++){
	var n = names[i].indexOf("j"),m = names[i].indexOf("J");
	if (n == 0 || m == 0){
		console.log("Goodbye J"+names[i]);
	}
	else		
	console.log("Hello "+names[i]);
}


