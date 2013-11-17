/*
 * THIS FILE IS AUTO GENERATED from 'lib/console.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1", "sheut/debug", "sheut/step", "sheut/run", "sheut/operations/evaluation", "atum_debug_console/model"], (function(require, exports, ko, debug, step, run, evaluate, atum_debug_model) {
    "use strict";;
    var ko = ko,
        debug = debug,
        step = step,
        run = run,
        evaluate = evaluate,
        atum_debug_model = atum_debug_model;;;;
    var id = (function(x) {
        return x;
    });
    var model;
    var updateAccordions = (function() {
        return $(".object-browser").accordion(({
            "collapsible": true,
            "animate": 100,
            "heightStyle": "content"
        }));
    });
    var out = ({
        "write": (function(x, ctx) {
            model.push(x, ctx, false);
            updateAccordions();
            $("#output > ul").scrollTop($("#output > ul")[0].scrollHeight);
        })
    });
    var errorOut = ({
        "write": (function(x, ctx) {
            model.push(x, ctx, true);
            updateAccordions();
            $("#output > ul").scrollTop($("#output > ul")[0].scrollHeight);
        })
    });
    var cm = CodeMirror(document.getElementById("input"), ({
        "mode": "javascript",
        "lineNumbers": true
    }));
    var doc = cm.doc;
    var interactive = CodeMirror(document.getElementById("output-interactive-textarea"), ({
        "mode": "javascript",
        "lineNumbers": false
    }));
    var interactiveDoc = interactive.doc;
    interactive.setSize(null, 20);
    interactive.on("beforeChange", (function(instance, change) {
        change.update(change.from, change.to, [change.text.join("").replace(/\n/g, "")]);
        return true;
    }));
    interactive.on("keyHandled", (function(instance, name, event) {
        if ((name === "Enter")) {
            var input = interactiveDoc.getValue();
            if (model.debug()) {
                step.finish(run.evaluate(model.debug(), evaluate.evaluateInput(input), out.write, errorOut.write));
            } else {
                step.finish(debug.beginInput(input, out.write, errorOut.write));
            }

        }

    }));
    (model = new(atum_debug_model.ConsoleViewModel)());
    ko.applyBindings(model);
    model.location.subscribe((function(current) {
        if ((current && current.start)) cm.removeLineClass((current.start.line - 1), "background", "active-line");

    }), null, "beforeChange");
    model.location.subscribe((function(x) {
        if (x) cm.addLineClass((x.start.line - 1), "background", "active-line");

    }));
    $((function() {
        var stopButton = $("button#stop-button"),
            runButton = $("button#run-button"),
            stepButton = $("button#step-button"),
            stepOutButton = $("button#step-out-button"),
            stepIntoButton = $("button#step-into-button"),
            stepOverButton = $("button#step-over-button");
        $("#container").layout();
        $("button#eval-button").button().click((function(e) {
            var input = doc.getValue();
            step.finish(debug.beginInput(input, out.write, errorOut.write));
        }));
        $("button#debug-button").button().click((function(e) {
            var input = doc.getValue();
            model.debug(debug.beginInput(input, out.write, errorOut.write));
            stopButton.attr("disabled", false);
            runButton.attr("disabled", false);
            stepButton.attr("disabled", false);
            stepOverButton.attr("disabled", false);
            stepIntoButton.attr("disabled", false);
            stepOutButton.attr("disabled", false);
        }));
        stopButton.button().attr("disabled", true).click((function(e) {
            model.stop();
        }));
        runButton.button().attr("disabled", true).click((function(e) {
            model.run();
        }));
        stepButton.button().attr("disabled", true).click((function(e) {
            model.stepOver();
        }));
        stepIntoButton.button().attr("disabled", true).click((function(e) {
            model.stepInto();
        }));
        stepOutButton.button().attr("disabled", true).click((function(e) {
            model.stepOut();
        }));
    }));
}))