(function() {

    function CookingQty(amount, unit, precision) {
        this.amount = (typeof amount === 'undefined') ? 0 : amount;
        this.unit = (typeof unit === 'undefined') ? "" : unit;
        this.precision = (typeof precision === 'undefined') ? 1 : precision;
    }

    CookingQty.round_number = function(num, sig) {
        if (num === 0) { return 0; }
         var mult = Math.pow(10, sig - Math.floor(Math.log(num) / Math.LN10) - 1);
         return Math.round(num * mult) / mult;
    };

    CookingQty.prototype.mul = function(mult) {
        return new CookingQty(this.amount*mult, this.unit);
    };

    CookingQty.prototype.toString = function() {
        return "" + this.amount + this.unit;
    };

    CookingQty.prototype.round = function() {
        var new_amount = CookingQty.round_number(this.amount, 2);
        return new CookingQty(new_amount, this.unit, this.precision);
    };

    CookingQty.prototype.human_repr = function() {
        if (!isFinite(this.amount) && !isNaN(this.amount)) {
            return "∞" + this.unit;
        } else if (isNaN(this.amount)) {
            return "-";
        }
        return this.round().toString();
    };

    // expose CookingQty to the global object
    window.CookingQty = CookingQty;
}) ();
