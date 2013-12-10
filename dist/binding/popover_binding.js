/*
 * THIS FILE IS AUTO GENERATED from 'lib/binding/popover_binding.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var init;;;;
    var addHiddenDivToBody = (function() {
        var div = document.createElement("div");
        (div.style.display = "none");
        document.body.appendChild(div);
        return div;
    });
    (init = (function(ko) {
        (ko.bindingHandlers.popover = ({
            "init": (function(element, valueAccessor, allBindingsAccessor, viewModel) {
                var options = ko.utils.unwrapObservable(valueAccessor());
                var temp;
                if (options.template) {
                    (temp = addHiddenDivToBody());
                    ko.renderTemplate(options.template, viewModel, ({}), temp);
                    delete options.template;
                    (options.html = true);
                    (options.content = (function() {
                        return $(temp)
                            .html();
                    }));
                }
                var p = $(element)
                    .popover($.extend(({
                        "placement": "right"
                    }), options));
                p.on("shown.bs.popover", (function(e) {
                    $(".popover-marker")
                        .each((function() {
                            if ((this && !$(this)
                                .is(p))) $(this)
                                .popover("hide");
                        }));
                }));
                if (options.css) {
                    p.data("bs.popover")
                        .tip()
                        .addClass(options.css);
                }
                if (temp) {
                    p.on("shown.bs.popover", (function(e) {
                        $(this)
                            .addClass("enabled-popover");
                        $(this)
                            .data("bs.popover")
                            .tip()
                            .find(".popover-content")
                            .empty()
                            .append($(temp)
                                .contents());
                        $(this)
                            .data("bs.popover")
                            .tip()
                            .trigger(jQuery.Event("shown"));
                    }))
                        .on("hidden.bs.popover", (function(e) {
                            $(this)
                                .removeClass("enabled-popover");
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