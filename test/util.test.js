const { add } = require("../util/util");

describe("Add", () => {
  describe("Success", () => {
    it("Should return the sum of the two passed arguments", () => {
      expect(add(2, 2)).toBe(4);
    });
  });
});
