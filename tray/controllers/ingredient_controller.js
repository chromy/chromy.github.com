Baking.IngredientController = Ember.ObjectController.extend({
    needs: "recipe",
    isEditing: false,

    quantity: function () {
        var amount = this.get('amount');
        var unit = this.get('unit');
        try {
            return new Qty(amount+unit);
        } catch (err) {
            return new Qty('0');
        }
    }.property('amount', 'unit'),

    requiredQuantity: function () {
        var quantity = this.get('quantity');
        var multiplier = this.get('controllers.recipe.multiplier');
        var rquantity = quantity.mul(multiplier);
        rquantity = rquantity.toString(2);
        return rquantity;
    }.property('controllers.recipe.multiplier', 'quantity'),

    editIngredient: function () {
        this.set('isEditing', true);
    },
    removeIngredient: function () {
        var ingredient = this.get('model');
        ingredient.deleteRecord();
        ingredient.save();
    },
    acceptChanges: function () {
        this.set('isEditing', false);
        this.get('model').save();
    },
});
