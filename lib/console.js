/*
 * THIS FILE IS AUTO GENERATED from 'lib/console.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1", "atum/interpret", "atum/compute", "atum/debug/debugger", "sheut/debug", "sheut/step", "sheut/run", "sheut/operations/reference", "sheut/operations/evaluation", "sheut/operations/context", "atum_debug_console/model"], (function(require, exports, ko, interpret, compute, atum_debugger, debug, step, run, reference, evaluate, context, atum_debug_model) {
    "use strict";
    var X;
    var ko = ko,
        interpret = interpret,
        compute = compute,
        atum_debugger = atum_debugger,
        debug = debug,
        step = step,
        run = run,
        reference = reference,
        evaluate = evaluate,
        context = context,
        atum_debug_model = atum_debug_model;;;;
    var map = Function.prototype.call.bind(Array.prototype.map);
    var reduce = Function.prototype.call.bind(Array.prototype.reduce);
    var get = (function(p, c) {
        return p[c];
    });
    var id = (function(x) {
        return x;
    });
    var model;
    var printBindings = (function(d, record) {
        var envRecord;
        if (record.ref) {
            var obj = run.extract(d, reference.getValue(record), null);
            (envRecord = obj.properties);
        } else(envRecord = record);

        return Object.keys(envRecord).reduce((function(p, c) {
            p.push(({
                "name": c,
                "value": run.extract(d, reference.getValue(envRecord[c]), null)
            }));
            return p;
        }), []);
    });
    var printFrame = (function(d, lex) {
        return ({
            "bindings": printBindings(d, lex.record)
        });
    });
    var printEnvironments = (function(d) {
        var environments = [];
        var environment = run.extract(d, context.environment, null);
        do {
            environments.push(printFrame(d, environment));
            (environment = run.extract(d, reference.getValue(environment.outer), null));
        }
        while (environment);
        return environments;
    });
    var out = ({
        "write": (function(x, ctx) {
            return model.push(x, ctx, false);
        })
    });
    var errorOut = ({
        "write": (function(x, ctx) {
            return model.push(x, ctx, true);
        })
    });
    var doc = CodeMirror(document.getElementById("input"), ({
        "mode": "javascript",
        "lineNumbers": true
    })).doc;
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
            step.finish(run.evaluate(model.debug(), evaluate.evaluateInput(input), out.write, errorOut.write));
        }

    }));
    (model = new(atum_debug_model.ConsoleViewModel)());
    ko.applyBindings(model);
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
            $(".object-browser").accordion(({
                "collapsible": true,
                "animate": 100
            }));
        }));
        $(".object-browser").accordion();
        $("button#debug-button").button().click((function() {
            var input = doc.getValue();
            model.debug(debug.beginInput(input, out.write, errorOut.write));
            stopButton.attr("disabled", false);
            runButton.attr("disabled", false);
            stepOverButton.attr("disabled", false);
            stepIntoButton.attr("disabled", false);
            stepOutButton.attr("disabled", false);
        }));
        stopButton.button().attr("disabled", true).click((function(e) {
            model.stop();
        }));
        runButton.button().attr("disabled", true).click((function(e) {
            if (model.debug()) {
                model.run();
            } else {
                model.finish();
            }

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
    (exports.X = X);
}))