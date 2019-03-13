"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _logMissingTextkey = _interopRequireDefault(require("./logMissingTextkey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(_ref) {
  var text = _ref.text,
      defaultText = _ref.defaultText,
      replacement = _ref.replacement,
      key = _ref.key;
  var result = typeof text === 'undefined' ? (0, _logMissingTextkey.default)(key, replacement, defaultText) || defaultText || key : text;

  if (result && replacement) {
    var noDataForReplacement = []; // search and replace replacement-tags in result text

    result = result.replace(/\{(\w+)\}/g, function (m, tag) {
      return tag in replacement ? replacement[tag] : noDataForReplacement.push(tag) && m;
    });

    if (noDataForReplacement.length) {
      /*eslint-disable no-console*/
      console.warn('No data for replacement(s): ' + noDataForReplacement.join(', '));
      /*eslint-enalbe no-console*/
    }
  }

  return '' + result;
}