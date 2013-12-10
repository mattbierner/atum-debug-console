/*
 * THIS FILE IS AUTO GENERATED from 'lib/binding/accordion_binding.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var init;;
    (init = (function(ko) {
        (ko.bindingHandlers.accordion = ({
            "init": (function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                return void $(element)
                    .accordion(({
                        "collapsible": true,
                        "animate": 100,
                        "heightStyle": "content",
                        "active": false
                    }));
            }),
            "update": (function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                return void $(element)
                    .accordion("refresh");
            })
        }));
    }));
    (exports.init = init);
}))