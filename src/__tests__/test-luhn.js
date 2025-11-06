/* global describe, test, expect */
import { isValidCreditCardNumber } from "../js/luhn";

describe("Тестирование Luhn", () => {
  test("Верный номер", () => {
    expect(isValidCreditCardNumber("4532015112819914")).toBe(true);
  });

  test("Неверный номер", () => {
    expect(isValidCreditCardNumber("4532015112819915")).toBe(false);
  });
});
