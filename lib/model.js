/*
 * THIS FILE IS AUTO GENERATED from 'lib/model.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1", "atum/compute", "sheut/debug", "sheut/run", "sheut/step", "sheut/operations/context", "sheut/operations/reference", "atum_debug_console/object_explorer"], (function(require, exports, ko, compute, debug, run, step, context, reference, __o) {
    "use strict";
    var ConsoleViewModel;
    var ko = ko,
        compute = compute,
        debug = debug,
        run = run,
        step = step,
        context = context,
        reference = reference,
        __o = __o,
        AtumObject = __o["AtumObject"];
    var noop = (function(x) {
        return x;
    });
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
    (ConsoleViewModel = (function() {
        var self = this;
        (this.debug = ko.observable());
        (this.output = ko.observableArray());
        (this.environments = ko.computed((function() {
            return (self.debug() ? printEnvironments(self.debug()) : []);
        })));
        (this.stack = []);
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
    (ConsoleViewModel.prototype.stop = (function() {
        return this.debug(null);
    }));
    (exports.ConsoleViewModel = ConsoleViewModel);
}))