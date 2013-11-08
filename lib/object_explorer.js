/*
 * THIS FILE IS AUTO GENERATED from 'lib/object_explorer.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1", "sheut/run", "sheut/operations/reference"], (function(require, exports, ko, run, reference) {
    "use strict";
    var AtumObject;
    var ko = ko,
        run = run,
        reference = reference;;
    var AtumChild = (function(key, value) {
        var self = this;
        (self.key = ko.observable(key));
        (self.value = ko.observable(value));
    });
    (AtumObject = (function(d, x, ctx) {
        var self = this;
        var value = run.extract(d, reference.getValue(x), null);
        (self.value = ko.observable(value));
        (self.children = ko.observableArray());
        (self.getChildren = (function(data) {
            var value = data.value().value();
            if ((data.value().children().length === 0)) {
                if (((value && value.type) && (value.type === "object"))) {
                    Object.keys(value.properties).map((function(key) {
                        data.value().children.push(new(AtumChild)(key, new(AtumObject)(d, value.properties[key].value, ctx)));
                    }));
                }

            }

            $(".object-browser").accordion().accordion("refresh");
        }));
    }));
    (exports.AtumObject = AtumObject);
}))