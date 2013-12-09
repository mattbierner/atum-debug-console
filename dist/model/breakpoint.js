/*
 * THIS FILE IS AUTO GENERATED from 'lib/model/breakpoint.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1", "amulet/record", "sheut/operations/evaluation", "sheut/breakpoint"], (
    function(require, exports, ko, record, __o, breakpoint) {
        "use strict";
        var Breakpoint, UnconditionalBreakpoint, ConditionalBreakpoint;
        var ko = ko,
            record = record,
            __o = __o,
            evaluateInput = __o["evaluateInput"],
            breakpoint = breakpoint;
        (Breakpoint = record.declare(null, ["id"]));
        (UnconditionalBreakpoint = record.extend(Breakpoint, ["doc", "handle"], (function(id, doc, handle) {
            (this.id = id);
            (this.doc = doc);
            (this.handle = handle);
            this.update();
        })));
        (UnconditionalBreakpoint.prototype.type = "unconditional");
        (UnconditionalBreakpoint.prototype.getImpl = (function() {
            return breakpoint.Breakpoint.create(breakpoint.unconditional((this.doc.getLineNumber(this.handle) +
                1)));
        }));
        (UnconditionalBreakpoint.prototype.update = (function() {
            var ln = this.doc.getLineNumber(this.handle);
            if ((ln === null)) return false;
            (this.line = (ln + 1));
            return true;
        }));
        (ConditionalBreakpoint = record.extend(Breakpoint, ["prog"], (function(id, prog) {
            (this.id = id);
            (this.prog = ko.observable(prog));
        })));
        (ConditionalBreakpoint.prototype.type = "conditional");
        (ConditionalBreakpoint.prototype.getImpl = (function() {
            return breakpoint.Breakpoint.create(breakpoint.conditional(evaluateInput(this.prog)));
        }));
        (exports.Breakpoint = Breakpoint);
        (exports.UnconditionalBreakpoint = UnconditionalBreakpoint);
        (exports.ConditionalBreakpoint = ConditionalBreakpoint);
    }))