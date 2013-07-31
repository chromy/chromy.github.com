describe("CookingQty", function() {
  it("should be defined", function() {
      CookingQty;
  });

  it("should construct", function() {
      var qt = new CookingQty(1, "g");
      expect(qt.amount).toEqual(1);
      expect(qt.unit).toEqual("g");
  });

  it("should multiply", function() {
      var qt = new CookingQty(1, "g");
      var newqt = qt.mul(2);
      expect(newqt.amount).toEqual(2);
      expect(newqt.unit).toEqual("g");
  });

  it("should have nice string", function() {
      var qt = new CookingQty(1, "g");
      expect(newqt.toString()).toEqual("1g");
  });
});

