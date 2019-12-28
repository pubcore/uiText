"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initLogMissingTextkey = exports.isMissingTextkey = void 0;

var _pubcoreHttp = _interopRequireDefault(require("pubcore-http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var missingTextkeys = {},
    missingTextkeyData = {},
    missingTextkeyTimer,
    config = {
  postUri: '',
  timeout: 3000
},
    requestCount = 0;

var postStatus = function postStatus() {
  return (0, _pubcoreHttp["default"])(config.postUri, missingTextkeyData).then(function () {
    missingTextkeyData = {};
    missingTextkeys = {};
  });
};

var startPostMissingTextkeyTimer = function startPostMissingTextkeyTimer() {
  if (missingTextkeyTimer) {
    clearTimeout(missingTextkeyTimer);
  }

  missingTextkeyTimer = setTimeout(postStatus, config.timeout);
};

var isMissingTextkey = function isMissingTextkey(key) {
  return missingTextkeys[key] || false;
};

exports.isMissingTextkey = isMissingTextkey;

var initLogMissingTextkey = function initLogMissingTextkey(c) {
  config = _objectSpread({}, config, {}, c);
};

exports.initLogMissingTextkey = initLogMissingTextkey;

var _default = function _default(key, replacement, defaultText) {
  if (!missingTextkeys[key]) {
    missingTextkeys[key] = true;
    missingTextkeyData[key] = (defaultText || key) + (replacement ? ' ' + JSON.stringify(replacement) : '');

    if (config.postUri && requestCount < 1) {
      requestCount++;

      if (config.timeout === 0) {
        postStatus();
      } else if (config.timeout > 0) {
        startPostMissingTextkeyTimer();
      }
    }
  }
};

exports["default"] = _default;