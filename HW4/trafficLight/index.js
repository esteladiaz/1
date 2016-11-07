// if STOP light clicked
document.getElementById('stopButton').onclick = illuminateRed;
// clear lights and make STOP red
function illuminateRed() {
  clearLightsStopSel();
  document.getElementById('stopLight').style.backgroundColor = "red";
}
// clears all lights but the "STOP"
function clearLightsStopSel() {
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}
// if SLOW light clicked
document.getElementById('slowButton').onclick=illuminateYellow;
// illuminate SLOW light
function illuminateYellow() {
	clearLightsSlowSel();
	document.getElementById('slowLight').style.backgroundColor="yellow";
}
// clears all lights but the "SLOW"
function clearLightsSlowSel() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}
// if GO light clicked
document.getElementById('goButton').onclick=illuminateGreen;
// clear lights and make GO green
function illuminateGreen() {
	clearLightsGoSel();
	document.getElementById('goLight').style.backgroundColor="green";
}
// clears all lights but the "GO"
function clearLightsGoSel() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
}
