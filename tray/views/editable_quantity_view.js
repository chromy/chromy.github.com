Baking.EditableQuantityView = Baking.EditableInputView.extend({
    didInsertElement: function() {
        this._super();
        var me = this;
        if (this.get("controller.model.isLoaded")) {
            me.set('value', me.get('controller.quantity'));
            me.addObserver('value', me.contentUpdate);
        }
        this.get("controller.model").on("didLoad", function() {
            me.set('value', me.get('controller.quantity'));
            me.addObserver('value', me.contentUpdate);
        });
    },

    contentUpdate: function() {
        var value = this.get('value');
        var match = value.match(/(\d+[.\/]?\d*)(\D*)/);
        var amount = match[1];
        var unit = match[2];
        // TODO: Don't use eval
        amount = eval(amount);
        this.set('controller.amount', amount);
        this.set('controller.unit', unit);
    }
});
