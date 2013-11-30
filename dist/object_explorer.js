/*
 * THIS FILE IS AUTO GENERATED from 'lib/object_explorer.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1", "amulet/record", "atum/compute", "sheut/debug", "sheut/run",
    "sheut/fun", "sheut/operations/object", "sheut/operations/reference"
], (function(require, exports, ko, record, __o, debug, run, __o0, object, reference) {
    "use strict";
    var AtumObject, updateAccordions, create, createForKey;
    var ko = ko,
        record = record,
        __o = __o,
        just = __o["just"],
        debug = debug,
        run = run,
        __o0 = __o0,
        map = __o0["map"],
        object = object,
        reference = reference;;
    var noop = (function() {});
    var AtumChild = record.declare(null, ["key", "value"], (function(key, value) {
        var self = this;
        (self.key = ko.observable(key));
        (self.value = ko.observable(value));
    }));
    (AtumObject = (function(d, x) {
        var self = this;
        var value = run.extract(d, reference.getValue(x), null);
        (self.data = x);
        (self.ctx = d);
        (self.value = ko.observable(value));
        (self.children = ko.observableArray());
        (self.type = ko.observable((value ? value.type : null)));
        (self.isObject = ko.observable((value && (value.type === "object"))));
        (self.displayValue = run.extract(d, object.displayName(x), "ERROR"));
    }));
    (AtumObject.prototype.getChildren = (function(data, event) {
        var self = this;
        if ((!self.isObject() || self.children()
            .length)) return;
        run.extract(self.ctx, object.getPrototype(self.data), null, (function(value) {
            if (value) self.children.push(new(AtumChild)("__proto__", new(AtumObject)(self.ctx,
                value)));
        }));
        run.extract(self.ctx, object.getOwnPropertyNames(self.data), null, map.bind(null, (function(key) {
            return run.extract(self.ctx, object.get(self.data, key), null, (function(value) {
                return self.children.push(new(AtumChild)(key, new(AtumObject)(self.ctx,
                    value)));
            }));
        })));
    }));
    (create = (function(value, ctx) {
        var obj = new(AtumObject)(debug.debug(just(value), ctx, noop, noop), value);
        obj.getChildren();
        return obj;
    }));
    (createForKey = (function(key, value, ctx) {
        return new(AtumChild)(key, create(value, ctx));
    }));
    (exports.AtumObject = AtumObject);
    (exports.updateAccordions = updateAccordions);
    (exports.create = create);
    (exports.createForKey = createForKey);
}))