//Clear All button function
function clearAll() {
  poundsInput.value = '';
  kilogramsInput.value = '';
  gramsInput.value = '';
  tonInput.value = '';
  ounceInput.value = '';
  cInput.value = '';
  fInput.value = '';
  kInput.value = '';
  raInput.value = '';
  reInput.value = '';
}
clearButton.onclick = clearAll;
//Functions for weight conversions
function updateKilograms() {
  poundsInput.value = (kilogramsInput.value * 2.20462).toFixed(1);
  gramsInput.value = (kilogramsInput.value * 1000).toFixed(1);
  tonInput.value = (kilogramsInput.value / 907.18474).toFixed(1);
  ounceInput.value = (kilogramsInput.value * 35.27396).toFixed(1);
}
function updatePounds() {
  kilogramsInput.value = (poundsInput.value * 0.45359).toFixed(1);
  gramsInput.value = (poundsInput.value * 453.59237).toFixed(1);
  tonInput.value = (poundsInput.value * 0.0005).toFixed(1);
  ounceInput.value = (poundsInput.value * 16).toFixed(1);
}
function updateGrams() {
  kilogramsInput.value = (gramsInput.value * 1000).toFixed(1);
  poundsInput.value = (gramsInput.value * 0.002205).toFixed(1);
  tonInput.value = (gramsInput.value * 0.0000011).toFixed(1);
  ounceInput.value = (gramsInput.value * 0.035274).toFixed(1);
}
function updateTon() {
  kilogramsInput.value = (tonInput.value * 907.18474).toFixed(1);
  poundsInput.value = (tonInput.value * 2000).toFixed(1);
  gramsInput.value = (tonInput.value * 907184.74).toFixed(1);
  ounceInput.value = (tonInput.value * 32000).toFixed(1);
}
function updateOunce() {
  kilogramsInput.value = (ounceInput.value * 0.02835).toFixed(1);
  poundsInput.value = (ounceInput.value * 0.0625).toFixed(1);
  tonInput.value = (ounceInput.value * 0.000031).toFixed(1);
  gramsInput.value = (ounceInput.value * 28.34952).toFixed(1);
}
kilogramsInput.oninput = updateKilograms;
poundsInput.oninput = updatePounds;
gramsInput.oninput = updateGrams;
tonInput.oninput = updateTon;
ounceInput.oninput = updateOunce;