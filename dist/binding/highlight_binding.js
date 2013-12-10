/*
 * THIS FILE IS AUTO GENERATED from 'lib/binding/highlight_binding.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var init;;;
    var DEFAULTS = ({
        "mode": "javascript",
        "lineNumbers": false,
        "readOnly": true
    });
    (init = (function(ko) {
        (ko.bindingHandlers.highlight = ({
            "init": (function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                var value = valueAccessor();
                var options = $.extend(false, ({
                    "value": value
                }), DEFAULTS);
                var editor = CodeMirror(element, options);
                ko.utils.domNodeDisposal.addDisposeCallback(element, (function() {
                        {
                            var wrapperElement = $(editor.getWrapperElement());
                            return (function() {
                                return void wrapperElement.remove();
                            });
                        }
                    })
                    .call(this));
            })
        }));
    }));
    (exports.init = init);
}))