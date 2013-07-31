Ember.Handlebars.helper('formatQuantity', function(amount, unit) {
    return (new CookingQuantity(amount, unit)).toString();
});
