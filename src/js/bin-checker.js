const paymentSystems = [
  { name: "Visa", prefix: ["^4"] },
  {
    name: "MasterCard",
    prefix: [
      "^(51|52|53|54|55)",
      "^222[1-9]",
      "^22[3-9][0-9]",
      "^2[3-6][0-9]{2}",
      "^27[0-1][0-9]",
      "^2720$",
    ],
  },
  { name: "American Express", prefix: ["^34", "^37"] },
  { name: "Discover", prefix: ["^6011", "^622126-622925", "^644-649", "^65"] },
  { name: "JCB", prefix: ["^35"] },
  { name: "China UnionPay", prefix: ["^62"] },
  { name: "Mir", prefix: ["^220[0-4]"] },
];

export function detectPaymentSystem(cardNumber) {
  for (const system of paymentSystems) {
    for (const regex of system.prefix) {
      if (new RegExp(regex).test(cardNumber)) {
        return system.name;
      }
    }
  }
  return null;
}
