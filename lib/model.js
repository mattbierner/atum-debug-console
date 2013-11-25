/*
 * THIS FILE IS AUTO GENERATED from 'lib/model.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1", "amulet/record", "atum/compute", "atum/operations/object",
    "sheut/debug", "sheut/run", "sheut/step", "sheut/operations/context", "sheut/operations/stack",
    "sheut/operations/reference", "atum_debug_console/object_explorer"
], (function(require, exports, ko, record, compute, object, debug, run, step, context, stack, reference,
    object_explorer) {
    "use strict";
    var Result, Input, ConsoleViewModel;
    var ko = ko,
        record = record,
        compute = compute,
        object = object,
        debug = debug,
        run = run,
        step = step,
        context = context,
        stack = stack,
        reference = reference,
        object_explorer = object_explorer,
        AtumObject = object_explorer["AtumObject"];;
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
    var Environment = (function(bindings) {
        (this.bindings = ko.observableArray(bindings));
    });
    var Binding = (function(name, value) {
        (this.name = name);
        (this.value = value);
    });
    var printBindings = (function(d, environment) {
        return (function() {
            {
                var bindings = run.extract(d, context.getEnvironmentBindings(environment), []);
                return bindings.reduce((function(p, c) {
                    p.push(new(Binding)(c, run.extract(d, context.getEnvironmentBinding(
                        environment, c), null, (function(x, ctx) {
                        return object_explorer.createForKey(c, x, ctx);
                    }))));
                    return p;
                }), []);
            }
        })();
    });
    var printFrame = (function(d, lex) {
        return new(Environment)(printBindings(d, lex));
    });
    var printEnvironments = (function(d, env) {
        var environments = [];
        var environment = env;
        do {
            environments.push(printFrame(d, environment));
            (environment = run.extract(d, context.getEnvironmentOuter(environment), null));
        }
        while (environment);
        return environments;
    });
    var Stack = (function(current, frames) {
        (this.current = ko.observable(current));
        (this.frames = ko.observableArray(frames));
    });
    var StackFrame = (function(name, environment) {
        (this.name = name);
        (this.environment = environment);
    });
    var createStackFrame = (function(d, frame) {
        return new(StackFrame)(run.extract(d, stack.getStackFrameName(frame)), frame.environment);
    });
    var printStack = (function(d) {
        return new(Stack)(0, run.extract(d, stack.stack, [], map.bind(null, createStackFrame.bind(null, d))));
    });
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