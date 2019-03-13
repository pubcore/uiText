"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validateTextkey = _interopRequireDefault(require("./validateTextkey"));

var _replace = _interopRequireDefault(require("./replace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = function _default(T, key, arg3, arg4, isDev) {
  var defaultText = typeof arg3 === 'string' ? arg3 : undefined,
      replacement = _typeof(arg3) === 'object' ? arg3 : arg4,
      v = (0, _validateTextkey.default)({
    T: T,
    key: key,
    defaultText: defaultText,
    isDev: isDev
  });
  return (0, _replace.default)({
    text: v.text,
    defaultText: v.defaultText,
    replacement: replacement,
    key: v.key
  });
};

exports.default = _default;