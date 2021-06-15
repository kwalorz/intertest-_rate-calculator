"use strict";

const btn = document.querySelector("#generate_quote");
const creditScore = document.querySelector("#credit_score");
const vehicleValue = document.querySelector("#vehicle-value");
const downPayment = document.querySelector("#down_payment");
const tradeIn = document.querySelector("#trade");
const leaseLength = document.querySelector("#lease_length");
const quote = document.querySelector(".payment_quote");
const [vehicleErr, downPaymentErr, tradeInErr] =
  document.querySelectorAll(".error-message");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let interestRate;
  const errMessage =
    "*The value you have entered is invalid. Must contain no special characters, letters, and be a positive number";

  if (
    vehicleValue.value < 0 ||
    typeof /^\d*$/.test(vehicleValue.value) === "NaN"
  ) {
    vehicleErr.style.display = "block";
    vehicleErr.textContent = `${errMessage}`;
  }

  if (creditScore.value === "300-579") interestRate = 1.1;
  if (creditScore.value === "580-699") interestRate = 1.08;
  if (creditScore.value === "700-749") interestRate = 1.06;
  if (creditScore.value === "750-850") interestRate = 1.04;

  return (quote.textContent = `$${Math.trunc(
    ((vehicleValue.value - downPayment.value - tradeIn.value) * interestRate) /
      leaseLength.value
  )}`);
});
