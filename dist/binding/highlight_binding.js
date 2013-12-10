/*
 * THIS FILE IS AUTO GENERATED from 'lib/binding/highlight_binding.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1"], (function(require, exports, ko) {
    "use strict";
    var init;
    var ko = ko;;;
    (init = (function() {
        (ko.bindingHandlers.highlight = ({
            "init": (function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                var editor = CodeMirror(element, ({
                    "mode": "javascript",
                    "lineNumbers": false,
                    "value": (valueAccessor() || ""),
                    "readOnly": true
                }));
                editor.on("change", (function(cm) {
                    valueAccessor()
                        .prog(cm.getValue());
                })); {
                    var wrapperElement = $(editor.getWrapperElement());
                    ko.utils.domNodeDisposal.addDisposeCallback(element, (function() {
                        wrapperElement.remove();
                    }));
                }
            })
        }));
    }));
    (exports.init = init);
}))