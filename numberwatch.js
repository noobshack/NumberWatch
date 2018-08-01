var crunchNumbers = function (manual) {

	var completeDisp = {};

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

	var dmgp10 = document.getElementById('dmgp10').value;
	var barrierdmgp10 = document.getElementById('barrierdmgp10').value;
	var elimp10 = document.getElementById('elimp10').value;
	var soloelimp10 = document.getElementById('soloelimp10').value;
	var acc = document.getElementById('acc').value;
	var crit = document.getElementById('crit').value;
	var qmelee = document.getElementById('qmelee').value;
	var deaths = document.getElementById('deaths').value;
	var healingp10 = document.getElementById('healingp10').value;
	var rezp10 = document.getElementById('rezp10').value;
	var defassp10 = document.getElementById('defassp10').value;
	var offassper10 = document.getElementById('offassper10').value;
	var dmgblckedp10 = document.getElementById('dmgblckedp10').value;
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
