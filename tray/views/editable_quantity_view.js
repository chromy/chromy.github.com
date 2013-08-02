Baking.EditableQuantityView = Baking.EditableInputView.extend({
    didInsertElement: function() {
        this._super();
        this.set('value', this.get('controller.quantity'));
    },

    contentUpdate: function() {
        var value = this.get('value');
        var amount = value.match(/^\d+/)[0];
        var unit = value.match(/^\d+(\D*)/)[1];
        this.get('controller').updateAmount(amount);
        this.get('controller').updateUnit(unit);
    }.observes('value')
});
