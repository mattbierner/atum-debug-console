/*
 * THIS FILE IS AUTO GENERATED from 'lib/model/console_view_model.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1", "amulet/record", "sheut/breakpoint", "sheut/debug", "sheut/run",
    "sheut/state", "sheut/step", "sheut/operations/context", "atum_debug_console/model/environment",
    "atum_debug_console/model/stack", "atum_debug_console/object_explorer"
], (function(require, exports, ko, record, breakpoint, debug, run, __o, step, context, __o0, __o1, object_explorer) {
    "use strict";
    var Result, Input, ConsoleViewModel;
    var ko = ko,
        record = record,
        breakpoint = breakpoint,
        debug = debug,
        run = run,
        __o = __o,
        Debugger = __o["Debugger"],
        addBreakpoint = __o["addBreakpoint"],
        removeBreakpoint = __o["removeBreakpoint"],
        step = step,
        context = context,
        __o0 = __o0,
        printEnvironments = __o0["printEnvironments"],
        __o1 = __o1,
        Stack = __o1["Stack"],
        printStack = __o1["printStack"],
        object_explorer = object_explorer,
        AtumObject = object_explorer["AtumObject"];
    (Result = record.declare(null, ["value", "error"]));
    (Result.prototype.type = "result");
    (Input = record.declare(null, ["input"]));
    (Input.prototype.type = "input");
    var Location = (function(type, value) {});
    var Breakpoint = (function(id, doc, handle) {
        (this.id = id);
        (this.doc = doc);
        (this.handle = handle);
    });
    (Breakpoint.prototype.getImpl = (function() {
        return breakpoint.Breakpoint.create(breakpoint.unconditional((this.doc.getLineNumber(this.handle) +
            1)));
    }));
    (ConsoleViewModel = (function() {
        var self = this;
        (self.debug = ko.observable());
        (self.debugState = ko.observable());
        (self.debugging = ko.computed((function() {
            return (self.debugState() && !self.debugState()
                .complete);
        })));
        (self.stack = ko.observable());
        (self.location = ko.observable());
        (self.environments = ko.observable());
        (self.output = ko.observableArray());
        (self.breakpoints = ko.observableArray());
        self.debug.subscribe((function(d) {
            if ((d && (self.debugState() !== d.debug))) self.debugState(d.debug);
        }));
        self.debugState.subscribe((function() {
            if (self.debug()) {
                self.stack(printStack(self.debug()));
                self.location(run.extract(self.debug(), context.location, null));
            } else {
                self.stack(new(Stack)(0, []));
                self.location(null);
            }
        }));
        self.stack.subscribe((function(stack) {
            return (function() {
                {
                    var current = (stack && stack.frames()[stack.current()]);
                    return self.environments((current ? printEnvironments(self.debug(),
                        current.environment) : []));
                }
            })
                .call(this);
        }));
    }));
    (ConsoleViewModel.prototype.beginDebugging = (function(input, ok, err) {
        return (function() {
            {
                var state = this.breakpoints()
                    .reduce((function(d, b) {
                        return addBreakpoint(d, b.id, b.getImpl());
                    }), Debugger.initial);
                return this.debug(debug.beginInput(state, input, ok, err));
            }
        })
            .call(this);
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
    (ConsoleViewModel.prototype.addBreakpoint = (function(doc, handle) {
        var b = new(Breakpoint)((this.breakpoints()
            .length + ""), doc, handle);
        if (this.debugging()) this.debug(addBreakpoint(this.debug(), b.id, b.getImpl()));
        this.breakpoints.push(b);
    }));
    (ConsoleViewModel.prototype.removeBreakpoint = (function(doc, handle) {
        var pred = (function(x) {
            return ((x.doc === doc) && (x.handle === handle));
        });
        var b = this.breakpoints()
            .filter(pred)[0];
        if (this.debugging()) this.debug(removeBreakpoint(this.debug(), b.id));
        this.breakpoints.remove(pred);
    }));
    (exports.Result = Result);
    (exports.Input = Input);
    (exports.ConsoleViewModel = ConsoleViewModel);
}))