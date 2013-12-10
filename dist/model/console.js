/*
 * THIS FILE IS AUTO GENERATED from 'lib/model/console.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record"], (function(require, exports, record) {
    "use strict";
    var OutputValue, Result, Input;
    var record = record;
    (OutputValue = record.declare(null, []));
    (Result = record.extend(OutputValue, ["value", "error"]));
    (Result.prototype.type = "result");
    (Input = record.declare(OutputValue, ["input"]));
    (Input.prototype.type = "input");
    (exports.OutputValue = OutputValue);
    (exports.Result = Result);
    (exports.Input = Input);
}))