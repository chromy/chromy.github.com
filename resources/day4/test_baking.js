baking_tests = new Tests();

baking_tests.add(function circle_tray_should_have_area() {
    var tray = new CircleTray(2);
    assert(tray.area() > 12 && tray.area() < 13);
});

baking_tests.add(function circle_tray_should_have_area() {
    var tray = new RectangleTray(3, 5);
    assert(tray.area() == 15);
});

baking_tests.add(function model_should_calculate_ratio() {
    var model = new Model();
    model.add_user_tray(new RectangleTray(1, 1));
    model.add_recipe_tray(new RectangleTray(2, 1));
    assert(model.ratio() == 0.5);
});

baking_tests.add(function model_should_calculate_ratio_multiple() {
    var model = new Model();
    model.add_user_tray(new RectangleTray(1, 2));
    model.add_user_tray(new RectangleTray(1, 2));
    model.add_recipe_tray(new RectangleTray(1, 1));
    model.add_recipe_tray(new RectangleTray(1, 1));
    assert(model.ratio() == 2);
});

//baking_tests.add(function failling() {
//    assert(false);
//});
//
//baking_tests.add(function error() {
//    not_defined;
//});

baking_tests.run();
