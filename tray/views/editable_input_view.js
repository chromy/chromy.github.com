var NEWLINE_CODE = 13;

Baking.EditableInputView = Baking.ContentEditableView.extend({
    classNames: ['inline-editable'],
    pressedKey: function(event) {
        var char = String.fromCharCode(event.keyCode);
        if (event.keyCode == NEWLINE_CODE) {
            event.preventDefault(); //event.stopPropagation();
        }
    },
});
