/*
 * THIS FILE IS AUTO GENERATED from 'lib/console.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1", "atum_debug_console/model/console_view_model",
    "atum_debug_console/object_explorer", "atum_debug_console/accordion-binding",
    "atum_debug_console/editor/interactive"
], (function(require, exports, ko, atum_debug_model, object_explorer, accortion_binding, interactive) {
    "use strict";;
    var ko = ko,
        atum_debug_model = atum_debug_model,
        object_explorer = object_explorer,
        accortion_binding = accortion_binding,
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
        "gutters": ["breakpoints", "CodeMirror-linenumbers"]
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
                                        var lh = cm.setGutterMarker(n, "breakpoints", null);
                                        return model.removeBreakpoint(cm.doc, lh);
                                    }
                                })
                                .call(this) : (function() {
                                    {
                                        var lh = cm.setGutterMarker(n, "breakpoints",
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
    accortion_binding.init();
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
            evalButton.button("option", "disabled", debugging);
            debugButton.button("option", "disabled", debugging);
            stopButton.button("option", "disabled", !debugging);
            runButton.button("option", "disabled", !debugging);
            stepButton.button("option", "disabled", !debugging);
            stepOverButton.button("option", "disabled", !debugging);
            stepIntoButton.button("option", "disabled", !debugging);
            stepOutButton.button("option", "disabled", !debugging);
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
        stopButton.button(({
            "disabled": true
        }))
            .click((function(e) {
                model.stop();
            }));
        runButton.button(({
            "disabled": true
        }))
            .click((function(e) {
                model.run();
            }));
        stepButton.button(({
            "disabled": true
        }))
            .click((function(e) {
                model.stepOver();
            }));
        stepIntoButton.button(({
            "disabled": true
        }))
            .click((function(e) {
                model.stepInto();
            }));
        stepOutButton.button(({
            "disabled": true
        }))
            .click((function(e) {
                model.stepOut();
            }));
    }));
}))