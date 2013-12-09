/*
 * THIS FILE IS AUTO GENERATED from 'lib/binding/breakpointEditor.kep'
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
                    "lineNumbers": false
                }));
                editor.on("change", (function(cm) {
                    allBindings()
                        .prog(cm.getValue());
                }));
                (element.editor = editor);
                if (allBindings()
                    .value()) editor.setValue(allBindings()
                    .prog());
                editor.refresh();
                var wrapperElement = $(editor.getWrapperElement());
                ko.utils.domNodeDisposal.addDisposeCallback(element, (function() {
                    wrapperElement.remove();
                }));
            }),
            "update": (function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                if (element.editor) element.editor.refresh();
            })
        }));
    }));
    (exports.init = init);
}))