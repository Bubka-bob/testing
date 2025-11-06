/* global describe, test, expect */
import { detectPaymentSystem } from "../js/bin-checker";

describe("Определение платежной системы", () => {
  test("Visa", () => {
    expect(detectPaymentSystem("4532015112819914")).toEqual("Visa");
  });

  test("MasterCard", () => {
    expect(detectPaymentSystem("5555555555554444")).toEqual("MasterCard");
  });

  test("Мир", () => {
    expect(detectPaymentSystem("2200123456789012")).toEqual("Mir");
  });

  test("Обнаружение American Express", () => {
    expect(detectPaymentSystem("378282246310005")).toEqual("American Express");
  });

  test("Обнаружение Discover", () => {
    expect(detectPaymentSystem("6011111111111117")).toEqual("Discover");
  });

  test("Обнаружение JCB", () => {
    expect(detectPaymentSystem("3566002020360505")).toEqual("JCB");
  });

  test("Отсутствие совпадения с известными системами", () => {
    expect(detectPaymentSystem("9999999999999999")).toBeNull();
  });
});
