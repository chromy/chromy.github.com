var WIDTH = 400;
var HEIGHT = 400;

function Controller(model) {
    this.model = model;
}

Controller.prototype.make_move = function(x, y) {
    if (this.model.is_finished() || !this.model.valid_move(x, y)) {
        return;
    }
    this.model = this.model.move(x, y);
    this.view.update(this.model);
};

Controller.prototype.set_view = function(view) {
    this.view = view;
    this.view.update(this.model);
};

function View(stage, controller) {
    this.stage = stage;
    var layer = new Kinetic.Layer();
    this.layer = layer;
    this.size = 3;
    var x_gap = stage.getWidth()/3;
    var y_gap = stage.getHeight()/3;
    add_line(this.layer, [[x_gap*1,       0], [x_gap*1, HEIGHT]]);
    add_line(this.layer, [[x_gap*2,       0], [x_gap*2, HEIGHT]]);
    add_line(this.layer, [[      0, y_gap*1], [  WIDTH, y_gap*1]]);
    add_line(this.layer, [[      0, y_gap*2], [  WIDTH, y_gap*2]]);
    function create_square(x, y) {
        return new Square(x, y, x_gap, y_gap, layer, controller);
    }
    this.squares = create_grid(this.size, this.size, create_square);
    var message_layer = new Kinetic.Layer();
    this.fade_rect = add_rect(message_layer, 0, 0, stage.getWidth(), stage.getHeight());
    this.fade_rect.setListening(false);
    this.message = new Kinetic.Text({
        x: 0,
        y: stage.getHeight()/2 - 70/2,
        height: stage.getHeight(),
        width: stage.getWidth(),
        fontSize: 70,
        fontFamily: 'sans-serif',
        fill: 'white',
        align: 'center'
    });
    this.message.setListening(false);
    message_layer.add(this.message);
    stage.add(this.layer);
    stage.add(message_layer);
}

View.prototype.update = function (model) {
    for (var x=0; x<this.size; x++) {
        for (var y=0; y<this.size; y++) {
            this.squares[x][y].show(model.at(x, y));
        }
    }
    if (model.is_finished()) {
        this.fade_rect.setFill('black');
        this.fade_rect.setOpacity(0.9);
        this.fade_rect.setListening(true);
        if (model.winner() == 'draw') {
            this.message.setText('Draw.');
        } else {
            this.message.setText(model.winner() + ' won.');
        }
    }
    this.stage.draw();
};

function Square(x, y, width, height, layer, controller) {
    this.enabled = true;
    this.controller = controller;
    this.text = new Kinetic.Text({
        x: width*x,
        y: height*y,
        width: width,
        fontSize: width,
        fontFamily: 'sans-serif',
        fill: 'black',
        align: 'center'
    });

    layer.add(this.text);
    this.rect = add_rect(layer, width*x, height*y, width, height);
    this.rect.setFill();

    var square = this;
    this.rect.on('mouseover touchstart', function() {
        if (square.enabled) {
            this.setFill("rgba(0,0,255,0.1)");
            layer.draw();
        }
    });
    this.rect.on('mouseout touchend', function() {
        this.setFill("rgba(0,0,0,0)");
        layer.draw();
    });
    this.rect.on('click', function() {
        controller.make_move(x, y);
    });
}

Square.prototype.show = function (piece) {
    this.text.setText(piece);
    this.rect.setFill("rgba(0,0,0,0)");
    this.enabled = piece == ' ';
};

function add_line(layer, points) {
  var line = new Kinetic.Line({
    points: points,
    stroke: 'black',
    strokeWidth: 5,
  });
  layer.add(line);
  return line;
}

function add_rect(layer, x, y, width, height) {
  var rect = new Kinetic.Rect({
    x: x,
    y: y,
    width: width,
    height: height,
    strokeWidth: 0
  });
  layer.add(rect);
  return rect;
}

function create_grid(n, m, f) {
    var grid = new Array(n);
    for (var x=0; x<n; x++) {
        grid[x] = new Array(m);
        for (var y=0; y<m; y++) {
            grid[x][y] = f(x, y);
        }
    }
    return grid;
}

