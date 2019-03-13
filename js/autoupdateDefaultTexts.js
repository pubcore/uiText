"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isAutoupdateDefaultTextsEnabled = exports.initAutoupdateDefaultTexts = void 0;

var _pubcoreHttp = _interopRequireDefault(require("pubcore-http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var newDefaultText = {},
    config = {
  postUri: '',
  timeout: 3000
};

var postDefaultTexts = function postDefaultTexts() {
  return (0, _pubcoreHttp.default)(config.postUri, newDefaultText).then(function () {
    return newDefaultText = {};
  });
};

var initAutoupdateDefaultTexts = function initAutoupdateDefaultTexts(c) {
  config = _objectSpread({}, config, c);
};

exports.initAutoupdateDefaultTexts = initAutoupdateDefaultTexts;

var isAutoupdateDefaultTextsEnabled = function isAutoupdateDefaultTextsEnabled() {
  return typeof config.postUri === 'string' && config.postUri.length > 0;
};

exports.isAutoupdateDefaultTextsEnabled = isAutoupdateDefaultTextsEnabled;

var _default = function _default(ndt) {
  newDefaultText = ndt;
  postDefaultTexts();
};

exports.default = _default;