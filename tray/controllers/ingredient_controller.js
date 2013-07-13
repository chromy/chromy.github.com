Baking.IngredientController = Ember.ObjectController.extend({
    needs: "recipe",
    isEditing: false,

    requiredQuantity: function () {
        var quantity = this.get('quantity');
        var multiplier = this.get('controllers.recipe.multiplier');
        return quantity * multiplier;
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