//function Model() {
//    var grid_size = 3;
//    this.size = grid_size;
//    this.grid = create_grid(this.size, this.size, function(x, y) {return ' ';});
//    this.current_player = 'X';
//    this.turn = 0;
//}
//
//Model.prototype.next_player = function() {
//  return this.current_player == 'X' ? 'O' : 'X';
//};
//
//Model.prototype.is_finished = function(x, y) {
//  return this.winner();
//};
//
//Model.prototype._check_rows = function() {
//    for (var row=0; row<this.size; row++) {
//        var winner = this.at(row, 0);
//        for (var y=0; y<this.size; y++) {
//            if (this.at(row, y) != winner) {
//                break;
//            }
//        }
//        if (y == this.size && winner != ' ') {
//            return winner;
//        }
//    }
//    return false;
//};
//
//Model.prototype._check_cols = function() {
//    for (var col=0; col<this.size; col++) {
//        var winner = this.at(0, col);
//        for (var x=0; x<this.size; x++) {
//            if (this.at(x, col) != winner) {
//                break;
//            }
//        }
//        if (x == this.size && winner != ' ') {
//            return winner;
//        }
//    }
//    return false;
//};
//
//Model.prototype._check_diags = function() {
//    // TL to BR diagonal.
//    var winner = this.at(0, 0);
//    for (var i=0; i<this.size; i++) {
//        if (this.at(i, i) != winner) {
//            break;
//        }
//    }
//    if (i == this.size && winner != ' ') {
//        return winner;
//    }
//
//    // BL to TR diagonal.
//    winner = this.at(0, this.size-1);
//    for (i=0; i<this.size; i++) {
//        if (this.at(i, this.size-i-1) != winner) {
//            break;
//        }
//    }
//    if (i == this.size && winner != ' ') {
//        return winner;
//    }
//    return false;
//};
//
//Model.prototype.winner = function() {
//    var winner = this._check_cols() || this._check_rows() || this._check_diags();
//    if (!winner && this.turn == this.size*this.size) {
//        return 'draw';
//    }
//    return winner;
//};
//
//Model.prototype.at = function(x, y) {
//  console.assert(0 <= x && x < this.size, "x out of bounds");
//  console.assert(0 <= y && y < this.size, "y out of bounds");
//  return this.grid[x][y];
//};
//
//Model.prototype.move = function(x, y) {
//  console.assert(this.valid_move(x, y));
//
//  var next = this._clone();
//  next.grid[x][y] = this.current_player;
//  next.current_player = this.next_player();
//  next.turn++;
//  return next;
//};
//
//Model.prototype.valid_move = function(x, y) {
//  return (0 <= x && x < this.size)
//      && (0 <= y && y < this.size)
//      && (this.at(x, y) == ' ');
//};
//
//Model.prototype._clone = function() {
//  var clone = new Model();
//  clone.current_player = this.current_player;
//  clone.turn = this.turn;
//  for (var x=0; x<this.size; x++) {
//    for (var y=0; y<this.size; y++) {
//      clone.grid[x][y] = this.grid[x][y];
//    }
//  }
//  return clone;
//};
//
//var controller;
//function init() {
//    var stage = new Kinetic.Stage({
//      container: 'container',
//      width: WIDTH,
//      height: HEIGHT
//    });
//
//    var model = new Model();
//    controller = new Controller(model);
//    var view = new View(stage, controller);
//    controller.set_view(view);
//}
//init();

function Model() {
    this.recipe_trays = [];
    this.user_trays = [];
}

Model.prototype.add_user_tray = function(tray) {
    this.user_trays.push(tray);
};

Model.prototype.add_recipe_tray = function(tray) {
    this.recipe_trays.push(tray);
};

Model.prototype.ratio = function() {
    var user_area = 0;
    this.user_trays.forEach(function (tray) { user_area += tray.area(); });
    var recipe_area = 0;
    this.recipe_trays.forEach(function (tray) { recipe_area += tray.area(); });
    return user_area / recipe_area;
};

function RectangleTray(width, height) {
    this.width = width;
    this.height = height;
}

RectangleTray.prototype.area = function() {
  return this.width * this.height;
};

function CircleTray(radius) {
    this.radius = radius;
}

CircleTray.prototype.area = function() {
  return Math.PI * Math.pow(this.radius, 2);
};

