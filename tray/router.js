Baking.Router.map(function () {
  this.resource('recipe', { path: '/' });
});

Baking.RecipeRoute = Ember.Route.extend({
  model: function () {
    return Baking.Ingredient.find();
  }
});

