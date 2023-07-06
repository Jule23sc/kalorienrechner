"use strict";

const inputForm = document.body.querySelector(".input_form");

const userBodyHeight = document.body.querySelector(".body_hight");
const userAge = document.body.querySelector(".user_age");
const userBodyWeight = document.body.querySelector(".user_body_weight");

const userSexFemale = document.body.querySelector("#female");
const userSexMale = document.body.querySelector("#male");
const inputSelection = number(document.body.querySelector("#pulldown"));


const bodyHeightValue = userBodyHeight.value;
const ageValue = userAge.value;
const bodyWeightValue = userBodyWeight.value;

const sexFemaleValue = userSexFemale.value;
const sexMaleValue = userSexMale.value;
const selectionValue = inputSelection.value;

let grundUmsatzKcal;
let gesamtUmsatzKcal;
let grundUmsatzKj;
let gesamtUmsatzKj;

inputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (sexFemaleValue === true) {
        const grundUmsatzFemale = 655.1 + 9.6 * bodyWeightValue + 1.8 * bodyHeightValue - 4.7 * ageValue;
        grundUmsatzKcal = grundUmsatzFemale;
        gesamtUmsatzKcal = grundUmsatzKcal * selectionValue;
        grundUmsatzKj = grundUmsatzKcal * 4.184;
        gesamtUmsatzKj = gesamtUmsatzKcal * 4.184;
    }
    else if (sexMaleValue === true) {
        const grundUmsatzMale = 66.47 + 13.7 * bodyWeightValue + 5 * bodyHeightValue - 6.8 * ageValue;
        grundUmsatzKcal = grundUmsatzMale;
        gesamtUmsatzKcal = grundUmsatzKcal * selectionValue;
        grundUmsatzKj = grundUmsatzKcal * 4.184;
        gesamtUmsatzKj = gesamtUmsatzKcal * 4.184;
    }

})

