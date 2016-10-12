Baking.Router.map(function () {
    this.resource('index', { path: '/' });
    this.resource('recipe', { path: '/recipe/:recipe_id' });
});

Baking.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('recipe', Baking.Recipe.find(1));
    }
});

Baking.RecipeRoute = Ember.Route.extend({
  model: function (prams) {
    var recipe = Baking.Recipe.find(prams.recipe_id);
    return recipe;
  }
});

