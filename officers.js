xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if (this.readyState !== 4) return;
	if (this.status !== 200){
		console.error("Could not load officers");
	}
	var json = JSON.parse(this.responseText);
	document.getElementById("president").innerHTML = json['president'];
	document.getElementById("vice-president").innerHTML = json['vice-president'];
	document.getElementById("bike-share").innerHTML = json['bike-share'];
	document.getElementById("treasurer").innerHTML = json['treasurer'];
	document.getElementById("secretary").innerHTML = json['secretary'];
	document.getElementById("social").innerHTML = json['social'];
};
xhr.open("GET", "officers.json");
xhr.send();