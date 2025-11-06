export function isValidCreditCardNumber(cardNumber) {
  let sum = 0;
  const numArray = cardNumber.split("").map(Number);

  for (let i = numArray.length - 1; i >= 0; i--) {
    let digit = numArray[i];

    if ((numArray.length - i) % 2 === 0) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
  }

  return sum % 10 === 0;
}
