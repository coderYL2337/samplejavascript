function calculateTotal(items) {
  return items.reduce((sum, item) => sum + (item.price || 0), 0);
}

module.exports = { calculateTotal };

// tests/utils.test.js
const { calculateTotal } = require("../src/utils");

describe("Utils", () => {
  describe("calculateTotal", () => {
    test("should calculate total of item prices", () => {
      const items = [
        { name: "Item 1", price: 10 },
        { name: "Item 2", price: 20 },
      ];
      expect(calculateTotal(items)).toBe(30);
    });

    test("should handle empty array", () => {
      expect(calculateTotal([])).toBe(0);
    });

    test("should handle items without price", () => {
      const items = [{ name: "Item 1" }, { name: "Item 2", price: 20 }];
      expect(calculateTotal(items)).toBe(20);
    });
  });
});
