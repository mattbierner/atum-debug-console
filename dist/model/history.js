/*
 * THIS FILE IS AUTO GENERATED from 'lib/model/history.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record"], (function(require, exports, record) {
    "use strict";
    var State, History;
    var record = record;
    (State = record.declare(null, ["debugState"]));
    (History = record.declare(null, ["states"], (function(states) {
        (this.states = states);
    })));
    (exports.State = State);
    (exports.History = History);
}))