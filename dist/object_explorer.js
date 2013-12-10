/*
 * THIS FILE IS AUTO GENERATED from 'lib/object_explorer.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1", "amulet/record", "atum/compute", "atum/value/type", "sheut/debug",
    "sheut/run", "sheut/fun", "sheut/operations/object", "sheut/operations/reference"
], (function(require, exports, ko, record, __o, __o0, debug, run, __o1, object, reference) {
    "use strict";
    var AtumObject, updateAccordions, create, createForKey;
    var ko = ko,
        record = record,
        __o = __o,
        just = __o["just"],
        __o0 = __o0,
        OBJECT_TYPE = __o0["OBJECT"],
        debug = debug,
        run = run,
        __o1 = __o1,
        map = __o1["map"],
        object = object,
        reference = reference;
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
        (self.type = (value ? value.type : null));
        (self.isObject = (self.type === OBJECT_TYPE));
        (self.displayValue = run.extract(d, object.displayName(x), "ERROR"));
    }));
    (AtumObject.prototype.getChildren = (function(data, event) {
        var self = this;
        if ((!self.isObject || self.children()
            .length)) return;
        run.extract(self.ctx, object.getPrototype(self.data), null, (function(value) {
            if (value) self.children.push(AtumChild.create("__proto__", new(AtumObject)(self.ctx,
                value)));
        }));
        run.extract(self.ctx, object.getOwnPropertyNames(self.data), null, map.bind(null, (function(key) {
            return run.extract(self.ctx, object.get(self.data, key), null, (function(value) {
                return self.children.push(AtumChild.create(key, new(AtumObject)(
                    self.ctx, value)));
            }));
        })));
    }));
    (create = (function(value, ctx) {
        var obj = new(AtumObject)(debug.debugInitial(just(value), ctx, noop, noop), value);
        obj.getChildren();
        return obj;
    }));
    (createForKey = (function(key, value, ctx) {
        return AtumChild.create(key, create(value, ctx));
    }));
    (exports.AtumObject = AtumObject);
    (exports.updateAccordions = updateAccordions);
    (exports.create = create);
    (exports.createForKey = createForKey);
}))