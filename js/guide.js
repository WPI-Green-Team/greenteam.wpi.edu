var showerTimeField = document.getElementById('shower-time');
var showerTimeLbl = document.getElementById('shower-gallons-label');
var showerGallonsLbl = document.getElementById('shower-gallons');

var carMPGField = document.getElementById('car-mpg');
var carMPGLbl = document.getElementById('car-co2-label');
var carCO2Lbl = document.getElementById('car-co2');

var lightHoursField = document.getElementById('light-hours');
var incandescentKWHLbl = document.getElementById('incandescent-kwh');
var cflKWHLbl = document.getElementById('cfl-kwh');
var ledKWHLbl = document.getElementById('led-kwh');

var trashLbsField = document.getElementById('trash-lbs');
var recyclingLbsField = document.getElementById('recycling-lbs');
var recyclingRateLbl = document.getElementById('recycling-rate');

(function() {
  showerTimeField.addEventListener('input', updateShowerTime);
  carMPGField.addEventListener('input', updateCarMPG);
  lightHoursField.addEventListener('input', updateIncandescentKWH);
  lightHoursField.addEventListener('input', updateCFLKWH);
  lightHoursField.addEventListener('input', updateLEDKWH);
  trashLbsField.addEventListener('input', updateRecyclingRate);
  recyclingLbsField.addEventListener('input', updateRecyclingRate);

})();

function updateRecyclingRate() {
  var trash = trashLbsField.value;
  var recycling = recyclingLbsField.value;

  if (trash.trim() == "" || recycling.trim() == ""){
    recyclingRateLbl.innerHTML = "";
    return;
  }

  var recyclingRate = +recycling / (+trash + (+recycling)) * 100;

  recyclingRateLbl.innerHTML = "= " + roundTwoPlaces(recyclingRate) + "% recycling rate";

}

function updateIncandescentKWH() {
  var hours = lightHoursField.value;
  if (hours.trim() === "") {
    hours = 0;
  }
  hours = roundTwoPlaces(Math.abs(parseFloat(hours)) * 60 / 1000.0 * 365.25) + " kWh";
  incandescentKWHLbl.innerHTML = hours;
}

function updateCFLKWH() {
  var hours = lightHoursField.value;
  if (hours.trim() === "") {
    hours = 0;
  }
  hours = roundTwoPlaces(Math.abs(parseFloat(hours)) * 15 / 1000.0 * 365.25) + " kWh";
  cflKWHLbl.innerHTML = hours;
}

function updateLEDKWH() {
  var hours = lightHoursField.value;
  if (hours.trim() === "") {
    hours = 0;
  }
  hours = roundTwoPlaces(Math.abs(parseFloat(hours)) * 12 / 1000.0 * 365.25) + " kWh";
  ledKWHLbl.innerHTML = hours;
}

function updateCarMPG() {
  var mpg = carMPGField.value;
  carCO2Lbl.classList.remove("activity-empty");
  carMPGLbl.classList.remove("activity-empty");
  if (mpg.trim() === "") {
    carCO2Lbl.innerHTML = "-.--";
  } else {
    carCO2Lbl.innerHTML = roundTwoPlaces(co2Produced(Math.abs(parseFloat(mpg))));
  }
}

function updateShowerTime() {
  var time = showerTimeField.value;
  showerTimeLbl.classList.remove("activity-empty");
  showerGallonsLbl.classList.remove("activity-empty");
  if (time.trim() === "") {
    showerGallonsLbl.innerHTML = "--.-";
    showerTimeLbl.innerHTML = "Gallons per week";
  } else {
    showerGallonsLbl.innerHTML = roundOnePlace(gallonsUsed(Math.abs(parseFloat(time))));
  }
}

function co2Produced(mpg) {
  if (mpg === 0)
    return 0;
  return 17.6 / mpg;
}

function gallonsUsed(minutes) {
  return minutes * 3.2 * 7;
}

function roundTwoPlaces(value) {
  return Math.round(value * 100) / 100;
}

function roundOnePlace(value) {
  return Math.round(value * 10) / 10;
}
