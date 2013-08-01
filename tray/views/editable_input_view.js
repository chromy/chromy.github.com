var NEWLINE_CODE = 13;

Baking.EditableInputView = Baking.ContentEditableView.extend({
    classNames: ['inline-editable'],
    pressedKey: function(event) {

        console.log(event);
        var char = String.fromCharCode(event.keyCode);
        console.log(event.keyCode, char);
        if (event.keyCode == NEWLINE_CODE) {
            event.preventDefault(); //event.stopPropagation();
        }
    },
});
