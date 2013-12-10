/*
 * THIS FILE IS AUTO GENERATED from 'lib/editor/interactive.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1", "sheut/debug", "sheut/run", "sheut/step", "sheut/operations/evaluation"], (
    function(require, exports, ko, debug, run, step, evaluate) {
        "use strict";
        var create;
        var ko = ko,
            debug = debug,
            run = run,
            step = step,
            evaluate = evaluate;;
        (create = (function(element, model) {
            var interactive = CodeMirror(element, ({
                "mode": "javascript",
                "lineNumbers": false
            }));
            interactive.setSize(null, 20);
            interactive.on("beforeChange", (function(instance, change) {
                change.update(change.from, change.to, [change.text.join("")
                    .replace(/\n/g, "")
                ]);
                return true;
            }));
            interactive.on("keyHandled", (function(instance, name, event) {
                if ((name === "Enter")) {
                    var input = instance.doc.getValue(); {
                        var writeOut = (function(x, ctx) {
                            interactive.setValue("");
                            model.pushInput(input);
                            model.pushResult(x, ctx, false);
                        }),
                            writeError = (function(x, ctx) {
                                interactive.setValue("");
                                model.pushInput(input);
                                model.pushResult(x, ctx, true);
                            });
                        if (model.debugState()) {
                            run.evaluate(model.debug(), evaluate.evaluateInput(input), writeOut,
                                writeError);
                        } else {
                            step.finish(debug.beginInitialInput(input, writeOut, writeError));
                        }
                    }
                }
            }));
            return interactive;
        }));
        (exports.create = create);
    }))