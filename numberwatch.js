var crunchNumbers = function () {

	var blard = 'testing';
	var battletag = document.getElementById('battletag').value;
	var region = document.getElementById('region').value;
	var platform = document.getElementById('platform').value;

	var url = "https://ow-api.com/v1/stats/" + platform + "/" + region + "/" + battletag + "/profile";

	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

	var input1 = document.getElementById('input1').value;
	var input2 = document.getElementById('input2').value;

	console.log(battletag, region, platform);

}
