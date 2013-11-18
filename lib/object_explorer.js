/*
 * THIS FILE IS AUTO GENERATED from 'lib/object_explorer.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1", "atum/compute", "sheut/debug", "sheut/run", "sheut/fun", "sheut/operations/object", "sheut/operations/reference"], (function(require, exports, ko, __o, debug, run, __o0, object, reference) {
    "use strict";
    var AtumObject, create;
    var ko = ko,
        __o = __o,
        just = __o["just"],
        debug = debug,
        run = run,
        __o0 = __o0,
        map = __o0["map"],
        object = object,
        reference = reference;;
    var noop = (function() {});
    var AtumChild = (function(key, value) {
        var self = this;
        (self.key = ko.observable(key));
        (self.value = ko.observable(value));
    });
    (AtumObject = (function(d, x) {
        var self = this;
        var value = run.extract(d, reference.getValue(x), null);
        (self.value = ko.observable(value));
        (self.children = ko.observableArray());
        (self.getChildren = (function(data, event) {
            var self = this;
            var value = self.value();
            if (this.children().length) return;

            if ((value && (value.type === "object"))) {
                run.extract(d, object.getOwnPropertyNames(x), null, map.bind(null, (function(key) {
                    return run.extract(d, object.get(x, key), null, (function(value) {
                        return self.children.push(new(AtumChild)(key, new(AtumObject)(d, value)));
                    }));
                })));
            }

            if (event) $(".object-browser").accordion(({
                "heightStyle": "content"
            }));

        }));
    }));
    (create = (function(value, ctx) {
        var obj = new(AtumObject)(debug.debug(just(value), ctx, noop, noop), value);
        obj.getChildren();
        return obj;
    }));
    (exports.AtumObject = AtumObject);
    (exports.create = create);
}))