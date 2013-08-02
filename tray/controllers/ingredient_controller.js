Baking.IngredientController = Ember.ObjectController.extend({
    needs: "recipe",
    isEditing: false,

    updateAmount: function (amount) {
        this.set('amount', amount);
    },

    updateUnit: function (unit) {
        this.set('unit', unit);
    },

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
        return newQty.toString();
    }.property('controllers.recipe.multiplier', 'amount', 'unit'),

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
