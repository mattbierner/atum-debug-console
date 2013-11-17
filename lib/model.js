/*
 * THIS FILE IS AUTO GENERATED from 'lib/model.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1", "atum/compute", "atum/operations/object", "sheut/debug", "sheut/run", "sheut/step", "sheut/operations/context", "sheut/operations/reference", "atum_debug_console/object_explorer"], (function(require, exports, ko, compute, object, debug, run, step, context, reference, __o) {
    "use strict";
    var ConsoleViewModel;
    var ko = ko,
        compute = compute,
        object = object,
        debug = debug,
        run = run,
        step = step,
        context = context,
        reference = reference,
        __o = __o,
        AtumObject = __o["AtumObject"];
    var map = (function(f, a) {
        return Array.prototype.map.call(a, f);
    });
    var noop = (function(x) {
        return x;
    });
    var printBindings = (function(d, environment) {
        return (function() {
            {
                var bindings = run.extract(d, context.getEnvironmentBindings(environment), []);
                return bindings.reduce((function(p, c) {
                    p.push(({
                        "name": c,
                        "value": run.extract(d, context.getEnvironmentBinding(environment, c), null)
                    }));
                    return p;
                }), []);
            }
        })();
    });
    var printFrame = (function(d, lex) {
        return ({
            "bindings": printBindings(d, lex)
        });
    });
    var printEnvironments = (function(d) {
        var environments = [];
        var environment = run.extract(d, context.environment, null);
        do {
            environments.push(printFrame(d, environment));
            (environment = run.extract(d, context.getEnvironmentOuter(environment), null));
        }
        while (environment);
        return environments;
    });
    var StackFrame = (function(name) {
        (this.name = name);
    });
    var createStackFrame = (function(d, frame) {
        return new(StackFrame)(run.extract(d, context.getStackFrameName(frame), "", (function(x) {
            return x.value;
        })));
    });
    var printStack = (function(d) {
        return run.extract(d, context.stack, [], map.bind(null, createStackFrame.bind(null, d)));
    });
    (ConsoleViewModel = (function() {
        var self = this;
        (self.debug = ko.observable());
        (self.output = ko.observableArray());
        (self.location = ko.computed((function() {
            return (self.debug() ? run.extract(self.debug(), context.location, null) : []);
        })));
        (self.environments = ko.computed((function() {
            return (self.debug() ? printEnvironments(self.debug()) : []);
        })));
        (self.stack = ko.computed((function() {
            return (self.debug() ? printStack(self.debug()) : []);
        })));
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
        return this.debug(step.step(this.debug()));
    }));
    (ConsoleViewModel.prototype.stepOut = (function() {
        return this.debug(step.stepOut(this.debug()));
    }));
    (ConsoleViewModel.prototype.stop = (function() {
        return this.debug(null);
    }));
    (ConsoleViewModel.prototype.push = (function(value, ctx, error) {
        var obj = new(AtumObject)(debug.debug(compute.just(value), ctx, noop, noop), value, ctx);
        obj.getChildren(({
            "key": "",
            "value": ko.observable(obj)
        }));
        this.output.push(({
            "value": obj,
            "error": !!error
        }));
        return this;
    }));
    (ConsoleViewModel.prototype.selectFrame = (function(item) {
        debugger;
    }));
    (exports.ConsoleViewModel = ConsoleViewModel);
}))