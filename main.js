"use strict";

const tips = document.querySelector(".select-container");


const splitBill = tip => {
    tip = +tip * 0.01;
    const bill = +document.getElementsByName("bill")[0].value;
    const people = +document.getElementsByName("people")[0].value;
    if (people === 0 || people === "") {
        document.querySelector(".error-message").style.display = "block";
        document.querySelector(".input-people > input").style.border = "solid 1px red";
        console.log(500 + 500);
      } else {
          document.querySelector(".error-message").style.display = "none";
          document.querySelector(".input-people > input").style.border = "none";
          document.querySelector(".result-tip").innerHTML = `$${
              (bill * tip) / people
          }`;
          document.querySelector(".result-total").innerHTML = `$${
              (bill + bill * tip) / people
          }`;
      }
}






function resetInput() {
    document.querySelectorAll("input").forEach((input) => {
        input.value = "";
    });
    document
    .querySelectorAll(".result")
    .forEach((elem) => (elem.innerHTML = "$0.00"));
    document.querySelector(".error-message").style.display = "none";
    // document.querySelectorAll("input").forEach(elem=>elem.style.border = "none");
}
