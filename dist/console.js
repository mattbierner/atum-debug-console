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
    var doc = cm.doc;
    cm.on("gutterClick", (function() {
        {
            var makeMarker = (function() {
                var marker = document.createElement("div");
                (marker.className = "breakpoint");
                return marker;
            });
            return (function(cm, n) {
                var info = cm.lineInfo(n);
                cm.setGutterMarker(n, "breakpoints", (info.gutterMarkers ? null : makeMarker()));
            });
        }
    })());
    cm.on("beforeChange", (function(cm, change) {
        if ((model.debug() && !model.debug()
            .debug.complete)) return change.cancel();
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
        model.debug.subscribe((function(x) {
            var disable = (!x || x.debug.complete);
            evalButton.button("option", "disabled", !disable);
            debugButton.button("option", "disabled", !disable);
            stopButton.button("option", "disabled", disable);
            runButton.button("option", "disabled", disable);
            stepButton.button("option", "disabled", disable);
            stepOverButton.button("option", "disabled", disable);
            stepIntoButton.button("option", "disabled", disable);
            stepOutButton.button("option", "disabled", disable);
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
                model.beginDebugging(doc.getValue(), out.write, errorOut.write);
                model.finish();
            }));
        debugButton.button()
            .click((function() {
                return model.beginDebugging(doc.getValue(), out.write, errorOut.write);
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