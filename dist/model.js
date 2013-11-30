/*
 * THIS FILE IS AUTO GENERATED from 'lib/model.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1", "amulet/record", "sheut/debug", "sheut/run", "sheut/step",
    "sheut/operations/context", "atum_debug_console/model/environment", "atum_debug_console/model/stack",
    "atum_debug_console/object_explorer"
], (function(require, exports, ko, record, debug, run, step, context, __o, __o0, object_explorer) {
    "use strict";
    var Result, Input, ConsoleViewModel;
    var ko = ko,
        record = record,
        debug = debug,
        run = run,
        step = step,
        context = context,
        __o = __o,
        printEnvironments = __o["printEnvironments"],
        __o0 = __o0,
        Stack = __o0["Stack"],
        printStack = __o0["printStack"],
        object_explorer = object_explorer,
        AtumObject = object_explorer["AtumObject"];
    var map = (function(f, a) {
        return Array.prototype.map.call(a, f);
    });
    var noop = (function(x) {
        return x;
    });
    (Result = record.declare(null, ["value", "error"]));
    (Result.prototype.type = "result");
    (Input = record.declare(null, ["input"]));
    (Input.prototype.type = "input");
    var Location = (function(type, value) {});
    (ConsoleViewModel = (function() {
        var self = this;
        (self.debug = ko.observable());
        (self.stack = ko.observable());
        (self.environments = ko.observable());
        (self.output = ko.observableArray());
        (self.breakpoints = ko.observableArray());
        (self.location = ko.computed((function() {
            return ((self.debug() && !self.debug()
                    .debug.complete) ? run.extract(self.debug(), context.location, null) :
                null);
        })));
        self.debug.subscribe((function(debug) {
            self.stack((debug ? printStack(debug) : new(Stack)(0, [])));
        }));
        self.stack.subscribe((function(stack) {
            return (function() {
                {
                    var current = (stack && stack.frames()[stack.current()]);
                    return self.environments((current ? printEnvironments(self.debug(),
                        current.environment) : []));
                }
            })();
        }));
    }));
    (ConsoleViewModel.prototype.finish = (function() {
        return this.debug(step.finish(this.debug()));
    }));
    (ConsoleViewModel.prototype.run = (function() {
        return this.debug(step.run(this.debug()));
    }));
    (ConsoleViewModel.prototype.stepOver = (function() {
        return this.debug(step.stepOver(this.debug()));
    }));
    (ConsoleViewModel.prototype.stepInto = (function() {
        return this.debug(step.stepNextLine(this.debug()));
    }));
    (ConsoleViewModel.prototype.stepOut = (function() {
        return this.debug(step.stepOut(this.debug()));
    }));
    (ConsoleViewModel.prototype.stop = (function() {
        return this.debug(null);
    }));
    (ConsoleViewModel.prototype.pushResult = (function(value, ctx, error) {
        return this.output.push(Result.create(object_explorer.create(value, ctx), error));
    }));
    (ConsoleViewModel.prototype.pushInput = (function(input) {
        return this.output.push(Input.create(input));
    }));
    (ConsoleViewModel.prototype.selectFrame = (function(index, frame) {
        this.stack(new(Stack)(index, this.stack()
            .frames()));
    }));
    (exports.Result = Result);
    (exports.Input = Input);
    (exports.ConsoleViewModel = ConsoleViewModel);
}))