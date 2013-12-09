/*
 * THIS FILE IS AUTO GENERATED from 'lib/binding/popover-binding.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1"], (function(require, exports, ko) {
    "use strict";
    var init;
    var ko = ko;;;;
    var addHiddenDivToBody = (function() {
        var div = document.createElement("div");
        (div.style.display = "none");
        document.body.appendChild(div);
        return div;
    });
    (init = (function() {
        (ko.bindingHandlers.popover = ({
            "init": (function(element, valueAccessor, allBindingsAccessor, viewModel) {
                var options = ko.utils.unwrapObservable(valueAccessor());
                var temp;
                if (options.template) {
                    (temp = addHiddenDivToBody());
                    ko.renderTemplate(options.template, viewModel, ({}), temp);
                    delete options.template;
                }
                var p = $(element)
                    .popover($.extend(({}), options));
                if (options.css) {
                    p.data("bs.popover")
                        .tip()
                        .addClass(options.css);
                }
                if (temp) {
                    p.on("shown.bs.popover", (function(e) {
                        $(this)
                            .data("bs.popover")
                            .tip()
                            .find(".popover-content")
                            .append($(temp)
                                .contents());
                        $(this)
                            .data("bs.popover")
                            .tip()
                            .trigger(jQuery.Event("shown"));
                    }))
                        .on("hidden.bs.popover", (function(e) {
                            $(temp)
                                .append($(this)
                                    .data("bs.popover")
                                    .tip()
                                    .find(".popover-content")
                                    .contents());
                        }));
                }
                p.popover("show");
                ko.utils.domNodeDisposal.addDisposeCallback(element, (function() {
                    $(element)
                        .popover("destroy");
                }));
            })
        }));
    }));
    (exports.init = init);
}))