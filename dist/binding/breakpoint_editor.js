/*
 * THIS FILE IS AUTO GENERATED from 'lib/binding/breakpoint_editor.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var init;;;
    (init = (function(ko) {
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
                    return void valueAccessor()
                        .prog(cm.getValue());
                }));
                $("body")
                    .on("shown", $(element), (function() {
                        return void editor.refresh();
                    })); {
                        var wrapperElement = $(editor.getWrapperElement());
                        ko.utils.domNodeDisposal.addDisposeCallback(element, (function() {
                            return void wrapperElement.remove();
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