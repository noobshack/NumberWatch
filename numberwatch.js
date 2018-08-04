var crunchNumbers = function (manual) {

	var completeDisp = {};
	var playerNumbers = [];

	if (manual) {
		var battletag = document.getElementById('battletag').value;
		var region = document.getElementById('region').value;
		var platform = document.getElementById('platform').value;
		var heroes = document.getElementById('heroes').value;

		var url = "https://ow-api.com/v1/stats/" + platform + "/" + region + "/" + battletag + "/heroes/"  + heroes;

		var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      document.getElementById("results").innerHTML = this.responseText;
	    }
	  };
	  xhttp.open("GET", url, true);
	  xhttp.send();
	}

	if (!manual) {
		playerNumbers.push(document.getElementById('dmgp10').value);
		playerNumbers.push(document.getElementById('barrierdmgp10').value);
		playerNumbers.push(document.getElementById('elimp10').value);
		playerNumbers.push(document.getElementById('soloelimp10').value);
		playerNumbers.push(document.getElementById('acc').value);
		playerNumbers.push(document.getElementById('crit').value);
		playerNumbers.push(document.getElementById('qmelee').value);
		playerNumbers.push(document.getElementById('deaths').value);
		playerNumbers.push(document.getElementById('healingp10').value);
		playerNumbers.push(document.getElementById('rezp10').value);
		playerNumbers.push(document.getElementById('defassp10').value);
		playerNumbers.push(document.getElementById('offassper10').value);
		playerNumbers.push(document.getElementById('dmgblckedp10').value);
		console.log(playerNumbers);
	}
}


var tabChange = function (input) {
	if (input === 'manual') {
		document.getElementById('manual').classList.add("selected");
		document.getElementById('auto').classList.remove("selected");
		document.getElementById('autoContainer').classList.add("hidden");
		document.getElementById('manualContainer').classList.remove("hidden");
	} else {
		document.getElementById('manual').classList.remove("selected");
		document.getElementById('auto').classList.add("selected");
		document.getElementById('manualContainer').classList.add("hidden");
		document.getElementById('autoContainer').classList.remove("hidden");
	}
}
