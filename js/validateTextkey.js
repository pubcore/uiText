"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isDefaultTextModeEnabled = exports.initDefaultTexts = void 0;

var _autoupdateDefaultTexts = _interopRequireWildcard(require("./autoupdateDefaultTexts"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var config = {
  autoupdateUri: '',
  defaultTexts: undefined
};

var initDefaultTexts = function initDefaultTexts(defaultTexts) {
  return config.defaultTexts = defaultTexts;
};

exports.initDefaultTexts = initDefaultTexts;

var isDefaultTextModeEnabled = function isDefaultTextModeEnabled() {
  return _typeof(config.defaultTexts) == 'object';
};

exports.isDefaultTextModeEnabled = isDefaultTextModeEnabled;

var _default = function _default(_ref) {
  var T = _ref.T,
      key = _ref.key,
      defaultText = _ref.defaultText,
      isDev = _ref.isDev;
  var prefix = '',
      postfix = '',
      dynamic = false,
      tmpDynamic = false,
      optional = false,
      tmpDefaultText = defaultText;
  isDev = isDev === true ? true : false;

  if (typeof key == 'string') {
    prefix = key;
  } else if (Array.isArray(key) && key.length > 0) {
    prefix = key[0];
    postfix = key[1] ? key[1] : '';
    tmpDynamic = true;
  } else {
    throw 'ERROR_KEY_INVALID';
  }

  key = prefix + postfix;
  var text = T[key];

  if (config.defaultTexts && config.defaultTexts[prefix] && typeof config.defaultTexts[prefix].text == 'string') {
    defaultText = config.defaultTexts[prefix].text;
    optional = config.defaultTexts[prefix].optional === true ? true : false;
    dynamic = config.defaultTexts[prefix].dynamic === true ? true : false;
  } else if (typeof tmpDefaultText == 'string') {
    tmpDynamic = dynamic;
    config.defaultTexts[prefix] = {
      text: tmpDefaultText,
      optional: optional,
      dynamic: dynamic
    };
    isDev && (0, _autoupdateDefaultTexts.isAutoupdateDefaultTextsEnabled)() && (0, _autoupdateDefaultTexts.default)(prefix, config.defaultTexts[prefix]);
  }

  if (isDev) {
    if (dynamic != tmpDynamic) throw 'ERROR_WRONG_KEY_USE_OR_DYNAMIC_KEY_DECLARATION [required_textkey1_static] [' + prefix + ']';
    if (typeof defaultText == 'undefined') throw 'ERROR_NO_DEFAULT_DEFINED [' + prefix + ']';
    if (typeof tmpDefaultText == 'string' && defaultText != tmpDefaultText) throw 'ERROR_DEFAULT_TEXT_CONFLICT [' + prefix + ']';
  }

  (dynamic != tmpDynamic || typeof defaultText == 'undefined' || optional) && (defaultText = '');

  if (optional) {
    text = text === undefined ? typeof tmpDefaultText === 'string' ? tmpDefaultText : '' : text;
  }

  return {
    text: text,
    key: key,
    defaultText: defaultText
  };
};

exports.default = _default;