/*
 * THIS FILE IS AUTO GENERATED from 'lib/model/environment.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "knockout-2.2.1", "amulet/record", "sheut/run", "sheut/operations/context",
    "atum_debug_console/object_explorer"
], (function(require, exports, ko, record, __o, context, object_explorer) {
    "use strict";
    var printEnvironments;
    var ko = ko,
        record = record,
        __o = __o,
        extract = __o["extract"],
        context = context,
        object_explorer = object_explorer;
    var map = (function(f, a) {
        return Array.prototype.map.call(a, f);
    });
    var Environment = record.declare(null, ["bindings"], (function(bindings) {
        (this.bindings = ko.observableArray(bindings));
    }));
    var Binding = record.declare(null, ["name", "value"]);
    var printBindings = (function(d, environment) {
        return extract(d, context.getEnvironmentBindings(environment), [], map.bind(null, (function(binding) {
            return Binding.create(binding, extract(d, context.getEnvironmentBinding(environment,
                binding), null, object_explorer.createForKey.bind(null, binding)));
        })));
    });
    var printFrame = (function(d, lex) {
        return Environment.create(printBindings(d, lex));
    });
    (printEnvironments = (function(d, env) {
        var environments = [];
        var environment = env;
        do {
            environments.push(printFrame(d, environment));
            (environment = extract(d, context.getEnvironmentOuter(environment), null));
        }
        while (environment);
        return environments;
    }));
    (exports.printEnvironments = printEnvironments);
}))