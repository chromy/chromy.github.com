Baking.EditQuantityView = Ember.TextField.extend({
    classNames: ['edit'],

    change: function(evt) {
        var qty = new Qty(this.get('value'));
        this.set('amount', qty.scalar);
        this.set('unit', qty.units());
    },

    insertNewline: function () {
        this.get('controller').acceptChanges();
    },

    focusOut: function () {
        //this.get('controller').acceptChanges();
    },

    didInsertElement: function () {
        var qty = this.get('controller.quantity');
        this.set('value', qty.toString());
        //this.$().focus();
    }
});
