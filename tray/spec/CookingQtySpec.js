describe("CookingQty", function() {
  it("should be defined", function() {
      CookingQty;
  });

  it("should construct", function() {
      var qt = new CookingQty(1, "g");
      expect(qt.amount).toEqual(1);
      expect(qt.unit).toEqual("g");
  });

  it("can omit unit", function() {
      var qt = new CookingQty(1);
      expect(qt.amount).toEqual(1);
      expect(qt.unit).toEqual("");
  });

  xit("can take precision", function() {
      var qt = new CookingQty(100, "", 3);
      expect(qt.precision).toEqual(3);
  });

  xit("should guess precision", function() {
      expect((new CookingQty(100).precision)).toEqual(3);
      expect((new CookingQty(1)).precision).toEqual(1);
      //expect((new CookingQty(100))).toEqual(3);
  });

  it("should multiply", function() {
      var qt = new CookingQty(1, "g");
      var newqt = qt.mul(2);
      expect(newqt.amount).toEqual(2);
      expect(newqt.unit).toEqual("g");
  });

  it("should have nice string", function() {
      var qt = new CookingQty(1, "g");
      expect(qt.toString()).toEqual("1g");
  });

  it("should round() 0 correctly", function() {
      var qt = (new CookingQty(0, "g")).round();
      expect(qt.amount).toEqual(0);
      expect(qt.unit).toEqual("g");
  });

  it("should round() integers to 2 sf", function() {
      var qt = (new CookingQty(123, "g")).round();
      expect(qt.amount).toEqual(120);
      expect(qt.unit).toEqual("g");
  });

  it("should round() decimals to 2 sf", function() {
      var qt = (new CookingQty(0.123, "g")).round();
      expect(qt.amount).toEqual(0.12);
      expect(qt.unit).toEqual("g");
  });

  it("should have nice strings", function() {
      var qt = new CookingQty(1, "g");
      expect(qt.human_repr()).toEqual("1g");
  });

  it("should have nice strings for bad decimals", function() {
      var qt = new CookingQty(1, "g").mul(0.33333);
      expect(qt.human_repr()).toEqual("0.33g");
  });

  it("should have nice strings for NaN", function() {
      var qt = new CookingQty(1/0, "g");
      expect(qt.human_repr()).toEqual("∞g");
  });


});

