var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
//The background is in the body so we need to select it
var body=document.getElementById("gradient");

//ensuring that the body is selected
//body.style.background="red";
function setGradient(){
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
     css.textContent= body.style.background+";";
}

//used instead of it oninput in the html
//color1.addEventListener("input",setGradient);

//color2.addEventListener("input",setGradient
	//console.log(color2.value);
//	);
