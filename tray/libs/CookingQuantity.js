(function() {

    function CookingQty(amount, unit) {
        this.amount = amount;
        this.unit = unit;
    }

    CookingQty.prototype.mul = function(mult) {
        return new CookingQty(this.amount*mult, this.unit);
    };

    CookingQty.prototype.toString = function() {
        return "" + this.amount + this.unit;
    };

    // expose CookingQty to the global object
    window.CookingQty = CookingQty;
}) ();
