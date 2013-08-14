Baking.IngredientController = Ember.ObjectController.extend({
    needs: "recipe",

    quantity: function () {
        var amount = this.get('amount');
        var unit = this.get('unit');
        var qty = new CookingQty(amount, unit);
        return qty.toString();
    }.property('amount', 'unit'),

    requiredQuantity: function () {
        var amount = this.get('amount');
        var unit = this.get('unit');
        var multiplier = this.get('controllers.recipe.multiplier');
        var newQty = (new CookingQty(amount, unit)).mul(multiplier);
        return newQty.human_repr();
    }.property('controllers.recipe.multiplier', 'amount', 'unit'),

    removeIngredient: function () {
        var ingredient = this.get('model');
        ingredient.deleteRecord();
        ingredient.save();
    },
});
