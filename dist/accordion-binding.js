/*
 * THIS FILE IS AUTO GENERATED from 'lib/accordion-binding.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1"], (function(require, exports, ko) {
    "use strict";
    var init;
    var ko = ko;;
    (init = (function() {
        (ko.bindingHandlers.accordion = ({
            "init": (function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                $(element)
                    .accordion(({
                        "collapsible": true,
                        "animate": 100,
                        "heightStyle": "content",
                        "active": false
                    }));
            }),
            "update": (function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                $(element)
                    .accordion("refresh");
            })
        }));
    }));
    (exports.init = init);
}))