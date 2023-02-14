//your code here
var num = document.getElementById("num");
var btn = document.getElementById("btn");
var inputnum = document.getElementById("guess").value;
var result = document.getElementById("respond");

function generatenumber(){
	  var gnum = (Math.floor(Math.random() * 40) - 20 );
		num.innerHTML = gnum;
	var diff = inputnum - gnum; 
	if(diff <= 5 && diff >= 0){
		result.innerHTML = "Hot";
	}else{
		result.innerHTML = "Cold";
	}
}

btn.addEventListener('click', generatenumber);

