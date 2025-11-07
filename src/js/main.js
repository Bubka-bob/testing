import { isValidCreditCardNumber } from "./luhn";
import { detectPaymentSystem } from "./bin-checker";

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("credit-card-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const cardInput = document.querySelector("#card-number");
      const resultDiv = document.querySelector("#result");
      const logos = document.querySelectorAll("#payment-system-logos img");

      const cardNumber = cardInput.value.replace(/\s/g, "");

      if (cardNumber.trim() === "") {
        resultDiv.textContent = "Введите номер карты.";
        resultDiv.classList.remove("valid");
        resultDiv.classList.add("invalid");
        logos.forEach((logo) => logo.classList.remove("active"));
      } else if (isValidCreditCardNumber(cardNumber)) {
        const detectedSystem = detectPaymentSystem(cardNumber);
        resultDiv.textContent = `Карточка действительна. Система: ${detectedSystem}`;
        resultDiv.classList.remove("invalid");
        resultDiv.classList.add("valid");
        logos.forEach((logo) => {
          logo.classList.remove("active");
          if (logo.alt === detectedSystem) {
            logo.classList.add("active");
          }
        });
      } else {
        resultDiv.textContent = "Ошибка: Неверный номер карты.";
        resultDiv.classList.remove("valid");
        resultDiv.classList.add("invalid");
        logos.forEach((logo) => logo.classList.remove("active"));
      }
    });
});
