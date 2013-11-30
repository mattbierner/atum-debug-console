/*
 * THIS FILE IS AUTO GENERATED from 'lib/model/stack.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1", "amulet/record", "sheut/run", "sheut/operations/stack"], (function(
    require, exports, ko, record, run, stack) {
    "use strict";
    var Stack, printStack;
    var ko = ko,
        record = record,
        run = run,
        stack = stack;
    var map = (function(f, a) {
        return Array.prototype.map.call(a, f);
    });
    (Stack = record.declare(null, ["current", "frames"], (function(current, frames) {
        (this.current = ko.observable(current));
        (this.frames = ko.observableArray(frames));
    })));
    var StackFrame = record.declare(null, ["name", "environment"], (function(name, environment) {
        (this.name = name);
        (this.environment = environment);
    }));
    (printStack = (function() {
        {
            var createStackFrame = (function(d, frame) {
                return StackFrame.create(run.extract(d, stack.getStackFrameName(frame)), frame.environment);
            });
            return (function(d) {
                return Stack.create(0, run.extract(d, stack.stack, [], map.bind(null,
                    createStackFrame.bind(null, d))));
            });
        }
    })());
    (exports.Stack = Stack);
    (exports.printStack = printStack);
}))