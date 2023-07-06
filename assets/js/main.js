"use strict";

const inputForm = document.querySelector(".kcal_input_form");
const inputBodySize = document.querySelector("#body_size");
const inputAge = document.querySelector("#age_input");
const inputWeight = document.querySelector("#weight_input");
const inputFemale = document.querySelector("#female");
const inputMale = document.querySelector("#male");
const inputSelection = document.querySelector("#pulldown");
const outputGrundKcal = document.querySelector(".grundumsatz-kcal");
const outputGrundKj = document.querySelector(".grundumsatz-kj");
const outputGesamtKcal = document.querySelector(".gesamtumsatz-kcal");
const outputGesamtKj = document.querySelector(".gesamtumsatz-kj");

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputBodySizeValue = Number(inputBodySize.value);
  const inputAgeValue = Number(inputAge.value);
  const inputWeightValue = Number(inputWeight.value.replace(",", "."));
  const inputFemaleChecked = inputFemale.checked;
  const inputMaleChecked = inputMale.checked;
  const inputSelectionValue = Number(inputSelection.value);
  let palFactor;
  let grundumsatzKcal;

  if (!/^\d{2,3}$/.test(inputBodySizeValue)) {
    document.querySelector('label[for="body_size"]>span').textContent = "*";
    return;
  }

  document.querySelector('label[for="body_size"]>span').textContent = "";

  if (!/^(?:[1-9]\d{0,2})$/.test(inputAgeValue)) {
    console.log("läuft");
    document.querySelector('label[for="age_input"]>span').textContent = "*";
    return;
  }

  document.querySelector('label[for="age_input"]>span').textContent = "";

  if (!/^\d{2,3}(?:[\.,]\d{1,2})?$/.test(inputWeightValue)) {
    document.querySelector('label[for="weight_input"]>span').textContent = "*";
    return;
  }

  document.querySelector('label[for="weight_input"]>span').textContent = "";

  switch (inputSelectionValue) {
    case 0:
      palFactor = 0.95;
      break;
    case 1:
      palFactor = 1.2;
      break;
    case 2:
      palFactor = 1.5;
      break;
    case 3:
      palFactor = 1.7;
      break;
    case 4:
      palFactor = 1.9;
      break;
    case 5:
      palFactor = 2.2;
      break;
  }

  if (inputFemaleChecked) {
    grundumsatzKcal = 655.1 + 9.6 * inputWeightValue + 1.8 * inputBodySizeValue - 4.7 * inputAgeValue;
  } else if (inputMaleChecked) {
    grundumsatzKcal = 66.47 + 13.7 * inputWeightValue + 5 * inputBodySizeValue - 6.8 * inputAgeValue;
  }

  let grundumsatzKj = grundumsatzKcal * 4.184;
  let gesamtumsatzKcal = grundumsatzKcal * palFactor;
  let gesamtumsatzKj = grundumsatzKj * palFactor;

  grundumsatzKcal = (grundumsatzKcal.toFixed(0) / 1000).toPrecision(4);
  grundumsatzKj = (grundumsatzKj.toFixed(0) / 1000).toPrecision(4);

  gesamtumsatzKcal = (gesamtumsatzKcal.toFixed(0) / 1000).toPrecision(4);
  gesamtumsatzKj = (gesamtumsatzKj.toFixed(0) / 1000).toPrecision(4);

  outputGrundKcal.textContent = grundumsatzKcal;
  outputGrundKj.textContent = grundumsatzKj;

  outputGesamtKcal.textContent = gesamtumsatzKcal;
  outputGesamtKj.textContent = gesamtumsatzKj;
});
