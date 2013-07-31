Baking.EditNumberView = Ember.TextField.extend({
  classNames: ['inline-editable'],
  classNameBindings: ['isValid::error'],

  isValid: function(){
    console.log("value", this.get('value'));
    return !isNaN(this.get('value'));
  }.property('value'),

  insertNewline: function () {
    this.get('controller').acceptChanges();
  },

  focusOut: function () {
    this.get('controller').acceptChanges();
  },

  didInsertElement: function () {
    this.$().focus();
  }
});
