"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
var PORT = 5431;
_app["default"].listen(PORT);
console.log("Server running... puerto ".concat(PORT, " "));