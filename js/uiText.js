"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "initDefaultTexts", {
  enumerable: true,
  get: function get() {
    return _validateTextkey.initDefaultTexts;
  }
});
Object.defineProperty(exports, "initLogMissingTextkey", {
  enumerable: true,
  get: function get() {
    return _logMissingTextkey.initLogMissingTextkey;
  }
});
Object.defineProperty(exports, "initAutoupdateDefaultTexts", {
  enumerable: true,
  get: function get() {
    return _autoupdateDefaultTexts.initAutoupdateDefaultTexts;
  }
});
exports.uiTextOptional = exports.default = void 0;

var _replace = _interopRequireDefault(require("./replace"));

var _validateTextkey = require("./validateTextkey");

var _uiTextV = _interopRequireDefault(require("./uiTextV2"));

var _logMissingTextkey = require("./logMissingTextkey");

var _autoupdateDefaultTexts = require("./autoupdateDefaultTexts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = function _default(T, key, arg3, arg4) {
  if ((0, _validateTextkey.isDefaultTextModeEnabled)()) {
    var isDev = typeof process.env.NODE_ENV == 'string' && process.env.NODE_ENV.search('dev') != -1;
    return (0, _uiTextV.default)(T, key, arg3, arg4, isDev);
  } else {
    return (0, _replace.default)({
      text: T[key],
      defaultText: typeof arg3 === 'string' ? arg3 : '',
      replacement: _typeof(arg3) === 'object' ? arg3 : arg4,
      key: key
    });
  }
};

exports.default = _default;

var uiTextOptional = function uiTextOptional(T, key, arg3, arg4) {
  return (0, _replace.default)({
    text: T[key] === undefined ? typeof arg3 === 'string' ? arg3 : '' : T[key],
    defaultText: '',
    replacement: _typeof(arg3) === 'object' ? arg3 : arg4,
    key: key
  });
};

exports.uiTextOptional = uiTextOptional;