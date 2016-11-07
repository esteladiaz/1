document.getElementById('stopButton').onclick = illuminateRed;

function illuminateRed() {
  clearLightsStopSel();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function clearLightsStopSel() {
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}

document.getElementById('slowButton').onclick=illuminateYellow;

function illuminateYellow() {
	clearLightsSlowSel();
	document.getElementById('slowLight').style.backgroundColor="yellow";
}

function clearLightsSlowSel() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}

document.getElementById('goButton').onclick=illuminateGreen;

function illuminateGreen() {
	clearLightsGoSel();
	document.getElementById('goLight').style.backgroundColor="green";
}

function clearLightsGoSel() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
}