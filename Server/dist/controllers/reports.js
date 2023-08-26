"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateReport = exports.saveReport = exports.getReportsCount = exports.getReports = exports.getReport = exports.deleteReport = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var getReports = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var connection, _yield$connection$que, _yield$connection$que2, rows;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context.sent;
          _context.next = 5;
          return connection.query("SELECT * FROM reports");
        case 5:
          _yield$connection$que = _context.sent;
          _yield$connection$que2 = (0, _slicedToArray2["default"])(_yield$connection$que, 1);
          rows = _yield$connection$que2[0];
          res.json(rows);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getReports(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getReports = getReports;
var getReport = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var connection, _yield$connection$que3, _yield$connection$que4, rows;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context2.sent;
          _context2.next = 5;
          return connection.query("SELECT * FROM reports WHERE id =?", [req.params.id]);
        case 5:
          _yield$connection$que3 = _context2.sent;
          _yield$connection$que4 = (0, _slicedToArray2["default"])(_yield$connection$que3, 1);
          rows = _yield$connection$que4[0];
          res.json(rows[0]);
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getReport(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getReport = getReport;
var getReportsCount = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var connection, _yield$connection$que5, _yield$connection$que6, rows;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context3.sent;
          _context3.next = 5;
          return connection.query("SELECT COUNT(*) FROM reports");
        case 5:
          _yield$connection$que5 = _context3.sent;
          _yield$connection$que6 = (0, _slicedToArray2["default"])(_yield$connection$que5, 1);
          rows = _yield$connection$que6[0];
          res.json(rows[0]["COUNT(*)"]);
        case 9:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getReportsCount(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getReportsCount = getReportsCount;
var saveReport = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var connection, _yield$connection$que7, _yield$connection$que8, results;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context4.sent;
          _context4.next = 5;
          return connection.query("INSERT INTO reports(parroquia,distrito,circuito,categoria,latitud,longitud) VALUES(?,?,?,?,?,?)", [req.body.parroquia, req.body.distrito, req.body.circuito, req.body.categoria, req.body.latitud, req.body.longitud]);
        case 5:
          _yield$connection$que7 = _context4.sent;
          _yield$connection$que8 = (0, _slicedToArray2["default"])(_yield$connection$que7, 1);
          results = _yield$connection$que8[0];
          res.json(_objectSpread({
            id: results.insertId
          }, req.body));
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function saveReport(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.saveReport = saveReport;
var deleteReport = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var connection, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context5.sent;
          _context5.next = 5;
          return connection.query("DELETE FROM reports WHERE id=?", [req.params.id]);
        case 5:
          result = _context5.sent;
          res.sendStatus(204);
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function deleteReport(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteReport = deleteReport;
var updateReport = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var connection;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context6.sent;
          _context6.next = 5;
          return connection.query("UPDATE reports SET ? WHERE id=?", [req.body, req.params.id]);
        case 5:
          res.sendStatus(204);
        case 6:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function updateReport(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateReport = updateReport;