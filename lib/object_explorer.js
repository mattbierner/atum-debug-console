/*
 * THIS FILE IS AUTO GENERATED from 'lib/object_explorer.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1", "sheut/run", "sheut/fun", "sheut/operations/object", "sheut/operations/reference"], (function(require, exports, ko, run, __o, object, reference) {
    "use strict";
    var AtumObject;
    var ko = ko,
        run = run,
        __o = __o,
        map = __o["map"],
        object = object,
        reference = reference;;
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
        (self.getChildren = (function(data) {
            var target = data.value(),
                value = data.value().value();
            if (target.children().length) return;

            if ((value && (value.type === "object"))) {
                run.extract(d, object.getOwnPropertyNames(x), null, map.bind(null, (function(key) {
                    return run.extract(d, object.get(x, key), null, (function(value) {
                        return target.children.push(new(AtumChild)(key, new(AtumObject)(d, value)));
                    }));
                })));
            }

            $(".object-browser").accordion("refresh");
        }));
    }));
    (exports.AtumObject = AtumObject);
}))