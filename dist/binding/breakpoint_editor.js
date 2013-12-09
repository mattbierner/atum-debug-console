/*
 * THIS FILE IS AUTO GENERATED from 'lib/binding/breakpoint_editor.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1"], (function(require, exports, ko) {
    "use strict";
    var init;
    var ko = ko;;;
    (init = (function() {
        (ko.bindingHandlers.breakpointEditor = ({
            "init": (function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                var editor = CodeMirror(element, ({
                    "mode": "javascript",
                    "lineNumbers": true,
                    "value": (valueAccessor()
                        .prog() || ""),
                    "readOnly": false,
                    "viewportMargin": Infinity
                }));
                editor.on("change", (function(cm) {
                    valueAccessor()
                        .prog(cm.getValue());
                }));
                $("body")
                    .on("shown", $(element), (function() {
                        editor.refresh();
                    })); {
                        var wrapperElement = $(editor.getWrapperElement());
                        ko.utils.domNodeDisposal.addDisposeCallback(element, (function() {
                            wrapperElement.remove();
                        }));
                }
            }),
            "update": (function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                if (!element.editor) return;
                element.editor.refresh();
            })
        }));
    }));
    (exports.init = init);
}))