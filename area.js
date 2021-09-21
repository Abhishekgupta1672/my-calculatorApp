//Clear All button function
function clearAll() {
    sqm.value = '';
    sqft.value = '';
    acre.value = '';
    hectare.value = '';
    cInput.value = '';
    fInput.value = '';
    kInput.value = '';
    raInput.value = '';
    reInput.value = '';
  }
  clearButton.onclick = clearAll;
  //Functions for weight conversions
  function updateSqm() {
    sqft.value = (sqm.value * 10.7639104).toFixed(1);
    acre.value = (sqm.value * 0.0002471).toFixed(1);
    hectare.value = (sqm.value * 0.0001).toFixed(1);
  }
  function updateSqft() {
    sqm.value = (sqft.value * 0.09290304).toFixed(1);
    acre.value = (sqft.value * 0.000022956431).toFixed(1);
    hectare.value = (sqft.value * 0.000009290304).toFixed(1);
  }
  function updateAcre() {
    sqm.value = (acre.value * 4046.9445568).toFixed(1);
    sqft.value = (acre.value * 43560.9486038).toFixed(1);
    hectare.value = (acre.value * 0.4046944).toFixed(1);
  }
  function updateHectare() {
    sqm.value = (hectare.value * 10000).toFixed(1);
    sqft.value = (hectare.value * 107639.104).toFixed(1);
    acre.value = (hectare.value * 2.471).toFixed(1);
  }
  sqm.oninput = updateSqm;
  sqft.oninput = updateSqft;
  acre.oninput = updateAcre;
  hectare.oninput = updateHectare;