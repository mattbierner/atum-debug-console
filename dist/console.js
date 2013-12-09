/*
 * THIS FILE IS AUTO GENERATED from 'lib/console.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1", "atum_debug_console/binding/accordion-binding",
    "atum_debug_console/binding/breakpoint_editor", "atum_debug_console/binding/popover-binding",
    "atum_debug_console/model/console_view_model", "atum_debug_console/object_explorer",
    "atum_debug_console/editor/interactive"
], (function(require, exports, ko, accordion_binding, breakpoint_editor, popover_binding, atum_debug_model,
    object_explorer, interactive) {
    "use strict";;
    var ko = ko,
        accordion_binding = accordion_binding,
        breakpoint_editor = breakpoint_editor,
        popover_binding = popover_binding,
        atum_debug_model = atum_debug_model,
        object_explorer = object_explorer,
        interactive = interactive;;;;
    var model;
    var out = ({
        "write": (function(x, ctx) {
            model.pushResult(x, ctx, false);
            $("#output > ul")
                .scrollTop($("#output > ul")[0].scrollHeight);
        })
    });
    var errorOut = ({
        "write": (function(x, ctx) {
            model.pushResult(x, ctx, true);
            $("#output > ul")
                .scrollTop($("#output > ul")[0].scrollHeight);
        })
    });
    var cm = CodeMirror(document.getElementById("input"), ({
        "mode": "javascript",
        "lineNumbers": true,
        "gutters": ["editor-breakpoints", "CodeMirror-linenumbers"]
    }));
    cm.on("gutterClick", (function() {
            {
                var makeMarker = (function() {
                    var marker = document.createElement("div");
                    (marker.className = "editor-breakpoint");
                    return marker;
                });
                return (function(cm, n) {
                    return (function() {
                        {
                            var info = cm.lineInfo(n);
                            return (info.gutterMarkers ? (function() {
                                    {
                                        var lh = cm.setGutterMarker(n, "editor-breakpoints",
                                            null);
                                        return model.removeBreakpoint(cm.doc, lh);
                                    }
                                })
                                .call(this) : (function() {
                                    {
                                        var lh = cm.setGutterMarker(n, "editor-breakpoints",
                                            makeMarker());
                                        return model.addBreakpoint(cm.doc, lh);
                                    }
                                })
                                .call(this));
                        }
                    })
                        .call(this);
                });
            }
        })
        .call(this));
    cm.on("beforeChange", (function(cm, change) {
        if (model.debugging()) return change.cancel();
    }));
    cm.on("change", (function(cm, change) {
        model.updateBreakpoints();
    }));
    accordion_binding.init();
    popover_binding.init();
    breakpoint_editor.init();
    (model = new(atum_debug_model.ConsoleViewModel)());
    ko.applyBindings(model);
    model.location.subscribe((function(current) {
        if ((current && current.start)) cm.removeLineClass((current.start.line - 1), "background",
            "active-line");
    }), null, "beforeChange");
    model.location.subscribe((function(x) {
        if ((x && x.start)) cm.addLineClass((x.start.line - 1), "background", "active-line");
    }));
    $((function() {
        interactive.create(document.getElementById("output-interactive-textarea"), model);
        var evalButton = $("button#eval-button"),
            debugButton = $("button#debug-button"),
            stopButton = $("button#stop-button"),
            runButton = $("button#run-button"),
            stepButton = $("button#step-button"),
            stepOutButton = $("button#step-out-button"),
            stepIntoButton = $("button#step-into-button"),
            stepOverButton = $("button#step-over-button");
        $("#container")
            .layout();
        $("#left-panel")
            .tabs();
        $("#right-panel")
            .tabs();
        model.debugging.subscribe((function(debugging) {
            evalButton.prop("disabled", debugging);
            debugButton.prop("disabled", debugging);
            stopButton.prop("disabled", !debugging);
            runButton.prop("disabled", !debugging);
            stepButton.prop("disabled", !debugging);
            stepOverButton.prop("disabled", !debugging);
            stepIntoButton.prop("disabled", !debugging);
            stepOutButton.prop("disabled", !debugging);
        }));
        $("#output > ul")
            .on("accordionactivate", ".object-browser", (function(event, ui) {
                return $("#output > ul")
                    .scrollTop($(this)
                        .offset()
                        .top);
            }));
        evalButton.button()
            .click((function() {
                model.beginDebugging(cm.doc.getValue(), out.write, errorOut.write);
                model.finish();
            }));
        debugButton.button()
            .click((function() {
                return model.beginDebugging(cm.doc.getValue(), out.write, errorOut.write);
            }));
        stopButton.button()
            .prop("disabled", true)
            .click((function(e) {
                model.stop();
            }));
        runButton.button()
            .prop("disabled", true)
            .click((function(e) {
                model.run();
            }));
        stepButton.button()
            .prop("disabled", true)
            .click((function(e) {
                model.stepOver();
            }));
        stepIntoButton.button()
            .prop("disabled", true)
            .click((function(e) {
                model.stepInto();
            }));
        stepOutButton.button()
            .prop("disabled", true)
            .click((function(e) {
                model.stepOut();
            }));
    }));
}))