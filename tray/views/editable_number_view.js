Baking.EditableNumberView = Baking.EditableInputView.extend({
    classNameBindings: ['isValid::invalid'],

    isValid: (function() {
        var value = this.get('value');
        return !isNaN(value);
    }).property('value'),
});
