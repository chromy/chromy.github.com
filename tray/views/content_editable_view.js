Baking.ContentEditableView = Ember.View.extend({
    tagName: 'div',
    attributeBindings: ['contenteditable'],

    // Variables:
    editable: false,
    isUserTyping: false,
    plaintext: true,

    // Properties:
    contenteditable: (function() {
        var editable = this.get('editable');
        return editable ? 'true' : undefined;
    }).property('editable'),

    // Observers:
    valueObserver: (function() {
        if (!this.get('isUserTyping')) {
            return this.setContent();
        }
    }).observes('value'),

    // Events:
    didInsertElement: function() {
        return this.setContent();
    },

    focusOut: function() {
        return this.set('isUserTyping', false);
    },

    keyDown: function(event) {
        this.pressedKey(event);
        if (!event.metaKey) {
            return this.set('isUserTyping', true);
        }
    },

    keyUp: function(event) {
        var content;
        if (this.get('plaintext')) {
            content = this.$().text();
        } else {
            content = this.$().html();
        }
        // Browsers insert a <br> when users deleate all content. 
        if (this.$().html() == '<br>') {
            this.$().html('');
            content = '';
        }
        return this.set('value', content);
    },

    pressedKey: function(event) {
    },

    setContent: function() {
        return this.$().html(this.get('value'));
    }
});
