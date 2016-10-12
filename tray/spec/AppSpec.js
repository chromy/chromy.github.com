describe("RectangleTray", function() {
  var tray;

  beforeEach(function() {
    tray = Baking.RectangleTray.create({
        width: 3,
        height: 2
    });
  });

  it("should have area", function() {
    console.log(tray);
    expect(tray.get('area')).toEqual(6);
  });
});

describe("Trays", function() {
  var tray;

  beforeEach(function() {
    trays = Baking.RectangleTray.create({
        width: 3,
        height: 2
    });
  });

  it("should have area", function() {
    console.log(tray);
    expect(tray.get('area')).toEqual(6);
  });
});
