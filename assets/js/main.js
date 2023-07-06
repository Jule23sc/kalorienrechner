"use strict";
//inputfelder
const inputBodySize = document.querySelector("#body-size");
const inputAge = document.querySelector("#age");
const inputWeight = document.querySelector("#weight");
//form
const inputForm = document.querySelector(".input-form");
//radiobuttons
const inputRadio = document.querySelector(".radio");
const inputFemale = document.querySelector("#female");
const inputMale = document.querySelector("#male");
//pulldown
const inputPulldown = document.querySelector("#pulldown");
//rechnung, veränderbar weil zukünftig noch was damit passiert
let grundumsatz;
//output
const output

//function
inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
const inputBodySizeValue = inputBodySize.value;
const inputAgeValue = inputAge.value;
const inputWeightValue = inputWeight.value;

const inputFormValue = inputForm.value;

const inputFemaleValue = inputFemale.checked;
const inputMaleValue = inputMale.checked;
//checked js prüft ob angeklickt
const inputPulldownValue = inputPulldown.value;
//console.log(inputBodySizeValue); innerhalb der func testen
//console.log(inputAgeValue);
//console.log(inputWeightValue);

if (inputFemaleValue === true){
    grundumsatz = 65.51 + (9.6*inputWeightValue) + (1.8*inputBodySizeValue) - (4.7*inputAgeValue);
} else if (inputMaleValue === true){
    grundumsatz = 66.47 + (13.7*inputWeightValue) + (5*inputBodySizeValue) - (4.7*inputAgeValue);
}
//output
});