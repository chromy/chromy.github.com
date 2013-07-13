Baking.RecipeController = Ember.ArrayController.extend({
    recipeServings: 1,
    userServings: 2,
    multiplier: function () {
        return  this.get('userServings') / this.get('recipeServings');
    }.property('recipeServings', 'userServings'),
  createIngredient: function () {
    // Get the ingredient name set by the "New Name" text field
    var name = this.get('newName');
    if (!name.trim()) { return; }

    // Create the new Ingredient model
    var ingredient = Baking.Ingredient.createRecord({
      name: name,
      quantity: 0,
      unit: '',
    });

    // Clear the "New Name" text field
    this.set('newName', '');

    // Save the new model
    ingredient.save();
  }
});
